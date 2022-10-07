import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {getCastMovieById} from "servises/MovieAPI"


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState({cast:[{id:1, name:1}]})

    useEffect(() => {
        getCastMovieById(movieId).then(response => {
            setCast({...response})
        })
        return
    }, [movieId]);

    return <div>
        <h3>Cast:</h3>
        {cast.cast.map(item => (
            <p key={item.id}>{ item.name}</p>
        ))}
        </div>
 }

 export default Cast