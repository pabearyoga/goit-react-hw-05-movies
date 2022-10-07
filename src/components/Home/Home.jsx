import {fetchTrendingMovie} from "servises/MovieAPI"
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";


const imageUrl = (poster) => {
    return `https://image.tmdb.org/t/p/w500${poster}`
}

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])


    useEffect(() => {
        fetchTrendingMovie().then(data => {
            setTrendingMovies(data)
        })
    },[])

    return <main>
                <div>
                    <ul>
                        {trendingMovies.map(trendingMovie => (
                            <li key={trendingMovie.id} >
                            <NavLink to={`movies/${trendingMovie.id}`} ><img src={imageUrl(trendingMovie.poster_path)} alt={trendingMovie.title}/></NavLink> 
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
 }

 export default Home