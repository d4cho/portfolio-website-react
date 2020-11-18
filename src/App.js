import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import SkillsPage from './Components/SkillsPage/SkillsPage';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import ContactPage from './Components/ContactPage/ContactPage';
import LoadingPage from './Components/LoadingPage/LoadingPage';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/skills' component={SkillsPage} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/loading' component={LoadingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
