import { useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../../../services/api";

const MovieDetailsPage = () => {
    const params = useParams();
    const [oneMovie, setOneMovie] = useState({});
    useEffect(() => {
        const getOneMovie = async () => {
            try {
                const response = await fetchMovieById(params.movieId);
                console.log(response);
                setOneMovie(response);
            } catch (error) {
                console.log(error);
            }; 
        };
        getOneMovie();
    });

    const getGenres = oneMovie.genres;
    //   console.log(getGenres);
    const genres = getGenres.map(genre => genre.name);
    // console.log(genres);

    return (
        <div className={s.movieWrapper}>
            <img src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}` } alt="poster" />
            <div>
                <h2>{oneMovie.original_title}</h2>
                <p>{`Release date: ${oneMovie.release_date}`}</p>
                <p>{`User Score: ${oneMovie.vote_average}`}</p>
                <h3>Overview</h3>
                <p>{oneMovie.overview}</p>
                <h3>Genres</h3>
                <p>{genres.join(", ") }</p>
            </div>
        </div>
    );
};

export default MovieDetailsPage;