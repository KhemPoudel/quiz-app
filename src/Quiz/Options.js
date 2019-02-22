import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

export default ({ currentQuestion: { options, id }, checkAnswer, colors }) => {
  const optionsUI = options.map(
    (option, index) => {
      return (
        <Grid.Row key={`${id}_${index}`}>
          <Grid.Column>
            <Button
              size='massive'
              color={colors[index]}
              fluid
              onClick={() => checkAnswer(index)}>
              {option}
            </Button>
          </Grid.Column>
        </Grid.Row>
      );
    });
  return (
    <Grid>
      {optionsUI}
    </Grid>
  )
}