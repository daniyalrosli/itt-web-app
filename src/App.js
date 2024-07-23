import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Data from './components/data';
import Dashboard from './components/dashboard';
import { database } from './firebase';
import { ref, set, onValue } from 'firebase/database';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white p-4 text-black text-center shadow-md">
      <nav className="mt-4">
        <Link to="/" className="mx-2 text-black hover:underline">Home</Link>
        <Link to="/about" className="mx-2 text-black hover:underline">About</Link>
        <Link to="/data" className="mx-2 text-black hover:underline">Data</Link>
        <Link to="/dashboard" className="mx-2 text-black hover:underline">Dashboard</Link>
      </nav>
    </header>
        <main className="p-4 space-y-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/data" element={<Data />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;