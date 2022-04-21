import './NavBar.scss';
import React from 'react';
import SearchBox from './SearchBox/SearchBox';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <SearchBox />
    </div>
  );
};

export default NavBar;
