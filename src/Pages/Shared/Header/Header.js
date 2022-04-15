import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo/logo.png';

const Header = () => {
    return (
        <>
            <Navbar bg="primary fixed-top" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height="30" alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto text-white">
                        <Link to="/home">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/about">About</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;