import React from 'react';
import './App.css';

import {Route, Switch} from "react-router-dom";

import HomePage from './pages/homepage.component';

const Hats = () => (
  <div>
    <h1>Hello Hats</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={Hats} />

    </div>
  );
}

export default App;
