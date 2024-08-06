import s from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
    
const location = useLocation();

    return (
        <div className={s.listwrapper}>
            <ol className={s.popularMoviesList} >
                {movies.map((movie) => (
                <li key={movie.id} className={s.listItem}>
                        <Link to={movie.id.toString()} state={location}>{movie.title}</Link>
                </li>
            ))}
            </ol>
        </div>

    );
};

export default MovieList;