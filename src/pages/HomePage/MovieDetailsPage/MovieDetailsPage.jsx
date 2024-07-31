import { useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const params = useParams();
    return (
        <div>
            <h1>movie details</h1>
        </div>
    );
};

export default MovieDetailsPage;