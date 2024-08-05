import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import s from "./MoviesPage.module.css";
import { fetchSearchMovie } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchMovies, setSearchMovies] = useState(null);

    const  handleSubmit = (e) => {
    e.preventDefault();
    const formInput = e.target.elements.query;
    if (formInput.value.trim() === "") {
       alert("Enter your search text")
      return;
    };
    setSearchValue(formInput.value.toLowerCase());
    e.target.reset();
    };

    console.log(searchValue);

    useEffect(() => {
    const getSearchMovies = async () => {
      try {
          const res = await fetchSearchMovie(searchValue);
         
        setSearchMovies(res.results);
      } catch (error) {
          console.log(error);
      };
    };
    getSearchMovies();
    }, []);

    if (!searchMovies) { return <h2>Loading...</h2> };
    console.log(searchMovies);
    
    return (
        <div className={s.movieSearchWrap }>
            <SearchBar submitFn={handleSubmit} />
            <MovieList movies={searchMovies} />
        </div>
    );
};

export default MoviesPage;