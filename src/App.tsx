import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Events from './Events';
import Apply from './Apply';
import ApplicationForm from './ApplicationForm'; 
import Navbar from "./Navbar";
import Footer from './Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar /> {/* Use the new Navbar component */}
      <div className="main-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/application-form" element={<ApplicationForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );

  
}


export default App;
