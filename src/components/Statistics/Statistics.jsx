import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={css.container}>
            <span className={css.item}>Good:  {good}</span>
            <span className={css.item}>Neutral:  {neutral}</span>
            <span className={css.item}>Bad:  {bad}</span>
            <span className={css.item}>Total:  {total()} </span>
            <span className={css.item}>Positive feedback:  {positivePercentage()} %</span>
        </div>
    )
}

Statistics.protoType = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
}.iisRequired
