import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {getMovieReviewsById} from "servises/MovieAPI"

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
        <div>
            {isLoading && <p>Loading...</p>}
   
            {!!reviews?.length ? (
                reviews.map(({ id, author, content, created_at, updated_at }) => (
                    <div key={id}>
                        <h4>Author: {author}</h4>
                        <div>
                            <p>
                                Created: {created_at.slice(0, 10).toLocaleString()}
                            </p>
                            {updated_at && (
                                <p>
                                    Updated: {updated_at.slice(0, 10).toLocaleString()}
                                </p>
                            )}
                        </div>
                        <p>{content}</p>
                    </div>
                ))
            ) : (
                <p>No Reviews</p>
            )}
     </div>
     )
 }

 export default Reviews