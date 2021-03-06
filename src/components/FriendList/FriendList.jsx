import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={s.friendList}>
        {friends.map(friend => (
            <li className={s.item} key={friend.id}>
                <span className={friend.isOnline ? s.statusOn : s.statusOff}></span>
                <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={s.name}>{friend.name}</p>
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number,
        })
    )
}

export default FriendList;