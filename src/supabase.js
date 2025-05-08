// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// 회원가입
export async function signUpNewUser(email, password, username) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "http://localhost:5173/signin",
      data: {
        username: username,
      },
    },
  });

  if (error) {
    console.error("Error signing up:", error);
  } else {
    console.log("User signed up successfully:", data);
  }

  return { data, error };
}

// 이메일 로그인
export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.error("Error signing in:", error);
  } else {
    console.log("User signed in successfully:", data);
  }

  return { data, error };
}

// 로그아웃
export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
  } else {
    console.log("User signed out successfully.");
  }
}
