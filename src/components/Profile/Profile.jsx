import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
    return <div className={s.container}>
      <div className={s.description}>
        {/* <div className={s.avatarBox}> */}
    <img 
      src={avatar}
      alt={username}
      className={s.avatar}
          />
          {/* </div> */}
    <p className={s.name}>{username}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.userStats}>
      <span className={s.label}>Followers </span>
      <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li className={s.userStats}>
      <span className={s.label}>Views </span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li className={s.userStats}>
      <span className={s.label}>Likes </span>
      <span className={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    Followers: PropTypes.number,
    Views: PropTypes.number,
    Likes: PropTypes.number,
  })
};
