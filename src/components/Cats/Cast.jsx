import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMovieCastById, IMAGE_URL } from "servises/MovieAPI"
import unknown_personIMG from 'images/unknown_person.png'
import css from './Cast.module.css'
import { Loader } from "components/Loader/Loader"

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

    return (<ul className={css.CastList}>
        {isLoading && <Loader/>}
        {!!cast?.cast?.length && cast?.cast.map(
            ({
                cast_id,
                profile_path,
                name,
                known_for_department,
                character,
            }) => (
                <li className={css.CastItem} key={cast_id}>
                    {profile_path ? (<img src={imageUrl(profile_path)} alt={name} />)
                        : (<img src={unknown_personIMG} alt={name} />)}
                    <div className={css.CastInfo}>
                        <p className={`${css.CastText} ${css.CastTitle}`}>{name || '-'}</p>
                        <p className={`${css.CastText} ${css.CastSubTitle}`}>Character: {character || '-'}</p>
                        <p className={css.CastText}>{known_for_department || '-'}</p>
                    </div>
                </li>)
        )}
    </ul>
    )
}

 export default Cast