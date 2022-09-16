import React, { Component } from "react";
import Statisticks from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  addFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  countTotalFeedback  () {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0)  }

  countPositiveFeedbackPercentage = () => {
    const positivePercent = (100 / this.countTotalFeedback() * this.state.good)
    return positivePercent ? Math.round(positivePercent) : 0
  }
  
  render() {

    return (

      <div>

        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
            />
        </Section>


        <Section title="Statistick">
          {this.countTotalFeedback() > 0 ? (
            <Statisticks
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />) : (<Notification message="There is no feedback"/>)}
        </Section>
      </div>
    )
  }

}


export default App