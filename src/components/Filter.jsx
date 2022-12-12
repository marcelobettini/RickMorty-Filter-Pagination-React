import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Filter({ setEndpoint }) {
  console.log("Filter mounted");
  const handleForm = (e) => {
    e.preventDefault();
    let query = "character/?";
    const data = new FormData(e.target);
    const status = data.get("status");
    const gender = data.get("gender");
    const name = data.get("name");

    if (status !== "All") query += `status=${status}&`;
    if (gender !== "All") query += `gender=${gender}&`;
    if (name) query += `name=${name}`;
    setEndpoint(query);
  };
  const handleReset = () => {
    setEndpoint("character");
  };
  return (
    <Container>
      <Row className="justify-content-center text-center mb-5">
        <Col xs={12} md={9}>
          <Form
            className="d-flex flex-column"
            style={{ boxShadow: "1px 1px 5px" }}
            onSubmit={(e) => handleForm(e)}
          >
            <h4 className="my-2">Filter by</h4>
            <Form.Group className="my-2">
              <Form.Label htmlFor="status" className="mx-3">
                Status
                <Form.Select id="status" name="status">
                  <option defaultChecked>All</option>
                  <option>Alive</option>
                  <option>Dead</option>
                  <option>Unknown</option>
                </Form.Select>
              </Form.Label>

              <Form.Label htmlFor="gender">
                Gender
                <Form.Select id="gender" name="gender">
                  <option defaultChecked>All</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Genderless</option>
                  <option>Unknown</option>
                </Form.Select>
              </Form.Label>
              <Form.Label htmlFor="name" className="mx-3">
                Name
                <Form.Control id="name" name="name" />
              </Form.Label>
            </Form.Group>
            <Form.Group className="my-4 d-flex justify-content-center gap-3">
              <Button type="submit" variant="success" className="w-25">
                FILTER
              </Button>
              <Button
                type="reset"
                variant="warning"
                className="w-25"
                onClick={handleReset}
              >
                RESET
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
