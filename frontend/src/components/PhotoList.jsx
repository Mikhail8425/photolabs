import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  console.log('PhotoList props', props)
  
  const photoList = props.photos.map((photo) => (
    <PhotoListItem key={photo.id} photo={photo} favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} setModalPhoto={props.setModalPhoto} similarPhotos={props.similarPhotos}/>
  ));

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};


export default PhotoList;