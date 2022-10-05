import axios from "axios";

const API = axios.create({ baseURL: 'https://api.themoviedb.org/3' });
const API_KEY = "d64cab5c2fd1471f534f5efbc7b67370";

export const fetchPopularMovies = () => API.get(`/movie/popular?api_key=${API_KEY}&page=1`);
export const fetchTheaterMovies = () => API.get(`/movie/now_playing?api_key=${API_KEY}&page=1`);
export const fetchUpcomingMovies = () => API.get(`/movie/upcoming?api_key=${API_KEY}&page=1`);
export const fetchTopRatedMovies = () => API.get(`/movie/top_rated?api_key=${API_KEY}&page=1`);