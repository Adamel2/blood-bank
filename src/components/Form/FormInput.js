import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import axios from "axios";
import swal from 'sweetalert';

function FormInput() {
    const [userID, setUserID] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userAddress, setUserAddress] = useState(null);
    const [userPhoneNumber, setUserPhoneNumber] = useState(null);
    const [userBloodType, setUserBloodType] = useState("A+");
    const [userSmoke, setUserSmoke] = useState(false);

    async function handleButton(event) {

        event.preventDefault();

        await axios({
            method: 'post',
            url: 'http://localhost:8080/users/saveNewUser',
            data: {
                userID: userID,
                name: userName,
                address: userAddress,
                phoneNumber: userPhoneNumber,
                bloodType: userBloodType,
                smoke: userSmoke
            }
        }).then((response) => {
            ((response.data == 'Success add blood') &&
             swal("Good job!", response.data, "success"));
            ((response.data == 'This user is already exists or Blood Type not exists') &&
             swal("Warning!", response.data, "warning"))

        }).catch((response) => swal("Error input", response.data, "error"));
    }


    return (
        <div className="row justify-content-center m-3">
            <div
                className="col-6 justify-content-center border border-info rounded"
            >
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" onChange={(event) => setUserName(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridId">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="number" placeholder="enter your ID" onChange={(event) => setUserID(event.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" onChange={(event) => setUserAddress(event.target.value)} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="enter your Phone" onChange={(event) => setUserPhoneNumber(event.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBloodType">
                            <Form.Label>Blood type</Form.Label>
                            <Form.Control as="select" onChange={(event) => setUserBloodType(event.target.value)}>
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
                        <Form.Check type="checkbox" label="Smoke" onChange={(event) => setUserSmoke(event.target.checked)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={(event) => handleButton(event)}>
                        Submit
        </Button>
                </Form>
            </div>
        </div>
    );
}

export default FormInput;
