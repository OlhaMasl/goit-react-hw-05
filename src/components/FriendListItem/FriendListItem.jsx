import s from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={s.friendCard }>
            <img className={ s.friendFhoto} src={ avatar } alt="Avatar" width="48" />
            <p className={s.friendName }>{name}</p>
            {isOnline ? <p className={s.online}>Online</p> : <p className={ s.offline}>Offline</p>}
        </div>);
};

export default FriendListItem;