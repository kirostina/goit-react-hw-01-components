import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, location, tag, avatar, stats }) => {
    return <div className={css.profile}>
        <div className={css.decr}>
            <img
                src={avatar}
                alt="Avatar"
                className={css.avatar} />
            <p className={css.name}>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>
        <ul className={css.stats}>
            <li>
                <span className={css.label}>Followers</span>
                <span className={css.number}>{stats.followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                <span className={css.number}>{stats.views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                <span className={css.number}>{stats.likes}</span>
            </li>
        </ul>
    </div>
};

Profile.protoTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}