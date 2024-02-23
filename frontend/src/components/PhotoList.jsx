import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoList = props.photos.map((photo) => {
    return <PhotoListItem photoItem = {photo} key={photo.id} toggleLikedPhoto={() => props.toggleLikedPhoto(photo.id)} selected={photo.liked} />
  }); 
  
  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
