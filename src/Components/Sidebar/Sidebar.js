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

import './Sidebar.css';

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
              <AiOutlineHome style={{ fontSize: '50px' }} />
              <span>HOME</span>
            </div>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <div className='Icon-style'>
              <AiOutlineUser style={{ fontSize: '50px' }} />
              <span>ABOUT</span>
            </div>
          </Link>
          <Link to='/skills' style={{ textDecoration: 'none' }}>
            <div className='Icon-style'>
              <AiOutlineUnorderedList style={{ fontSize: '50px' }} />
              <span>SKILLS</span>
            </div>
          </Link>
          <Link to='/projects' style={{ textDecoration: 'none' }}>
            <div className='Icon-style'>
              <AiOutlineAppstore style={{ fontSize: '50px' }} />
              <span>PROJECTS</span>
            </div>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <div className='Icon-style'>
              <AiOutlineMail style={{ fontSize: '50px' }} />
              <span>CONTACT</span>
            </div>
          </Link>
        </div>
        <div className='Burger-menu'>
          <AiOutlineMenu
            style={{ fontSize: '50px' }}
            onClick={showNavbarHandler}
          />
        </div>
      </div>
      {showNavbar && (
        <div className='Navbar'>
          <div className='Icon-container-menu'>
            <div className='Icon-style'>
              <AiOutlineHome style={{ fontSize: '50px' }} />
              <span>HOME</span>
            </div>
            <div className='Icon-style'>
              <AiOutlineUser style={{ fontSize: '50px' }} />
              <span>ABOUT</span>
            </div>
            <div className='Icon-style'>
              <AiOutlineUnorderedList style={{ fontSize: '50px' }} />
              <span>SKILLS</span>
            </div>
            <div className='Icon-style'>
              <AiOutlineAppstore style={{ fontSize: '50px' }} />
              <span>MY WORK</span>
            </div>
            <div className='Icon-style'>
              <AiOutlineMail style={{ fontSize: '50px' }} />
              <span>CONTACT</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
