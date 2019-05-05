import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Header } from './styles';

function Jumbutron() {
  return (
    <Header>
      <Jumbotron fluid className="jumbo">
        <div className="overlay" />
        <Container>
          <h1>Welcome</h1>
          <p>Learn to code</p>
        </Container>
      </Jumbotron>
    </Header>
  );
}

export default Jumbutron;
