import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

export default () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          {/*<Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />*/}
          A SIMPLE QUIZ
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>
      </Container>
    </Menu>
  );
}