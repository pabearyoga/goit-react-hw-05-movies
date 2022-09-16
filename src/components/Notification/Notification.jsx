import PropTypes from 'prop-types';
import css from './Notification.module.css'

export default function Notification({ message }) {
  return (
    
        <div>
          <h1 className={css.Notification}>{message}</h1>
        </div>
        )  
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
