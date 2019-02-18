import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Message } from 'semantic-ui-react';
import Options from './Options';
import { askAnotherQuestion, completeQuiz, finishQuiz } from '../actions/quizActions';

class Question extends Component {
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
      askAnotherQuestion();
    } else {
      finishQuiz();
    }
  }
  render() {
    const { fetching, currentQuestion, error, completed, finished } = this.props;
    console.log(completed, finished);
    if (fetching) {
      return <h2>loading...</h2>;
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
      <Grid centered columns={2}>
        <Grid.Column>
          <Container style={{ paddingTop: 10 }}>
            <Message>
              <Message.Content> {currentQuestion.question}</Message.Content>
            </Message>
            <Options currentQuestion={currentQuestion} checkAnswer={this.checkAnswer} />
          </Container>
        </Grid.Column>
      </Grid>
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

