import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { __RouterContext } from 'react-router';

import { useTransition, animated } from 'react-spring';

import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import SkillsPage from './Components/SkillsPage/SkillsPage';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import ContactPage from './Components/ContactPage/ContactPage';
import LoadingPage from './Components/LoadingPage/LoadingPage';

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });

  return (
    // <BrowserRouter>
    <>
      <Sidebar />
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          style={{
            ...props,
            position: 'absolute',
            height: '100%',
            width: '100%'
          }}>
          {console.log(props)}
          <Switch location={item}>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/skills' component={SkillsPage} />
            <Route exact path='/projects' component={ProjectsPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/loading' component={LoadingPage} />
          </Switch>
        </animated.div>
      ))}
    </>
    /* <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/skills' component={SkillsPage} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/loading' component={LoadingPage} />
      </Switch> */
    // </BrowserRouter>
  );
}

export default App;
