import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_ACCESS_KEY,
  },
};

// 영화 목록 가져오기
export const getMovieList = async (page = 1) => {
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`,
      options
    );
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// 검색 목록 가져오기
export const getSearchMovies = async (query) => {
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&language=ko-KR&page=1`,
      options
    );
    return response.data.results;
  } catch (err) {
    console.error("검색 요청 실패:", err);
    return [];
  }
};
