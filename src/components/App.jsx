import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionFeedback = { good, neutral, bad }
  
  const  addFeedback = event => {
    switch (event) {
      case 'good':
            setGood((prevState) => (prevState + 1))
        break;
      case 'neutral':
            setNeutral((prevState) => (prevState + 1))
        break;
      case 'bad':
            setBad((prevState) => (prevState + 1))
        break;
      default:
        break;
        }
  };

  const countTotalFeedback = () => {
    return Object.values(optionFeedback).reduce((acc, option) => acc + option, 0)  }

  const countPositiveFeedbackPercentage = () => {
    const positivePercent = (100 / countTotalFeedback() * good)
    return positivePercent ? Math.round(positivePercent) : 0
  }



  return (
    <div>
        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={Object.keys(optionFeedback)}
            onLeaveFeedback={addFeedback}
            />
        </Section>


      <Section title="Statistick">
        {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
            />) : (<Notification message="There is no feedback"/>)}
        </Section>
      </div>
)
}

export default App