import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiOutlineAppstore,
  AiOutlineMail,
  AiOutlineMenu
} from 'react-icons/ai';
import logo from '../../Assets/logo.png';

const ICON_SIZE = {
  fontSize: '2rem'
};

const Sidebar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isHomeHover, setIsHomeHover] = useState(false);
  const [isAboutHover, setIsAboutHover] = useState(false);
  const [isSkillsHover, setIsSkillsHover] = useState(false);
  const [isProjectsHover, setIsProjectsHover] = useState(false);
  const [isContactHover, setIsContactHover] = useState(false);

  const showNavbarHandler = () => {
    setShowNavbar(!showNavbar);
  };

  const iconHoverTrueHandler = (e) => {
    if (e.currentTarget.id === 'home') {
      setIsHomeHover(true);
    } else if (e.currentTarget.id === 'about') {
      setIsAboutHover(true);
    } else if (e.currentTarget.id === 'skills') {
      setIsSkillsHover(true);
    } else if (e.currentTarget.id === 'projects') {
      setIsProjectsHover(true);
    } else if (e.currentTarget.id === 'contact') {
      setIsContactHover(true);
    }
  };

  const iconHoverFalseHandler = (e) => {
    if (e.currentTarget.id === 'home') {
      setIsHomeHover(false);
    } else if (e.currentTarget.id === 'about') {
      setIsAboutHover(false);
    } else if (e.currentTarget.id === 'skills') {
      setIsSkillsHover(false);
    } else if (e.currentTarget.id === 'projects') {
      setIsProjectsHover(false);
    } else if (e.currentTarget.id === 'contact') {
      setIsContactHover(false);
    }
  };

  return (
    <>
      <div className='Sidebar'>
        <img className='Logo' src={logo} />
        <div className='Icon-container'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div
              className='Icon-style'
              onMouseEnter={iconHoverTrueHandler}
              onMouseLeave={iconHoverFalseHandler}
              id='home'>
              {isHomeHover ? <p>HOME</p> : <AiOutlineHome style={ICON_SIZE} />}
            </div>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <div
              className='Icon-style'
              onMouseEnter={iconHoverTrueHandler}
              onMouseLeave={iconHoverFalseHandler}
              id='about'>
              {isAboutHover ? (
                <p>ABOUT</p>
              ) : (
                <AiOutlineUser style={ICON_SIZE} />
              )}
            </div>
          </Link>
          <Link to='/skills' style={{ textDecoration: 'none' }}>
            <div
              className='Icon-style'
              onMouseEnter={iconHoverTrueHandler}
              onMouseLeave={iconHoverFalseHandler}
              id='skills'>
              {isSkillsHover ? (
                <p>SKILLS</p>
              ) : (
                <AiOutlineUnorderedList style={ICON_SIZE} />
              )}
            </div>
          </Link>
          <Link to='/projects' style={{ textDecoration: 'none' }}>
            <div
              className='Icon-style'
              onMouseEnter={iconHoverTrueHandler}
              onMouseLeave={iconHoverFalseHandler}
              id='projects'>
              {isProjectsHover ? (
                <p>PROJECTS</p>
              ) : (
                <AiOutlineAppstore style={ICON_SIZE} />
              )}
            </div>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <div
              className='Icon-style'
              onMouseEnter={iconHoverTrueHandler}
              onMouseLeave={iconHoverFalseHandler}
              id='contact'>
              {isContactHover ? (
                <p>CONTACT</p>
              ) : (
                <AiOutlineMail style={ICON_SIZE} />
              )}
            </div>
          </Link>
        </div>
        <div className='Burger-menu'>
          <AiOutlineMenu style={ICON_SIZE} onClick={showNavbarHandler} />
        </div>
      </div>
      {showNavbar && (
        <div className='Navbar'>
          <div className='Icon-container-menu'>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <div
                className='Icon-style'
                onMouseEnter={iconHoverTrueHandler}
                onMouseLeave={iconHoverFalseHandler}
                id='home'>
                {isHomeHover ? (
                  <p>HOME</p>
                ) : (
                  <AiOutlineHome style={ICON_SIZE} />
                )}
              </div>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <div
                className='Icon-style'
                onMouseEnter={iconHoverTrueHandler}
                onMouseLeave={iconHoverFalseHandler}
                id='about'>
                {isAboutHover ? (
                  <p>ABOUT</p>
                ) : (
                  <AiOutlineUser style={ICON_SIZE} />
                )}
              </div>
            </Link>
            <Link to='/skills' style={{ textDecoration: 'none' }}>
              <div
                className='Icon-style'
                onMouseEnter={iconHoverTrueHandler}
                onMouseLeave={iconHoverFalseHandler}
                id='skills'>
                {isSkillsHover ? (
                  <p>SKILLS</p>
                ) : (
                  <AiOutlineUnorderedList style={ICON_SIZE} />
                )}
              </div>
            </Link>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <div
                className='Icon-style'
                onMouseEnter={iconHoverTrueHandler}
                onMouseLeave={iconHoverFalseHandler}
                id='projects'>
                {isProjectsHover ? (
                  <p>PROJECTS</p>
                ) : (
                  <AiOutlineAppstore style={ICON_SIZE} />
                )}
              </div>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <div
                className='Icon-style'
                onMouseEnter={iconHoverTrueHandler}
                onMouseLeave={iconHoverFalseHandler}
                id='contact'>
                {isContactHover ? (
                  <p>CONTACT</p>
                ) : (
                  <AiOutlineMail style={ICON_SIZE} />
                )}
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
