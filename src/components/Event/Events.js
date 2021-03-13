import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Events() {
  return (
      <div className="row justify-content-center m-3">
    <div className="col-6 justify-content-center border border-info rounded">
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Select Blood type :</Form.Label>
          <Form.Control as="select" multiple>
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
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>How Many People :</Form.Label>
          <Form.Control type="number" placeholder="Enter the number" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>How Many (milliliters) :</Form.Label>
          <Form.Control type="number" placeholder="Enter the number" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Please explain The event :</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default Events;
