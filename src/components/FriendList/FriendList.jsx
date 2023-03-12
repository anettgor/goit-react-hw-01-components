import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={css['friends-list']}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        isOnline={friend.isOnline}
        name={friend.name}
        avatar={friend.avatar}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
