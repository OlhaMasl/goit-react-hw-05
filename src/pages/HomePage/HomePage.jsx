import { useEffect, useState } from "react";
import s from "./HomePage.module.css";
import { fetchMovies } from "../../services/api";

import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";

const HomePage = () => {

  const [popularMovies, setpopularMovies] = useState([]);
  

     useEffect(() => {
    const getpopularMovies = async () => {
      try {
          const res = await fetchMovies();
         
        setpopularMovies(res.results);
      } catch (error) {
          console.log(error);
      };
    };
    getpopularMovies();
  }, []);
    return (
      <div className={s.container}>
        <h2 className={s.title}>Trending today</h2>
        <MovieList movies={popularMovies} />
        </div>
    );
};

export default HomePage;