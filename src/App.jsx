import { Suspense, FC , lazy, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';
import "./index.css";
import Diplomas from './components/Diplomas';
const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));


const App= () => {
  
  return (
    <div
      className="bg-buccaneer-200 duration-200 relative z-40"
    >
      <Router>
          <Navbar />
         
          <Suspense fallback={<div className="loading-spinner ">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/diplomas" element={<Diplomas />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/experiences" element={<About />} />
            </Routes>
          </Suspense> 
      </Router>
    </div>
  );
};

export default App;
