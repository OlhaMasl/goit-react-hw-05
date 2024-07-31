import { useEffect, useState } from "react";
import s from "./HomePage.module.css";
import { fetchMovies } from "../../services/api";
import { Link } from "react-router-dom";

const HomePage = () => {

    const [popularMovies, setpopularMovies] = useState([]);
     useEffect(() => {
    const getpopularMovies = async () => {
      try {
          const res = await fetchMovies();
          console.log(res);
        setpopularMovies(res);
      } catch (error) {
          console.log(error);
      };
    };
    getpopularMovies();
  }, []);
    return (
         <div>
            <ul className={s.popularMoviesList} >
                {popularMovies.map((movie) => (
                <li key={movie.id} >
                        <Link to={movie.id.toString()}>{movie.title}</Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default HomePage;