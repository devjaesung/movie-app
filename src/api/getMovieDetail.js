import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_ACCESS_KEY,
  },
};

// 영화 상세정보 가져오기
export const getMovieDetail = async (id) => {
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
      options
    );
    const data = response.data;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
