import { useParams, Outlet, NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import {getMovieDetailsById} from "servises/MovieAPI"
import { IMAGE_URL } from "servises/MovieAPI";
import { toast } from 'react-toastify';
import placeholderIMG from 'images/placeholder.png'

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
        {isLoading && <p>Loading...</p>}
        {!movie?.length && (
            <>
                <NavLink to={state || `/${ROUTE_HOME_PAGE}`}>Go back</NavLink>
                {poster_path ? (<img src={imageUrl(poster_path)} alt={title} />) : (
                <img src={placeholderIMG} alt={title} />
              )}
                <div>
                    <h1>{original_title}</h1>
                    <h2>Overview</h2>
                    <p>{overview || '-'}</p>
                    <h3>Genres</h3>
                    <p>{genres?.map(genre => genre.name).join(', ') || '-'}</p>
                </div>
                <div>
                    <h3>Additional information</h3>
                    <ul>
                        <li>
                            <NavLink to="cast" state={state}>Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to="reviews" state={state}>Reviews</NavLink>
                        </li>
                    </ul>
                </div>
            </>
)}

        <Outlet />
    </div>
    }

 export default MovieDetails