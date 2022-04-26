import React from 'react';
import './FullInfoCard.scss';

const FullInfoCard = ({
  imgSrc,
  beerName,
  beerDescr,
  tagLine,
  brewDate,
  toggleFullInfo,
  brewMethod,
  acidity,
  alcoholVol,
}) => {
  const fullInfoCardJSX = (
    <>
      <div className='full-info-card'>
        <div className='full-card-info__toggle' onClick={toggleFullInfo}>
          Back
        </div>
        <img src={imgSrc} className='full-info-card__img' alt={beerName} />
        <h3 className='full-info-card__heading'>{beerName}</h3>
        <h4 className='full-info-card__date'>{brewDate}</h4>
        <h4 className='full-info-card__tagline'>{tagLine}</h4>
        <p className='full-info-card__acidity'>{acidity}</p>
        <p className='full-info-card__alcohol'>{alcoholVol}</p>
        <p className='full-info-card__descr'>{beerDescr}</p>
        <p className='full-info-card__method'>{brewMethod}</p>
      </div>
    </>
  );
  return <>{fullInfoCardJSX}</>;
};

export default FullInfoCard;
