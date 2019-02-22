import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import Options from './Options';
import { askAnotherQuestion, completeQuiz, finishQuiz } from '../actions/quizActions';
import Loader from './Loader';

const OPTION_COLORS = {
  default: "violet",
  correct: "green",
  wrong: "red"
},
  defaultOptionColors = [OPTION_COLORS['default'], OPTION_COLORS['default'], OPTION_COLORS['default'], OPTION_COLORS['default']];
class Question extends Component {
  state = {
    optionColors: defaultOptionColors
  };
  checkAnswer = (answered_index) => {
    const {
      currentQuestion: {
        correct_option_index,
        index
      },
      askAnotherQuestion,
      questions,
      finishQuiz,
      completeQuiz
    } = this.props,
      shouldAskAnotherQuestion = answered_index === correct_option_index,
      quizCompleted = index + 1 >= questions.length;
    if (quizCompleted) {
      completeQuiz();
    } else if (shouldAskAnotherQuestion) {
      let optionColors = [...this.state.optionColors];
      optionColors[answered_index] = OPTION_COLORS['correct'];
      this.setState({ optionColors });
      setTimeout(() => {
        askAnotherQuestion();
        this.setState({ optionColors: defaultOptionColors });
      }, 1000);
    } else {
      let optionColors = [...this.state.optionColors];
      optionColors[answered_index] = OPTION_COLORS['wrong'];
      this.setState({ optionColors });
      setTimeout(() => {
        finishQuiz();
        this.setState({ optionColors: defaultOptionColors });
      }, 1000);
    }
  }
  render() {
    const { fetching, currentQuestion, error, completed, finished } = this.props;
    if (fetching) {
      return <Loader />;
    }
    if (error) {
      return <h2>{error}</h2>;
    }
    if (completed) {
      return <h3>Congrats, You are a true genius.</h3>
    }
    if (finished) {
      return <h3>Oops, Try Again</h3>
    }
    return (
      <div>
        <Message color="violet">{currentQuestion.question}</Message>
        <Options colors={this.state.optionColors} currentQuestion={currentQuestion} checkAnswer={this.checkAnswer} />
      </div>
    );
  }

}

const mapStateToProps = ({ quiz }) => {
  return { ...quiz };
}

const mapDispatchToProps = (dispatch) => {
  return {
    askAnotherQuestion: () => { dispatch(askAnotherQuestion()) },
    completeQuiz: () => { dispatch(completeQuiz()) },
    finishQuiz: () => { dispatch(finishQuiz()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);

