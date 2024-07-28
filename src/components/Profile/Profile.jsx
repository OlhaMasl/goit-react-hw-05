import s from "./Profile.module.css"

const Profile = ({ name = "User Name", tag = "User Tag", location = "User Address", image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats = 0 }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.userInfo }>
                <img className={s.userFhoto } src={image}  alt={name} width="258"/>
                <p className={s.userName }>{name}</p>
                <p className={ s.userTag}>@{tag}</p>
                <p className={ s.userLocation}>{location}</p>
            </div>

            <ul className={s.userComm }>
                <li className={s.UserCommItem }>
                    <span className={s.commItem}>Followers</span>
                    <span className={s.commNumber}>{ stats.followers}</span>
                </li>
                <li className={s.UserCommItem }>
                    <span className={s.commItem}>Views</span>
                    <span className={s.commNumber}>{ stats.views}</span>
                </li>
                <li className={s.UserCommItem }>
                    <span className={s.commItem}>Likes</span>
                    <span className={s.commNumber}>{stats.likes }</span>
                </li>
            </ul>
        </div>
 
    );
};

export default Profile;