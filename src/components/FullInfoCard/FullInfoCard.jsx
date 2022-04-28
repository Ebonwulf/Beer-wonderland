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
          <h3 className='full-info-card__date'>
            First brewed in: {theBeer.first_brewed}
          </h3>

          <h4 className='full-info-card__tagline'>{theBeer.tagline}</h4>
          <div className='full-info-card__div'>
            <h4>Acidity:</h4>
            <p className='full-info-card__acidity'> {theBeer.ph}</p>
            <h4>Alcohol:</h4>
            <p className='full-info-card__alcohol'> {theBeer.abv}%</p>
          </div>
          <h4>All about this amazing beer!</h4>
          <p className='full-info-card__descr'>{theBeer.description}</p>
          <div className='full-info-card__div'>
            <h4>Best Food Pairings: </h4>
            <p className='full-info-card__food-pairing'>
              {theBeer.food_pairing}
            </p>
          </div>
          <div className='full-info-card__div'>
            <h4>Brewer's tips: </h4>
            <p className='full-info-card__brew-tips'>{theBeer.brewers_tips}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullInfoCard;
