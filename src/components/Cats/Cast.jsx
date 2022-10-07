import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMovieCastById, IMAGE_URL } from "servises/MovieAPI"
import unknown_personIMG from 'images/unknown_person.png'

const imageUrl = (poster) => {
    return `${IMAGE_URL}${poster}`
}


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        movieId && setIsLoading(true);

        getMovieCastById(movieId)
            .then(results => {
                setCast(results);
            })
            .catch(err => console.log(err))
            .finally(setIsLoading(false));
    }, [movieId]);

    return (<ul>
        {isLoading && <p>Loading...</p>}
        {!!cast?.cast?.length && cast?.cast.map(
            ({
                cast_id,
                profile_path,
                name,
                known_for_department,
                character,
            }) => (
                <li key={cast_id}>
                    {profile_path ? (<img src={imageUrl(profile_path)} alt={name} />)
                        : (<img src={unknown_personIMG} alt={name} />)}
                    <div>
                        <p>{name || '-'}</p>
                        <p>Character: {character || '-'}</p>
                        <p>{known_for_department || '-'}</p>
                    </div>
                </li>)
        )}
    </ul>
    )
}

 export default Cast