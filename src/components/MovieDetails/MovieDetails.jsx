import { useParams, Outlet, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
 import {getMovieById} from "servises/MovieAPI"

const imageUrl = (poster) => {
    return `https://image.tmdb.org/t/p/w500${poster}`
}

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({genres: [{id:1, name:1}]})
 
    useEffect(() => {
        getMovieById(movieId).then(response => {
            setMovie( response )
        })
        return
    }, [movieId]);      

    const { poster_path, original_title, title, overview } = movie;
    return <div>
        {!movie?.length && (
            <>
                <img src={imageUrl(poster_path)} alt={title} />
        <div>
            <h1>{original_title}</h1>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
                {movie.genres.map((x) => (
                    <li key={x.id}>{x.name}</li>
                ))}
            </ul>
        </div>
        <div>
            <p>Additional information</p>
            <ul>
                <li>
                    <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews">Reviews</NavLink>
                </li>
            </ul>
                </div>
                </>
)}

        <Outlet />
    </div>
    }

 export default MovieDetails