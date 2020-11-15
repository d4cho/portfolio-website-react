import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route />
        <Route />
        <Route />
        <Route />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
