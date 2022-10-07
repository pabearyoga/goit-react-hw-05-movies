import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {getReviewsMovieById} from "servises/MovieAPI"

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState({ results: [{author: '1', id: '22', content: 3 }]})

    useEffect(() => {
        getReviewsMovieById(movieId).then(response => {
            setReviews({...response})
        })
        return
    }, [movieId]);

     return <div>
                <h3>Reviews:</h3>
         {reviews.results.map(item => (
                    <>
                        <h4 key={item.author}>Author: { item.author}</h4>
                        <p key={item.id}>{item.content}</p>
                    </>
                ))}
            </div>
 }

 export default Reviews