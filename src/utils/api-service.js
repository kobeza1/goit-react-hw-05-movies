import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '724fbc146559c3ae1940072aea85abed';
let path = '';

export const fetchMoviesPopular = async () => {
  path = '/movie/popular';
  const response = await axios.get(`${BASE_URL + path}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.results;
};

export const fetchMoviesById = async id => {
  path = '/movie/';
  const response = await axios.get(`${BASE_URL + path + id}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
};

export const fetchMoviesByName = async name => {
  path = '/search/movie';
  const response = await axios.get(`${BASE_URL + path}`, {
    params: {
      api_key: KEY,
      query: name,
    },
  });
  return response.data.results;
};

export const fetchMoviesCast = async id => {
  path = `/movie/${id}/credits`;
  const response = await axios.get(`${BASE_URL + path}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.cast;
};

export const fetchMoviesReviews = async id => {
  path = `/movie/${id}/reviews`;
  const response = await axios.get(`${BASE_URL + path}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.results;
};
