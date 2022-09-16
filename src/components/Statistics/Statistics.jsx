import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    
      <div className={css.statistics}>
        <p className={`${css.statisticsItem} ${css.good}`}>Good: {good}</p>
        <p className={`${css.statisticsItem} ${css.neutral}`}>Neutral: {neutral}</p>
        <p className={`${css.statisticsItem} ${css.bad}`}>Bad: {bad}</p>
        <p className={`${css.statisticsItem} ${css.total}`}>Total: {total}</p>
        <span className={css.positiveFeedbackWrapper}>
          <p  className={`${css.statisticsItem} ${css.positiveFeedback}`}>Positive feedback: {positivePercentage}%</p>
        </span>
        </div>
        )  
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

