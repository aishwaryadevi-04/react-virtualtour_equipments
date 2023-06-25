import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


import VirtualTour from './virtualtour/virtualtour.js';
import Equipments from './equipments/equipment.js';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<VirtualTour />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/equipment" element={<Equipments />} />
      </Routes>
    </Router>
  );
};

export default App;
