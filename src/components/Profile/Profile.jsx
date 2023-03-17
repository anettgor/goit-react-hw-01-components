import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ username, location, avatar, tag, stats, id }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar}></img>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li key={id}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
export default Profile;
