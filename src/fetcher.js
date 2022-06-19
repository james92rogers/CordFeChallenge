import axios from "axios";

const key = "137581d8409aa0f8398cd9770d35f3e5";

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

export const getPopular = async () => {
  const config = {
    method: "get",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    headers: {},
  };
  const response = await axios(config);
  return response.data;
};

export const getGenres = async () => {
  const config = {
    method: "get",
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
    headers: {},
  };
  const response = await axios(config);
  return response.data;
};

export const getMovies = async (query) => {
  const config = {
    method: "get",
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}`,
    headers: {},
  };
  const response = await axios(config);
  return response.data;
};

export const getMoviesByYear = async (query, year) => {
  const config = {
    method: "get",
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}&primary_release_year=${year}`,
    headers: {},
  };
  const response = await axios(config);
  return response.data;
};
