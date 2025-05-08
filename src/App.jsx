import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import MainPage from "./pages/MainPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:id" element={<MovieDetailPage />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
