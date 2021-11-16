import React from 'react';
import './TodoList.css'

import { Container, Row } from 'react-grid-system';

function TodoList(props) {
  return (
    <Container>
      <Row>
        {props.children}
      </Row>
    </Container>
  );
}

export { TodoList };
