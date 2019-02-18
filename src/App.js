import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from './actions/quizActions';
import Question from './Question';

class App extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <Question />
    );
  }
}

const mapDispatchToProps = {
  fetchQuestions
};


export default connect(null, mapDispatchToProps)(App);
