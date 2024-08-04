import { Route, Routes } from "react-router-dom";
import "../index.css"
import Header from "./Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "../pages/HomePage/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./MovieCast/MovieCast";


const App = () => {
    return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
          {/* <Route path="/movies" element={<MoviesPage />} /> */}
        <Route path="/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<p>reviews</p>} />  
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;

