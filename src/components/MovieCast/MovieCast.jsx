import { useEffect, useState } from "react";
import s from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";

const MovieCast = () => {
    const [casts, setCast] = useState({});
    const { movieId } = useParams();

    useEffect(() => {

         const getMovieCast = async () => {
            try {
                const res = await fetchCastById(movieId);
                console.log(res.cast);
                setCast(res.cast);
            } catch (error) {
                console.log(error);
            }; 
        };
        getMovieCast();

        if (!movieId) return;
        if (!casts)  return <h2>Loading...</h2>;
        
    }, [movieId, casts]);

    return (
        <div className={s.castWrapper }>
            <ul>
                {casts.map(oneCast => (
                    <li key={oneCast.id} className={s.castList}>
                        <img src={`https://image.tmdb.org/t/p/w500${oneCast.profile_path}`} alt="photo" className={s.actorImg } />
                        <p className={s.castInfo}>{oneCast.original_name}</p>
                        <p className={s.castInfo}>{`Character: ${oneCast.character}`}</p>
                     </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;