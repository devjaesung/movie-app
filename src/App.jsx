import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import MainPage from "./pages/MainPage";
import MovieDetailPage from "./pages/MovieDetailPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
