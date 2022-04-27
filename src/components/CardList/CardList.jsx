import './CardList.scss';
import React from 'react';
import Card from './Card/Card';

const CardList = ({ filteredBeer }) => {
  const beersJSX = filteredBeer.map((beer) => {
    const shortDecsription = beer.description?.substring(
      0,
      beer.description.indexOf('.')
    );
    return (
      <>
        <Card
          key={'beer' + beer.id}
          id={beer.id}
          imgSrc={beer.image_url}
          beerName={beer.name}
          beerDescr={shortDecsription}
          brewDate={beer.first_brewed}
          tagLine={beer.tagline}
        />
      </>
    );
  });
  return <>{beersJSX}</>;
};

export default CardList;
