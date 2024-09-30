import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';import { NavLink } from 'react-router-dom';


function Navb() {
  return (
    <>
    <Navbar expand="lg" className=" Nav">
      <Container>
        <Navbar.Brand href="/" className='logo'>ZONEIS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="nav-link" to="/About">About</NavLink>
            <NavLink className="nav-link" to="/Trainings">Trainings</NavLink>
            <NavLink className="nav-link" to="/Testimonials">Testimonials</NavLink>
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </Nav>
          <div className="button-div">
            <button className='button'>Join today</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </>
  )
}

export default Navb