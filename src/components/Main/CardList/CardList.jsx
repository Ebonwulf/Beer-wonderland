import './CardList.scss';
import React from 'react';
import beers from '../../../data/data';
import Card from '../Card/Card';

const CardList = () => {
  const beersJSX = beers.map((beer) => {
    return (
      <Card
        imgSrc={beer.image_url}
        beerName={beer.name}
        beerDescr={beer.description}
        brewDate={beer.first_brewed}
      />
    );
  });
  return <>{beersJSX}</>;
};

export default CardList;
