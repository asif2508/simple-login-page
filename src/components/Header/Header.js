import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold'>ATools<span className='text-danger'>.</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <button className='nav-btn1' href="#home">Start Free Trial</button>
                            <button className='nav-btn2' href="#link">Login</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;