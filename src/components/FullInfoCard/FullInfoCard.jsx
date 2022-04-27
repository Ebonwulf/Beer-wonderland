import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './FullInfoCard.scss';

const FullInfoCard = ({ filteredBeer }) => {
  const { id } = useParams();
  const theBeer = filteredBeer.find((beerId) => {
    return beerId.id == id;
  });
  return (
    <>
      <section className='full-info-card'>
        <Link to={'/'}>
          <div className='full-card-info__toggle'>Back</div>
        </Link>
        <div className='full-info-card__card'>
          <img
            src={theBeer.image_url}
            className='full-info-card__img'
            alt={theBeer.name}
          />
          <h2 className='full-info-card__heading'>{theBeer.name}</h2>
          <h3 className='full-info-card__date'>{theBeer.first_brewed}</h3>
          <h4 className='full-info-card__tagline'>{theBeer.tagline}</h4>
          <p className='full-info-card__acidity'>Acidity: {theBeer.ph}</p>
          <p className='full-info-card__alcohol'>Alcohol: {theBeer.abv}%</p>
          <p className='full-info-card__descr'>{theBeer.description}</p>
          <p className='full-info-card__food-pairing'>
            Best Food Pairings: {theBeer.food_pairing}
          </p>
          <p className='full-info-card__brew-tips'>
            Brewers tips: {theBeer.brewers_tips}
          </p>
        </div>
      </section>
    </>
  );
};

export default FullInfoCard;
