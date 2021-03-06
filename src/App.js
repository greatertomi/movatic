import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import StationDetails from "./components/StationDetails";
import { StatusProvider } from "./StatusContext";

const App = () => {
  return (
    <BrowserRouter>
      <StatusProvider>
        <Navbar />
        <Route path="/" exact component={Dashboard} />
        <Route path="/status/:id" exact component={StationDetails} />
      </StatusProvider>
    </BrowserRouter>
  );
};

export default App;
