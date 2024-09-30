import { useState } from 'react'
import './App.css'
import Home from './Comp/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Comp/About/About';
import Testimonials from './Comp/Testimonials/Testimonials';
import Trainings from './Comp/Trainings/Trainings';
import Contact from './Comp/Contact/Contact';
import Navb from './Comp/Navb';
import Foot from './Comp/Foot';

function App() {

  return (
    <>
    {/* <Home/> */}


    <Router>
        <Navb />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Trainings' element={<Trainings />} />
          <Route path='/Testimonials' element={<Testimonials />} />
          <Route path='/Contact' element={<Contact />} />

        </Routes>
        <Foot />
      </Router>
  
       
    </>
  )
}

export default App
