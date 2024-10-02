import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Comp/Home/Home';
import About from './Comp/About/About';
import Testimonials from './Comp/Testimonials/Testimonials';
import Trainings from './Comp/Trainings/Trainings';
import Contact from './Comp/Contact/Contact';
import Navb from './Comp/Navb';
import Foot from './Comp/Foot';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navb />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/trainings' element={<Trainings />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Foot />
    </Router>
    
  );
}

export default App;

