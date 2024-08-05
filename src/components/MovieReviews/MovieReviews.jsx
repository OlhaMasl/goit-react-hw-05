import { useEffect, useState } from "react";
import s from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/api";

const MovieReviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {

         const getMovieReviews = async () => {
            try {
                const res = await fetchReviewsById(movieId);
                console.log(res.results);
                setReviews(res.results);
            } catch (error) {
                console.log(error);
            }; 
        };
        getMovieReviews();
        
    }, [movieId]);

     if (!movieId) return;
    if (!reviews) { return <h2>Loading...</h2> };

    return (
        <div className={s.reviewWrapper}> 
            <ul>
                {(reviews.length === 0) ? <h3 className={s.reviewAuthor}>We don`t have any reviews for this movie</h3> : reviews.map((review) => (
                    <li key={review.id} className={s.reviewItem}>
                        <h3 className={s.reviewAuthor}>{`Author: ${review.author}`}</h3>
                        <p className={s.reviewInfo}>{review.content}</p>
                        <p className={s.reviewInfo}>{`Date: ${review.created_at}` }</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieReviews;