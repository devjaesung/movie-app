import { Routes, Route } from "react-router-dom";
import movieDetail from "@/mocks/movieDetailData.json";
import MovieDetail from "@/components/MovieDetail";
import Layout from "@/components/Layout";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/details"
            element={<MovieDetail movieDetail={movieDetail} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
