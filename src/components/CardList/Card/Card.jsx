import './Card.scss';
import React from 'react';

const Card = ({ imgSrc, beerName, beerDescr, brewDate, tagLine }) => {
  const capitalisedName = (name) => {
    return name[0].toUpperCase() + name.substring(1);
  };
  return (
    <>
      <div className='beer-tile'>
        <img src={imgSrc} className='beer-tile__img' alt={beerName} />
        <h3 className='beer-tile__heading'>{capitalisedName(beerName)}</h3>
        <h4 className='beer-tile__date'>{brewDate}</h4>
        <h4 className='beer-tile__tagline'>{tagLine}</h4>
        <p className='beer-tile__descr'>{beerDescr}</p>
      </div>
    </>
  );
};

export default Card;
