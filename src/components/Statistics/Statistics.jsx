import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'components/back/randomColor';

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.stList}>
            {stats.map(stats => (<li className={css.item} key={stats.id} style={{backgroundColor: getRandomHexColor()}}>
                <span className={css.label}>{stats.label}</span>
                <span className={css.perc}>{stats.percentage}%</span>
            </li>))}
        </ul>
    </section>
}
Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        label: PropTypes.string,
        parcentage: PropTypes.number,
    })
}