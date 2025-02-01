import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; // Assuming you'll create a Home.js
import Life from './Life';
import Travel from './Travel';
import Principles from './Principles';
import Philosophy from './Philosophy';
import Contact from './Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>The Real Madhava</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/life">Life</Link></li>
            <li><Link to="/travel">Travel</Link></li>
            <li><Link to="/principles">Principles and Values</Link></li>
            <li><Link to="/philosophy">Philosophy</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>

        <main> {/* Added a main element to wrap page content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/life" element={<Life />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/principles" element={<Principles />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
