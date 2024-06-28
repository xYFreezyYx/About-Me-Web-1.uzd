import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Hobbies from './pages/Hobbies';
import Printing from './pages/Printing';
import Navbar from './components/Navbar';
import TransitionWrapper from './components/TransitionWrapper';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <TransitionWrapper>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/printing" element={<Printing />} />
          </Routes>
        </TransitionWrapper>
      </div>
    </Router>
  );
}

export default App;
