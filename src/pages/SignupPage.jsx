// src/pages/SignupPage.jsx
import React, { useState } from "react";
import InputField from "../components/InputField";
import { validate } from "../utils/validate";
import { Link, useNavigate } from "react-router-dom";
import { signUpNewUser } from "../supabase";

const SignupPage = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value, newValues),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      newErrors[key] = validate(key, values[key], values);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every((v) => !v)) {
      const { error } = await signUpNewUser(
        values.email,
        values.password,
        values.username
      );

      if (error) {
        setSubmitError("회원가입에 실패했습니다. 다시 시도해주세요.");
      } else {
        alert("회원가입 성공! 이메일 인증 후 로그인 해주세요.");
        navigate("/login");
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
          label="이름"
          name="username"
          value={values.username}
          onChange={handleChange}
          error={errors.username}
        />
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
        <InputField
          label="비밀번호 확인"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <button
          className="w-full bg-blue-500 text-white p-2 rounded mt-2 cursor-pointer"
          type="submit"
        >
          회원가입
        </button>
      </form>

      <div className="flex justify-center mt-4">
        <p className="text-gray-500">회원이신가요?</p>
        <Link to="/login" className="text-blue-500 ml-2 underline">
          로그인
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
