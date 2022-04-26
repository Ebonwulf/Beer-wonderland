import './SearchBox.scss';
import React from 'react';

const SearchBox = ({
  searchTerm,
  searchTermHandler,
  toggleSearch,
  handlePhSearch,
  handleClassicSearch,
  handleAbvSearch,
  abvSearch,
  phSearch,
  classicSearch,
}) => {
  return (
    <div className='search-menu'>
      <form className='search-box'>
        <div className='back-button' onClick={toggleSearch}>
          Back
        </div>
        <div className='serach-box__bar'>
          <label className='search-box__label' htmlFor=''>
            Beer search
          </label>
          <input
            type='text'
            className='search-box__input'
            value={searchTerm}
            placeholder='Enter beer'
            onChange={searchTermHandler}
          />
        </div>
        <h3>Filters</h3>
        <div className='filters-checkboxes'>
          <label htmlFor='filters-checkboxes__alcohol'>High Alcohol</label>
          <input
            id='filters-checkboxes__alcohol'
            type='checkbox'
            checked={abvSearch}
            onChange={handleAbvSearch}
          />
          <label htmlFor='filters-checkboxes__classic'>Classic Range</label>
          <input
            id='filters-checkboxes__classic'
            type='checkbox'
            checked={classicSearch}
            onChange={handleClassicSearch}
          />
          <label htmlFor='filters-checkboxes__acidity'>Acidity</label>
          <input
            id='filters-checkboxes__acidity'
            type='checkbox'
            checked={phSearch}
            onChange={handlePhSearch}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
