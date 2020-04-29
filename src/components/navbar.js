import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Naav extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="world">Covid Cases</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="world">World</Nav.Link>
                    <Nav.Link href="india">India</Nav.Link>
                    <Nav.Link href="usa">USA</Nav.Link>
                    <Nav.Link href="china">China</Nav.Link>
                    <Nav.Link href="search">Search</Nav.Link>
                </Nav>
               
            </Navbar>
        );
    }
}
