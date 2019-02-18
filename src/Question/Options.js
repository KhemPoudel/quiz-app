import React from 'react';
import { Grid } from 'semantic-ui-react';
import Hexagon from '../common/Hexagon';

export default ({ currentQuestion: { options, id }, checkAnswer }) => {
  const optionsUI = options.map(
    (option, index) => {
      return (
        <Grid.Column width={8}>
          <Hexagon
            large
            color='violet'
            style={{ marginBottom: 5 }}
            fluid
            key={`${id}_${index}`}
            onClick={() => checkAnswer(index)}>
            {`${index + 1}. ${option}`}
          </Hexagon>
        </Grid.Column>
      );
    });
  return (
    <Grid>
      <Grid.Row>
        {optionsUI}
      </Grid.Row>
    </Grid>
  )
}