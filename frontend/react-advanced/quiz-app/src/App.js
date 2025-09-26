import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Quiz from './components/Quiz';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>React Quiz App</h1>

      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/quiz">Start Quiz</Link>
      </nav>

      {/* Routes for pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
