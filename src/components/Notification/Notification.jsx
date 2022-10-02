import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

export const Notification = ({ message }) => {
    return (
        <div>
            <p className={css.message}>
                {message}
            </p>
        </div>
    )
}

Notification.protoType = {
    message: PropTypes.string.isRequired,
}