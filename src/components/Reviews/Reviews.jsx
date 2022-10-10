import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {getMovieReviewsById} from "servises/MovieAPI"
import css from './Reviews.module.css'
import { Loader } from "components/Loader/Loader"

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        movieId && setIsLoading(true);

        getMovieReviewsById(movieId)
        .then(({ results }) => {
            setReviews(results);
        })
        .catch(err => console.log(err))
        .finally(setIsLoading(false));
    }, [movieId]);

    return (
        <div className={css.ReviewsWrapper}>
            {isLoading && <Loader/>}
   
            {!!reviews?.length ? (
                reviews.map(({ id, author, content, created_at, updated_at }) => (
                    <div  key={id}>
                        <h4>Author: {author}</h4>
                        <div className={css.ReviewsDate}>
                            <p className={css.ReviewsDateItem}>
                                Created: {created_at.slice(0, 10).toLocaleString()}
                            </p>
                            {updated_at && (
                                <p className={css.ReviewsDateItem}>
                                    Updated: {updated_at.slice(0, 10).toLocaleString()}
                                </p>
                            )}
                        </div>
                        <p className={css.ReviewsContent}>{content}</p>
                    </div>
                ))
            ) : (
                <p className={css.NoReviews}>No Reviews...</p>
            )}
     </div>
     )
 }

 export default Reviews