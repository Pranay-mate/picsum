import React from 'react';
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-browser-router";
import Navbar from './Components/navbar.js';
import './App.css';
import Cards from './Components/cards';
import CardDetails from './Components/cardInfo';
function App() {
  const dishId= window.location.pathname;
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path={dishId} exact component={() => <CardDetails />} />
        <Route path='/' component={() => <Cards />} />
      </div>
    </BrowserRouter>

  );
}

export default App;
