import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  // console.log('TopNavigation props', props)
  const isFavPhotoExist = props.favouritePhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} fetchPhotosByTopic={props.fetchPhotosByTopic}/>
      <FavBadge selected={true} isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
};

export default TopNavigation;