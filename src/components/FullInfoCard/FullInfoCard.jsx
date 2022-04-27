import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './FullInfoCard.scss';

const FullInfoCard = ({
  filteredBeer,
  imgSrc,
  beerName,
  beerDescr,
  brewDate,
  tagLine,
}) => {
  const { id } = useParams();
  const theBeer = filteredBeer.find((beerId) => {
    return beerId.id == id;
  });
  return (
    <>
      <Link to={'/'}>
        <div className='full-card-info__toggle'>Back</div>
      </Link>
      <section className='full-info-card'>
        <img
          src={theBeer.imgSrc}
          className='full-info-card__img'
          alt={theBeer.name}
        />
        <h3 className='full-info-card__heading'>{theBeer.beerName}</h3>
        <h4 className='full-info-card__date'>{theBeer.first_brewed}</h4>
        <h4 className='full-info-card__tagline'>{theBeer.tagLine}</h4>
        <p className='full-info-card__acidity'></p>
        <p className='full-info-card__alcohol'></p>
        <p className='full-info-card__descr'></p>
        <p className='full-info-card__method'></p>
      </section>
    </>
  );
};

export default FullInfoCard;
