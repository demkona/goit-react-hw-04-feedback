import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css'

export const FeedbackOptions = ({ handleChange }) => {
    return (
        <>
            <button
                className={css.btn}
                type="button"
                name="good"
                onClick={handleChange}>
                good
            </button>
            <button
                className={css.btn}
                type="button"
                name="neutral"
                onClick={handleChange}>
                neutral
            </button>
            <button
                className={css.btn}
                type="button"
                name="bad"
                onClick={handleChange}>
                bad
            </button>
        </>

    )
}


FeedbackOptions.protoType = {
    handleChange: PropTypes.func,
}.isRequired


