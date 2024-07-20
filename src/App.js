import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home';
import Data from './components/data';
import Dashboard from './components/dashboard';
import About from './components/about';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 p-4 text-white text-center">
          <h1 className="text-2xl font-bold">Athlete Health Monitoring</h1>
          <nav className="mt-4">
            <Link to="/" className="mx-2 text-white hover:underline">Home</Link>
            <Link to="/about" className="mx-2 text-white hover:underline">About</Link>
            <Link to="/data" className="mx-2 text-white hover:underline">Data</Link>
            <Link to="/dashboard" className="mx-2 text-white hover:underline">Dashboard</Link>
          </nav>
        </header>
        <main className="p-4 space-y-6">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/data" component={Data} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;