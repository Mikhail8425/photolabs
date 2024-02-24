import React from "react";

import PhotoFavButton from './PhotoFavButton';

import "../styles/PhotoFavButton.scss";
import "../styles/PhotoListItem.scss";
import "../styles/TopicList.scss";

const PhotoListItem = (props) => {
  return (
    <article className="photo-list__item">
      <PhotoFavButton favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} id={props.photo.id} className="photo-list__fav-icon" />
      <img onClick={() =>props.setModalPhoto(props.photo)} className="photo-list__image" alt="image" src={props.photo.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" alt="profile image" src={props.photo.user.profile} />
        <div className="locationandinfo">
          <p className="photo-list__user-info">{props.photo.user.name}</p>
          <p className="photo-list__user-location">{`${props.photo.location.city}, ${props.photo.location.country}`}</p>
        </div>
      </div>
    </article>
  )
};

export default PhotoListItem;