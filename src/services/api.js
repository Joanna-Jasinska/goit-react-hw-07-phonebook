import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '78f2b6656e3343e055b38455360ff324';

const params = new URLSearchParams({
  // baseURL: 'https://api.themoviedb.org',
  api_key: API_KEY,
  page: 1,
  include_adult: false,
  language: 'en-US',
});
axios.defaults.params = params;
const axiosIns = axios.create({ baseURL, params });

// `${baseURL}/3/trending/movie/day?api_key=${API_KEY}`
export const fetchTrending = async () => {
  const { data } = await axiosIns.get(`trending/movie/day`);
  return data;
};

// `${baseURL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
export const fetchMovieByName = async query => {
  const { data } = await axiosIns.get(`search/movie?query=${query}`);
  return data;
};

// `${baseURL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
export const fetchMovieById = async movieId => {
  const { data } = await axiosIns.get(`movie/${movieId}`);
  return data;
};

// `${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
export const fetchMovieCast = async movieId => {
  const { data } = await axiosIns.get(`movie/${movieId}/credits`);
  return data;
};
// `${baseURL}/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
export const fetchMovieReviews = async movieId => {
  const { data } = await axiosIns.get(`movie/${movieId}}/reviews`);
  return data;
};
