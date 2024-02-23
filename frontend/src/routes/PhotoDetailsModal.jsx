import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {
  // console.log('PhotoDetailsModal props', props);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.setDisplayModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <img src={props.photoDetails.urls.full} alt="image" className='photo-details-modal__image' />
        <div className="photo-details-modal__photographer-details">
          <img src={props.photoDetails.user.profile} alt="profile image" className="photo-details-modal__photographer-profile" />
          <div>
            <p className="photo-details-modal__photographer-info">{props.photoDetails.user.username}</p>
            <p className="photo-details-modal__photographer-location">{props.photoDetails.location.city}, {props.photoDetails.location.country}</p>
          </div>
        </div>
        <div className='photo-details-modal__header'>
          <h1>Similar Photos</h1>
        </div>
        <div className='photo-details-modal__images'>
          <PhotoList photos={Object.values(props.photoDetails.similar_photos)}  />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
