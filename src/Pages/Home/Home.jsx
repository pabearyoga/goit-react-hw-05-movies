import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

import {getTrendingMovies} from "servises/MovieAPI"
import { Link } from "react-router-dom";
import { IMAGE_URL } from "servises/MovieAPI";

import css from "./Home.module.css"

import { Loader } from 'components/Loader/Loader';

const imageUrl = (poster) => {
    return `${IMAGE_URL}${poster}`
}

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);

        getTrendingMovies()
        .then(({ results }) => {
            setTrendingMovies(results);
        })
        .catch(err => toast.error(err))
        .finally(setIsLoading(false));
    }, []);


    return isLoading ? (<Loader/>) :
        (
            <main>
                <div>
                    <h1 className={css.TrendingMovieTitle}>Top-20 trending movies:</h1>
                    <ul className={css.TrendingMovieList}>
                        {trendingMovies.map(trendingMovie => (
                            <li className={css.TrendingMovieItem} key={trendingMovie.id} >
                                <Link to={`movies/${trendingMovie.id}`} ><img src={imageUrl(trendingMovie.poster_path)} alt={trendingMovie.title} /></Link>
                                <div className={css.TitleWrapper}>
                                    <p className={css.TrendingMovieItemTitle}>{trendingMovie.title}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        )
 }

 export default Home