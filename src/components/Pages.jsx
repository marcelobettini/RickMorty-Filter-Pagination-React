import React from "react";
import { Row, Button } from "react-bootstrap";
export default function Pages({ prevPage, nextPage, pageBefore, pageAfter }) {
  console.log("Pages mounted");
  let disabledBefore,
    disabledAfter = false;
  pageBefore ? (disabledBefore = false) : (disabledBefore = true);
  pageAfter ? (disabledAfter = false) : (disabledAfter = true);
  return (
    <Row className="justify-content-center my-4">
      <Button
        className="col-1 mx-1"
        onClick={prevPage}
        disabled={disabledBefore}
      >
        {"<<"}
      </Button>
      <Button
        className="col-1 mx-1"
        onClick={nextPage}
        disabled={disabledAfter}
      >
        {">>"}
      </Button>
    </Row>
  );
}
