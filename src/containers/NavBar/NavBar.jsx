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
      <h1 className='nav-bar__header'>Beer Wonderland</h1>
      <div className='nav-bar__search-button' onClick={toggleSearch}>
        Beer Finder
      </div>
    </nav>
  );
};

export default NavBar;
