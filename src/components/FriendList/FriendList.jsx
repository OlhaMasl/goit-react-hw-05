import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css"

const FriendList = ({friends}) => {
    return (<ul className={ s.friendsList}>
        {friends.map((item) => (<li key={item.id}>
            <FriendListItem
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
            />
        </li> ))}
    </ul>
    );
};

export default FriendList;