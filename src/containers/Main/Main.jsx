import React from 'react';
import CardList from '../../components/CardList/CardList';
import './Main.scss';

const Main = ({ filteredBeer }) => {
  return (
    <div className='main-display'>
      <CardList filteredBeer={filteredBeer} />
    </div>
  );
};

export default Main;
