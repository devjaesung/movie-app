// pages/Login.jsx
import React, { useState } from "react";
import InputField from "../components/InputField";
import { validate } from "../utils/validate";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmail } from "../supabase";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useAuth();

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null); // 로그인 실패 시 메시지용

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(values).forEach((key) => {
      newErrors[key] = validate(key, values[key]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every((v) => !v)) {
      const { data, error } = await signInWithEmail(
        values.email,
        values.password
      );
      if (error) {
        setSubmitError("이메일 또는 비밀번호가 올바르지 않습니다.");
      } else {
        setUser(data.user);
        alert("로그인 성공!");
        navigate("/"); // 로그인 성공 시 메인 페이지로 이동
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 bg-gray-100 p-6"
      >
        <Link to="/">
          <h1 className="text-3xl font-bold text-center mb-4">OZ 무비</h1>
        </Link>

        {submitError && (
          <p className="text-red-500 text-sm mb-2">{submitError}</p>
        )}

        <InputField
          label="이메일"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="비밀번호"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded mt-2 cursor-pointer"
          type="submit"
        >
          로그인
        </button>
      </form>

      <div className="flex justify-center mt-4">
        <p className="text-gray-500">아직 회원이 아니신가요?</p>
        <Link to="/signup" className="text-blue-500 ml-2 underline">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
