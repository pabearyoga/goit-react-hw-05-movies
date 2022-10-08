import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IMAGE_URL } from 'servises/MovieAPI';
import placeholderIMG from '../../images/placeholder.jpeg';

import css from "./MovieItem.module.css"

const imageUrl = (poster) => {
    return `${IMAGE_URL}${poster}`
}

const MovieItem = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const location = useLocation();

  return (
    <NavLink
      className={css.MovieItemLink}
      to={`/movies/${id}`}
      key={id}
      state={location}
    >
      <div className={css.MovieItemWrapper}>
        {poster_path ? (
          <img src={imageUrl(poster_path)} alt={title} />
        ) : (
          <img src={placeholderIMG} alt={title} />
        )}
      </div>
      <div className={css.MovieItemTitleWrapper}>
        <p className={css.MovieItemTitle}>{title || 'No name film'}</p>
      </div>
    </NavLink>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieItem;