import { Route, Routes } from "react-router-dom";
import "../index.css"
import Header from "./Header/Header";
// import HomePage from "../pages/HomePage/HomePage";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./MovieCast/MovieCast";
// import MovieReviews from "./MovieReviews/MovieReviews";
// import MoviesPage from "../pages/MoviesPage/MoviesPage";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const App = () => {
    return (
    <>
        <Header />
        <Suspense fallback={<h2 className="load">Loading...</h2>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />  
          </Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />  
        </Route>
        <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </Suspense>
    </>
  );
};

export default App;

