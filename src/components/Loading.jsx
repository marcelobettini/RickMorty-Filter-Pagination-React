import React from 'react';
import { Container, Row } from "react-bootstrap";
import Loader from "react-spinners/PulseLoader";


export default function Loading() {
  return (
    <Container>
      <Row>
        <Loader size={45} />
      </Row>
    </Container>
  );
}
