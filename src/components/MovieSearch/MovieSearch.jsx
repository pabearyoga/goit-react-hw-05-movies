import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import SearchForm from '../MovieSearch/SearchForm/SearchForm';
import MovieItem from '../MovieItem/MovieItem';

import { getMoviesBySearchQuery } from '../../servises/MovieAPI';

import css from './MovieSearch.module.css'

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [searchQuery, setSearchQuery] = useState(query);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      setIsLoading(true);

      getMoviesBySearchQuery(searchQuery)
        .then(({ results }) => {
          setMovies(results);
        })
        .catch(err => toast.error(err))
        .finally(setIsLoading(false));
    }
  }, [searchQuery]);

  const onChangeQuery = query => {
    setSearchParams({ query });
  };

  const onFormSubmit = query => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchForm
        value={query}
        onChange={onChangeQuery}
        onFormSubmit={onFormSubmit}
      />
      {isLoading && <p>Loading...</p>}
      {!!movies?.length && !isLoading && (
        <>
          <ul className={css.MovieSearchList}>
            {movies.map(movie => (
              <li className={css.MovieSearchItem} key={movie.id} >
                <MovieItem movie={movie} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MoviesSearch;