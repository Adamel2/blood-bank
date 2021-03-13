import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function FormInput() {
  return (
    <div className="row justify-content-center m-3">
    <div
      className="col-6 justify-content-center border border-info rounded"
    >
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="number" placeholder="enter your ID" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="enter your Phone" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBloodType">
            <Form.Label>Blood type</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </Form.Control>
          </Form.Group>

        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Smoke" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default FormInput;
