import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.list}>
            {options.map((option, index) => (
                <li className={css.listItem} key={index}>
                    <button className={css.btn} type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
                </li>
            ))}
        </ul>
    )
}


FeedbackOptions.protoType = {
    options: PropTypes.func,
    onLeaveFeedback: PropTypes.func,
}.isRequired


