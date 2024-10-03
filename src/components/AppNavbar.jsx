import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';

function AppNavbar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} fixed='top' bg='dark' data-bs-theme="dark" className="tertiary mb-3">
          <Container fluid>
            <Navbar.Brand>My Basic App.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggler'/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Dashboard</Nav.Link>
                <Nav.Link href="#action3">Admin</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default AppNavbar