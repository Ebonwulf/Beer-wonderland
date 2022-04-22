import './Card.scss';
import React from 'react';

const Card = ({ imgSrc, beerName, beerDescr, brewDate }) => {
  const beerCardJSX = (
    <div className='beer-tile__content'>
      <img src={imgSrc} className='beer-tile__img' alt={beerName} />
      <h3 className='beer-tile__heading'>{beerName}</h3>
      <h4 className='beer-tile__date'>{brewDate}</h4>
      <p className='beer-tile__descr'>{beerDescr}</p>
    </div>
  );
  return <>{beerCardJSX}</>;
};

export default Card;
