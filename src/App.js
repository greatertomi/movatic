import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import StationDetails from './components/StationDetails';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route path="/" exact component={Dashboard} />
        <Route path="/status/:id" exact component={StationDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;
