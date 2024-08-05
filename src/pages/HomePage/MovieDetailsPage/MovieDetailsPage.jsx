import { NavLink, Outlet, useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../../../services/api";
import clsx from "clsx";

const MovieDetailsPage = () => {
    const params = useParams();
    const [oneMovie, setOneMovie] = useState(null);
    useEffect(() => {
        const getOneMovie = async () => {
            try {
                const response = await fetchMovieById(params.movieId);
                // console.log(response);
                setOneMovie(response);
            } catch (error) {
                console.log(error);
            }; 
        };
        getOneMovie();
    }, [params.movieId]);
    
    if (!oneMovie) {
        return <h2>Loading...</h2>
    };

    const getGenres = oneMovie.genres;
    //   console.log(getGenres);
    const genres = getGenres.map(genre => genre.name);
    // console.log(genres);

    const buildLinkClass = ({ isActive }) => {
        return clsx(s.movieLink, isActive && s.active);
    };

    return (
    <div>
        <div className={s.movieWrapper}>
            <img src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`} alt="poster" className={s.posterImg } />
            <div className={s.infoWrapper}>
                <h2 className={s.movieTitle }>{oneMovie.original_title}</h2>
                <p className={s.movieInfo }>{`Release date: ${oneMovie.release_date}`}</p>
                <p className={s.movieInfo }>{`User Score: ${oneMovie.vote_average}`}</p>
                <h3 className={s.movieInfoTitle}>Overview</h3>
                <p className={s.movieInfo }>{oneMovie.overview}</p>
                <h3 className={s.movieInfoTitle}>Genres</h3>
                <p className={s.movieInfo }>{genres.join(", ") }</p>
               
            </div>
        </div>
            <div className={s.movieNav }>
                <NavLink to="cast" className={buildLinkClass}>Cast</NavLink>
                <NavLink to="reviews" className={buildLinkClass}>Reviews</NavLink>
            </div>
            <Outlet />
     </div>
    );
};

export default MovieDetailsPage;