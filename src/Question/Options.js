import React, { Component } from 'react';

export default class Options extends Component {
  checkAnswer = (event) => {
    console.log(event.target);
  }

  render() {
    const { incorrect_answers, correct_answer, id } = this.props.currentQuestion,
      randomIndex = Math.random() * (incorrect_answers.length + 1) * 100;
    incorrect_answers.splice(randomIndex, 0, correct_answer);
    const options = incorrect_answers.map((answer, index) => <li key={`${id}_${index}`} onClick={this.checkAnswer}>{answer}</li>);
    return <ol>{options}</ol>;

  }
}