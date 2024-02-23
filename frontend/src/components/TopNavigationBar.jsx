import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {  
  let photosLiked = props.photos.reduce((photoLiked, photo) => {
    return photoLiked || photo.liked;
  }, false);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} /> 
      <FavBadge selected={photosLiked} isFavPhotoExist={photosLiked} />
    </div>
  )
}

export default TopNavigation;