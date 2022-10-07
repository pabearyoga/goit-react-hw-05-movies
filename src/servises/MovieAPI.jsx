import axios from 'axios';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const getMovies = async ({ pathName, param={} }) => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  const searchParam = new URLSearchParams({
  api_key: '8981d06a4174dd7b5006af470bdeff3a',
  ...param
  });
  return axios
    .get(`${pathName}?${searchParam}`)
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject(`Error: ${response.message}`);
      }

      if (response.data.total_results === 0) {
        return Promise.reject(
          'Sorry, no matches found. Please try again.'
        );
      }

      return response.data;
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

export const getTrendingMovies = () => {
  return getMovies({ pathName: '/trending/movie/day' })
};

     
export const getMoviesBySearchQuery = (query) => {
  return getMovies({
    pathName: '/search/movie',
    param: {query}
  })
};
  
export const getMovieDetailsById = (movieId) => {
  return getMovies({
    pathName: `/movie/${movieId}`
  })
};
export const getMovieCastById = (movieId) => {
  return getMovies({
    pathName: `/movie/${movieId}/credits`
  })
};

export const getMovieReviewsById = (movieId) => {
  return getMovies({
    pathName: `/movie/${movieId}/reviews`
  })
};