import css from './FriendList.module.css';
import PropTypes from 'prop-types';
const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48"></img>
    <p className={css.name}>{name}</p>
  </li>
);
FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
