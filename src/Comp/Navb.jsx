import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';




function Navb() {

  useGSAP(() => {

    const t1 = gsap.timeline();

    t1.from(".logo", {
      x: -100,
      opacity: 0,
    }, "st")
    
    t1.from(".button-div", {
      x: 100,
      opacity: 0,
      duration: 0.6,
    }, "st")
    
    t1.from(".nav-link", {
      y: -50, 
      opacity: 0,
      stagger: 0.1,
    })  
    
    t1.from(".mid-top p",{
      y:-20,
      opacity:0,

    },"st1")

    t1.from(".mid-top h1",{
      y:20,
      opacity:0,
      stagger:1,

    },"st1")


    t1.from(".main-in , .upper-main , .inner-main h1 ",{
      y:100,
      opacity:0,
      stagger:0.5,

    })

    
  })



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