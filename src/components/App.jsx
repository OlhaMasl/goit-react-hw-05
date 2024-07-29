import { Route, Routes } from "react-router-dom";
import "../index.css"
import Header from "./Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


const App = () => {
    return (
    <>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
          {/* <Route path="/movies" element={<MoviesPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;

