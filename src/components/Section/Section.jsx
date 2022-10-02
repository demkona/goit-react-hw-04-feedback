import PropTypes from 'prop-types';
import css from '../Section/Section.module.css'

export const Section = ({ title, children }) => {
    return (
        <div>
            <h1 className={css.titleHeader}>{title}</h1>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
}.isRequired