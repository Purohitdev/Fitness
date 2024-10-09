import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom'
import Register from './Register';
import { useNavigate } from 'react-router-dom';





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

    t1.from(".mx-auto .nav-link", {
      y: -50,
      opacity: 0,
      stagger: 0.1,
    })

    t1.from(".mid-top p", {
      y: -20,
      opacity: 0,

    }, "st1")

    t1.from(".mid-top h1", {
      y: 20,
      opacity: 0,
      stagger: 1,

    }, "st1")


    t1.from(".main-in , .upper-main , .inner-main h1 ", {
      y: 100,
      opacity: 0,
      stagger: 0.5,

    })


  })

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user session
    navigate('/login'); // Redirect to login page
  };

  const user = JSON.parse(localStorage.getItem('user')); // Retrieve logged-in user details



  return (



    <>
      {/* <Navbar expand="lg" className=" Nav">
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
              <button class="buttonn" >

                <Link className="nav-link" to="/Register">Register</Link>

              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <Navbar expand="lg" className="Nav">
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
              {user ? (
                // Show logout button if the user is logged in
                <button className="buttonn" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <>
                  {/* Show Register and Login buttons if no user is logged in */}
                  <button className="buttonn">
                    <Link className="nav-link" to="/Register">Register</Link>
                  </button>
                  <button className="buttonn">
                    <Link className="nav-link" to="/Login">Login</Link>
                  </button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </>
  )
}

export default Navb