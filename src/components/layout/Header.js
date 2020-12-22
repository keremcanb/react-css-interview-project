import React from 'react';
import TopNavbar from '../navbar/TopNavbar';
import BottomNavbar from '../navbar/BottomNavbar';

const Header = () => (
  <header id='header'>
    <div className='header-bar' />
    <TopNavbar />
    <BottomNavbar />
  </header>
);

export default Header;
