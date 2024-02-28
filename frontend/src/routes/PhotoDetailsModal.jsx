import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss'

const PhotoDetailsModal = (props) => {
  console.log('PhotoDetailsModal props', props)
  const {closeModalPhoto} = props;
  const modalPhoto = props.state.modalPhoto;

  const state = props.state;
  const { photos, topics, favouritePhotos, similarPhotos} = state;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModalPhoto} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div>
        <div className="photo-details-modal__image-container">
          <PhotoFavButton 
            className="photo-details__fav-icon" 
            favouritePhotos={state.favouritePhotos} 
            setFavouritePhotos={props.setFavouritePhotos} 
            id={modalPhoto.id}
          />
          <img src={modalPhoto.urls.regular} alt="profile image" className="photo-details-modal__image"/>
        </div>
        <div className="photo-details-modal__photographer-details">
          <img src={modalPhoto.user.profile} alt="profile image" className="photo-details-modal__photographer-profile" />
          <div className="locationandinfos">
            <p className="photo-details-modal__photographer-info">{modalPhoto.user.name}</p>
            <p className="photo-details-modal__photographer-location">{`${modalPhoto.location.city}, ${modalPhoto.location.country}`}</p>
          </div>
        </div>
      </div>

      <hr className='photo-details-modal__hr'></hr>
      <h1 className='photo-details-modal__title'>Related Photos </h1>

      <div className= "photo-details-modal__images">
        <PhotoList 
          favouritePhotos={state.favouritePhotos} 
          setFavouritePhotos={props.setFavouritePhotos} 
          setModalPhoto={props.setModalPhoto} 
          photos={Object.values(state.modalPhoto.similar_photos)} 
          modalPhoto={modalPhoto}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;