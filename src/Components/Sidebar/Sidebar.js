import React, { useState } from 'react';
import './Sidebar.css';

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiOutlineAppstore,
  AiOutlineMail,
  AiOutlineMenu
} from 'react-icons/ai';

const Sidebar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const showNavbarHandler = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className='Sidebar'>
        <div className='Icon-container'>
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
