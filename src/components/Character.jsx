import React from 'react';
import { Card } from 'react-bootstrap';

export default function Character({ ch }) {
  return (
    <Card style={{ width: '18rem' }
    }>
      <Card.Img variant="top" src={ch.image} />
      <Card.Title>{ch.name}</Card.Title>
      <Card.Body>

        <Card.Text>{ch.status}</Card.Text>
        <Card.Text>{ch.gender}</Card.Text>
        <Card.Text>{ch.species}</Card.Text>


      </Card.Body>
    </Card >
  );
}
