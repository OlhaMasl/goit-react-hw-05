import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import s from "./MoviesPage.module.css";
import { fetchSearchMovie } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {

    const [searchMovies, setSearchMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();


    const  handleSubmit = (e) => {
    e.preventDefault();
    const formInput = e.target.elements.query;
    if (formInput.value.trim() === "") {
       alert("Enter your search text")
      return;
    };
        searchParams.set("query", formInput.value.toLowerCase());
        setSearchParams(searchParams);
    e.target.reset();
    };

    const searchValue = searchParams.get("query") ?? "";
    // console.log(searchValue);

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
    }, [searchValue]);

    if (!searchMovies) return <h2>Loading...</h2>;
    // console.log(searchMovies);
    
    return (
        <div className={s.movieSearchWrap }>
            <SearchBar submitFn={handleSubmit} />
            <MovieList movies={searchMovies} />
        </div>
    );
};

export default MoviesPage;