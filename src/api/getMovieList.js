import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_ACCESS_KEY,
  },
};

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
