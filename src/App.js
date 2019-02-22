import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from './actions/quizActions';
import { Grid, Container } from 'semantic-ui-react';
import Quiz from './Quiz';
import FixedMenu from './common/FixedMenu';

class App extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
        <FixedMenu />
        <Grid centered columns={2} style={{ marginTop: "7em" }}>
          <Grid.Column>
            <Container>
              <Quiz />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchQuestions
};


export default connect(null, mapDispatchToProps)(App);
