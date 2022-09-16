import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
import bgcFilter from 'components/Utilit/BgcBnt';


export default function FeedbackOptions({ options, onLeaveFeedback }) {

  return options.map(option => (  
    <button
      type="button"
      key={option}
      className={css.feedbackBtn}
      style={{backgroundColor: bgcFilter(option)}}
      onClick={() => onLeaveFeedback(option)}
    >
      {option[0].toUpperCase() + option.slice(1)}
    </button>
  ));
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
