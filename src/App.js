import React from 'react';
import './App.scss';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import MetricCard from './components/MetricCard';

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />

      <div className="row px-3">
        <div className="col-md-3">
          <MetricCard />
        </div>
        <div className="col-md-3">
          <MetricCard />
        </div>
        <div className="col-md-3">
          <MetricCard />
        </div>
        <div className="col-md-3">
          <MetricCard />
        </div>
      </div>
    </div>
  );
}

export default App;
