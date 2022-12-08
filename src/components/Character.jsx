import React from 'react';
import { Card } from 'react-bootstrap';
import Status from './Status';

export default function Character({ ch }) {
  console.log("Character mounted");
  return (
    <Card style={{ width: '18rem' }
    }>
      <Card.Img variant="top" src={ch.image} />
      <Card.Title>{ch.name}</Card.Title>
      <Card.Body>
        <Status status={ch.status} />
        <Card.Text>Gender: {ch.gender}</Card.Text>
        <Card.Text>Species: {ch.species}</Card.Text>
      </Card.Body>
    </Card >
  );
}
