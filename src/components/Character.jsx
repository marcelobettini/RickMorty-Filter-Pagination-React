import React from "react";
import { Card } from "react-bootstrap";
import Status from "./Status";

export default function Character({ ch }) {
  console.log("Character mounted");
  return (
    <Card style={{ width: "18rem", boxShadow: "1px 1px 5px" }}>
      <Card.Title className="text-center text-uppercase mt-2 mb-3">
        {ch.name}
      </Card.Title>
      <Card.Img src={ch.image} />
      <Card.Body>
        <Status status={ch.status} />
        <Card.Text>Gender: {ch.gender}</Card.Text>
        <Card.Text>Species: {ch.species}</Card.Text>
      </Card.Body>
    </Card>
  );
}
