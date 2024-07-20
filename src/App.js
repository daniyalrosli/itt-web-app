import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Data from './components/data';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black-100">
         <header className="bg-black p-4 text-white text-center">
    <h1 className="text-3xl font-bold">ITT 569 GROUP PROJECT</h1>
    <nav className="mt-4">
      <Link to="/" className="mx-2 text-white hover:underline">Home</Link>
      <Link to="/about" className="mx-2 text-white hover:underline">About</Link>
      <Link to="/data" className="mx-2 text-white hover:underline">Data</Link>
      <Link to="/dashboard" className="mx-2 text-white hover:underline">Dashboard</Link>
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