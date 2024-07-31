import s from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({movies}) => {
    return (
        <div className={s.listwrapper}>
            <ol className={s.popularMoviesList} >
                {movies.map((movie) => (
                <li key={movie.id} className={s.listItem}>
                        <Link to={movie.id.toString()}>{movie.title}</Link>
                </li>
            ))}
            </ol>
        </div>

    );
};

export default MovieList;