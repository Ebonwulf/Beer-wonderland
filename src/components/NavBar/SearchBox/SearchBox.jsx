import './SearchBox.scss';
import React from 'react';

const SearchBox = ({ searchTerm, handleInput, toggleSearch }) => {
  return (
    <div className='search-menu'>
      <form className='search-box'>
        <div className='back-button' onClick={toggleSearch}>
          Back
        </div>
        <label className='search-box__label' htmlFor=''>
          Beer search
        </label>
        <input
          type='text'
          className='search-box__input'
          value={searchTerm}
          onInput={handleInput}
        />
        <h3>Filters</h3>
        <div className='filters-checkboxes'>
          <label htmlFor='filters-checkboxes__alcohol'>High Alcohol</label>
          <input id='filters-checkboxes__alcohol' type='checkbox' />
          <label htmlFor='filters-checkboxes__classic'>Classic Range</label>
          <input id='filters-checkboxes__classic' type='checkbox' />
          <label htmlFor='filters-checkboxes__acidity'>Acidity</label>
          <input id='filters-checkboxes__acidity' type='checkbox' />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
