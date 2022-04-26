import './NavBar.scss';
import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';

const NavBar = ({
  searchTerm,
  searchTermHandler,
  toggleSearch,
  handlePhSearch,
  handleClassicSearch,
  handleAbvSearch,
  abvSearch,
  phSearch,
  classicSearch,
  showSearch,
}) => {
  return (
    <nav className='nav-bar'>
      {showSearch && (
        <SearchBox
          abvSearch={abvSearch}
          phSearch={phSearch}
          classicSearch={classicSearch}
          toggleSearch={toggleSearch}
          searchTerm={searchTerm}
          searchTermHandler={searchTermHandler}
          handleAbvSearch={handleAbvSearch}
          handleClassicSearch={handleClassicSearch}
          handlePhSearch={handlePhSearch}
        />
      )}
      <div className='search-button'>
        <button onClick={toggleSearch}>Beer Finder</button>
      </div>
    </nav>
  );
};

export default NavBar;
