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

  const showNavbarHandler = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className='Sidebar'>
        <img className='Logo' src={logo} />
        <div className='Icon-container'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className='Icon-style'>
              <AiOutlineHome style={ICON_SIZE} />
              <span>HOME</span>
            </div>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <div className='Icon-style'>
              <AiOutlineUser style={ICON_SIZE} />
              <span>ABOUT</span>
            </div>
          </Link>
          <Link to='/skills' style={{ textDecoration: 'none' }}>
            <div className='Icon-style'>
              <AiOutlineUnorderedList style={ICON_SIZE} />
              <span>SKILLS</span>
            </div>
          </Link>
          <Link to='/projects' style={{ textDecoration: 'none' }}>
            <div className='Icon-style'>
              <AiOutlineAppstore style={ICON_SIZE} />
              <span>PROJECTS</span>
            </div>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <div className='Icon-style'>
              <AiOutlineMail style={ICON_SIZE} />
              <span>CONTACT</span>
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
              <div className='Icon-style'>
                <AiOutlineHome style={ICON_SIZE} />
                <span>HOME</span>
              </div>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <div className='Icon-style'>
                <AiOutlineUser style={ICON_SIZE} />
                <span>ABOUT</span>
              </div>
            </Link>
            <Link to='/skills' style={{ textDecoration: 'none' }}>
              <div className='Icon-style'>
                <AiOutlineUnorderedList style={ICON_SIZE} />
                <span>SKILLS</span>
              </div>
            </Link>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <div className='Icon-style'>
                <AiOutlineAppstore style={ICON_SIZE} />
                <span>PROJECTS</span>
              </div>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <div className='Icon-style'>
                <AiOutlineMail style={ICON_SIZE} />
                <span>CONTACT</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
