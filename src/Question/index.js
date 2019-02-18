import React, { Component } from 'react';
import { connect } from 'react-redux';
import Options from './Options';

class Question extends Component {
  render() {
    const { fetching, currentQuestion } = this.props;
    if (fetching) {
      return <h2>loading...</h2>;
    }
    return (
      <div>
        <h2>{currentQuestion.question.replace(/&quot;/g, '\\"')}</h2>
        <Options currentQuestion={currentQuestion} />
      </div >
    );
  }

}

const mapStateToProps = ({ quiz }) => {
  return { ...quiz };
}

export default connect(mapStateToProps)(Question);

