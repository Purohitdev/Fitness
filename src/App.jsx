// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navb from './Comp/Navb';
// import Foot from './Comp/Foot';
// import { Suspense, lazy } from 'react';


// // Lazy load components
// const Home = lazy(() => import('./Comp/Home/Home'));
// const About = lazy(() => import('./Comp/About/About'));
// const Testimonials = lazy(() => import('./Comp/Testimonials/Testimonials'));
// const Trainings = lazy(() => import('./Comp/Trainings/Trainings'));
// const Contact = lazy(() => import('./Comp/Contact/Contact'));
// const Register = lazy(() => import('./Comp/Register'));
// const Login = lazy(() => import('./Comp/Auth/Login'));
// const Reg = lazy(() => import('./Comp/Auth/Reg'));
// const Admin = lazy(() => import('./Comp/Admin'));


// // Layout component that stays persistent
// const Layout = () => {
//   return (
//     <>
//       <Navb />
//       {/* Outlet renders the current route component */}
//       <Outlet />
//       <Foot />
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           {/* Use Layout as a wrapper for all routes */}
//           <Route path='/' element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path='about' element={<About />} />
//             <Route path='trainings' element={<Trainings />} />
//             <Route path='testimonials' element={<Testimonials />} />
//             <Route path='contact' element={<Contact />} />
//             <Route path='Register' element={<Register />} />
//             <Route path='Login' element={<Login />} />
//             <Route path='Reg' element={<Reg />} />
//             <Route path='Admin' element={<Admin />} />

//           </Route>
//         </Routes>
//       </Suspense>
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
import ProtectedAdminRoute from './Comp/ProtectedAdminRoute';  // Import the protected route component

// Lazy load components
const Home = lazy(() => import('./Comp/Home/Home'));
const About = lazy(() => import('./Comp/About/About'));
const Testimonials = lazy(() => import('./Comp/Testimonials/Testimonials'));
const Trainings = lazy(() => import('./Comp/Trainings/Trainings'));
const Contact = lazy(() => import('./Comp/Contact/Contact'));
const Register = lazy(() => import('./Comp/Register'));
const Login = lazy(() => import('./Comp/Auth/Login'));
const Reg = lazy(() => import('./Comp/Auth/Reg'));
const Admin = lazy(() => import('./Comp/Admin'));

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
            <Route path='Login' element={<Login />} />
            <Route path='Reg' element={<Reg />} />

            {/* Protect the Admin route */}
            <Route path='Admin' element={
              <ProtectedAdminRoute>
                <Admin />
              </ProtectedAdminRoute>
            } />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
