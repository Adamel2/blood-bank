import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "react-bootstrap/InputGroup";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import BloodCard from '../ViewBlood/BloodCard';

function Events() {

    const [typeBlood, setTypeBlood] = useState("A+");
    const [usersList, setUsersList] = useState([]);


    async function HandleData(event) {
        event.preventDefault();
        await axios.get('http://localhost:8080/users/findAllUsersByBloodType/' + typeBlood)
            .then((response) => setUsersList(response.data));


    }

    return (
        <>
            <div className="row justify-content-center m-3">
                <div className="col-6 justify-content-center border border-info rounded">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Select Blood type :</Form.Label>
                            <Form.Control as="select" onChange={(event) => setTypeBlood(event.target.value)}>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </Form.Control>
                            <span className="bg-warning">{typeBlood}</span>
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
                        <Button variant="primary" type="submit" onClick={(event) => HandleData(event)}>
                            Search
        </Button>
                    </Form>
                </div>
            </div>
            <div className="row justify-content-center m-3">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Type Blood</th>
                            <th>Smoke</th>
                            <th>Phone Number</th>
                            <th>Create date</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList.map((item) => <BloodCard
                            key={item.id} id={item.id} userID={item.userID} name={item.name} bloodType={item.bloodType} smoke={item.smoke} phoneNumber={item.phoneNumber} createDate={item.createDate} address={item.address} />)}

                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Events;
