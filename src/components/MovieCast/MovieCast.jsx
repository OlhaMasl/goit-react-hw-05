import { useEffect, useState } from "react";
import s from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";

const MovieCast = () => {
    const [casts, setCast] = useState(null);
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
        
    }, [movieId]);

    if (!movieId) return;
    if (!casts) { return <h2>Loading...</h2> };
    const defaultImg = "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

    return (
        <div className={s.castWrapper }>
            <ul>
                {casts.map(oneCast => (
                    <li key={oneCast.id} className={s.castList}>
                        <img src={oneCast.profile_path ? `https://image.tmdb.org/t/p/w500/${oneCast.profile_path}` : defaultImg} alt="photo" className={s.actorImg } />
                        <p className={s.castInfo}>{oneCast.original_name}</p>
                        <p className={s.castInfo}>{`Character: ${oneCast.character}`}</p>
                     </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;