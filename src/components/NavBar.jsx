import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { signOutUser } from "../supabase.js";

const NavBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("query") || "");
  const { user, setUser } = useAuth();

  // 입력 변경 시
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      navigate("/"); // 검색어 없으면 메인으로
    } else {
      navigate(`/?query=${encodeURIComponent(value)}`);
    }
  };

  const handleLogout = async () => {
    await signOutUser();
    setUser(null);
    navigate("/");
  };

  return (
    <header className="p-4 bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <Link to="/">
          <h1 className="text-xl font-bold">OZ 무비</h1>
        </Link>
        {user ? (
          <div className="flex gap-4 items-center">
            <p>환영합니다, {user.user_metadata?.username || user.email} </p>
            <button
              onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm cursor-pointer"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm cursor-pointer">
                로그인
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded text-sm cursor-pointer">
                회원가입
              </button>
            </Link>
          </div>
        )}
      </div>

      <form className="flex justify-end">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={inputValue}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 rounded p-2 text-gray-700 w-full max-w-xs"
        />
      </form>
    </header>
  );
};

export default NavBar;
