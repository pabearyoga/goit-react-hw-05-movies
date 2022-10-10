import { useParams, Outlet, NavLink, useLocation } from "react-router-dom"
import { Suspense, useState, useEffect } from "react"
import {getMovieDetailsById} from "servises/MovieAPI"
import { IMAGE_URL } from "servises/MovieAPI";
import { toast } from 'react-toastify';
import placeholderIMG from 'images/placeholder.jpeg'
import css from './MovieDetails.module.css'
import { Loader } from "components/Loader/Loader"


const imageUrl = (poster) => {
    return `${IMAGE_URL}${poster}`
}

const MovieDetails = () => {
    const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;
    const { state } = useLocation();
    const { movieId } = useParams();
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    movieId && setIsLoading(true);

    getMovieDetailsById(movieId)
      .then(results => {
        setMovie(results);
      })
      .catch(err => toast.error(err))
      .finally(setIsLoading(false));
  }, [movieId]);     

    const { poster_path, original_title, title, overview, genres } = movie;
    return <div>
        {isLoading && <Loader/>}
        {!movie?.length && (
            <div className={css.MovieContainer}>
                <NavLink className={css.GoBackBtn} to={state || `/${ROUTE_HOME_PAGE}`}>Go back</NavLink>
                <div className={css.MovieDetailsWrapper}>
                    {poster_path ? (<img className={css.MoviePoster} src={imageUrl(poster_path)} alt={title} />) : (<img className={css.MoviePoster} src={placeholderIMG} alt={title} />)}
                    
                    <div className={css.MovieInfo}>
                        <h1 className={css.MovieTitle}>{original_title}</h1>
                        <p className={css.MovieSubTitle}>Overview</p>
                        <p className={css.MovieText}>{overview || '-'}</p>
                        <p className={css.MovieSubTitle}>Genres</p>
                        <p className={css.MovieText}>{genres?.map(genre => genre.name).join(', ') || '-'}</p>
                    </div>

                </div>
                <div className={css.AdditionalInformationWrapper}>
                    <ul className={css.AdditionalInformationList}>
                        <li className={css.MovieSubTitle}>
                            <NavLink className={({ isActive }) => (isActive ? `${css.active}` : `${css.AdditionalInformationLink}`)} to="cast" state={state}>Cast</NavLink>
                        </li>
                        <li className={css.MovieSubTitle}>
                            <NavLink className={({ isActive }) => (isActive ? `${css.active}` : `${css.AdditionalInformationLink}`)} to="reviews" state={state}>Reviews</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
)}

        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
    </div>
    }

 export default MovieDetails