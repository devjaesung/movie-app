// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";

// 컨텍스트 생성
const AuthContext = createContext();

// 커스텀 훅으로 context 쉽게 사용
export const useAuth = () => useContext(AuthContext);

// Provider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
