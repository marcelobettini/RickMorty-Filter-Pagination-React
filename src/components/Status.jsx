import React from "react";
import { Card } from "react-bootstrap";
export default function Status({ status }) {
  let colorStatus = null;
  switch (status) {
    case "unknown":
      colorStatus = "text-primary";
      break;
    case "Alive":
      colorStatus = "text-success";
      break;
    case "Dead":
      colorStatus = "text-danger text-decoration-line-through";
      break;
    default:
      break;
  }

  return (
    <Card.Text>
      Status: <span className={colorStatus}>{status}</span>
    </Card.Text>
  );
}
