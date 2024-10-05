// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './Comp/Home/Home';
// import About from './Comp/About/About';
// import Testimonials from './Comp/Testimonials/Testimonials';
// import Trainings from './Comp/Trainings/Trainings';
// import Contact from './Comp/Contact/Contact';
// import Navb from './Comp/Navb';
// import Foot from './Comp/Foot';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <Navb />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/trainings' element={<Trainings />} />
//         <Route path='/testimonials' element={<Testimonials />} />
//         <Route path='/contact' element={<Contact />} />
//       </Routes>
//       <Foot />
//     </Router>
    
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Comp/Navb';
import Foot from './Comp/Foot';
import { Suspense, lazy } from 'react';

// Lazy load components
const Home = lazy(() => import('./Comp/Home/Home'));
const About = lazy(() => import('./Comp/About/About'));
const Testimonials = lazy(() => import('./Comp/Testimonials/Testimonials'));
const Trainings = lazy(() => import('./Comp/Trainings/Trainings'));
const Contact = lazy(() => import('./Comp/Contact/Contact'));
const Register = lazy(() => import('./Comp/Register'));



// Layout component that stays persistent
const Layout = () => {
  return (
    <>
      <Navb />
      {/* Outlet renders the current route component */}
      <Outlet />
      <Foot />
    </>
  );
};

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Use Layout as a wrapper for all routes */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='trainings' element={<Trainings />} />
            <Route path='testimonials' element={<Testimonials />} />
            <Route path='contact' element={<Contact />} />
            <Route path='Register' element={<Register />} />

          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


