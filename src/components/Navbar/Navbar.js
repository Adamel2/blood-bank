import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar(){

    return (

        <div className="col-12 p-0">
            <Navbar bg="light" variant="light">
                <Navbar.Brand className="text-dark m-1 font-weight-bold btn" href="/blood-bank">blood Bank</Navbar.Brand>
                <Nav className="mr-auto text-light">
                <Nav.Link className="text-light m-1 font-weight-bold btn btn-info" href="/blood-bank">Add Blood</Nav.Link>
                <Nav.Link className="text-light m-1 font-weight-bold btn btn-info" href="/blood-bank/ViewBlood">View Blood</Nav.Link>
                <Nav.Link className="text-light m-1 font-weight-bold btn btn-info" href="/blood-bank/events">Event</Nav.Link>
                </Nav>
            </Navbar>
            </div>
    )
}

export default NavBar;