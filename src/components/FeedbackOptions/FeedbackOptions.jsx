import PropTypes from 'prop-types';


export default function FeedbackOptions({ options, onLeaveFeedback }) {
        return options.map(option => (
    <button
      type="button"
      key={option}
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
