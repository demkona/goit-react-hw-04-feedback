import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css'

export const FeedbackOptions = ({ good, neutral, bad }) => {
    return (
        <div>
            <button className={css.btn} type="button" onClick={good}>Good</button>
            <button className={css.btn} type="button" onClick={neutral}>Neutral</button>
            <button className={css.btn} type="button" onClick={bad}> Bad</button>
        </div>

    )
}

FeedbackOptions.protoType = {
    good: PropTypes.func,
    neutral: PropTypes.func,
    bad: PropTypes.func,
}.isRequired
