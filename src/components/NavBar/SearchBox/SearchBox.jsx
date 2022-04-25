import './SearchBox.scss';
import React from 'react';

const SearchBox = ({ searchTerm, handleInput }) => {
  return (
    <>
      <form className='search-box'>
        <label htmlFor=''>Beer search</label>
        <input
          type='text'
          className='search-box__input'
          value={searchTerm}
          onInput={handleInput}
        />
        <div className='filters-checkboxes'>
          <h3>Filters</h3>
          <label htmlFor='filter-by-alcohol'>High Alcohol</label>
          <input id='filter-by-alcohol' type='checkbox' />
          <label htmlFor='filter-classic'>Classic Range</label>
          <input id='filter-classic' type='checkbox' />
          <label htmlFor='filter-acidity'>Acidity</label>
          <input id='filter-acidity' type='checkbox' />
        </div>
      </form>
    </>
  );
};

export default SearchBox;
