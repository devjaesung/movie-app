import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="p-4 bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <Link to="/">
          <h1 className="text-xl font-bold">OZ 무비</h1>
        </Link>

        <div className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm">
            로그인
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded text-sm">
            회원가입
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="bg-gray-50 border border-gray-300 rounded p-2 text-gray-700 w-full max-w-xs"
        />
      </div>
    </header>
  );
};

export default NavBar;
