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
      </form>
    </>
  );
};

export default SearchBox;
