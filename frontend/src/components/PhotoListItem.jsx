import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  // console.log('PhotoListItem props', props)
  return (
    <article key={props.photoItem.id} className="photo-list__item">
      <PhotoFavButton selected={props.selected} toggleLikedPhoto={props.toggleLikedPhoto}/>
      <img src={props.photoItem.urls.regular} alt="image" className="photo-list__image" onClick={() => props.setDisplayModal(props.photoItem)}/>
      <div className="photo-list__user-details">
        <img src={props.photoItem.profile} alt="profile image" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{props.photoItem.user.username}</p>
          <p className="photo-list__user-location ">{props.photoItem.location.city}, {props.photoItem.location.country}</p>
        </div>
      </div>
  </article>
  );
};

export default PhotoListItem;