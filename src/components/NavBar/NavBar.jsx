import './NavBar.scss';
import React, { useState } from 'react';
import SearchBox from './SearchBox/SearchBox';

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  //toggling the search box using state
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className='nav-bar'>
      {/* allowing the search box to be toggled on and off on click */}
      {showSearch && <SearchBox toggleSearch={toggleSearch} />}
      <div className='search-button' onClick={toggleSearch}>
        Beer Finder
      </div>
    </nav>
  );
};

export default NavBar;
