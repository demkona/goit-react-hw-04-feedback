import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={css.container}>
            <span>Good:  {good}</span>
            <span>Neutral:  {neutral}</span>
            <span>Bad:  {bad}</span>
            <span>Total:  {total()} </span>
            <span>Positive feedback:  {positivePercentage()} %</span>
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
