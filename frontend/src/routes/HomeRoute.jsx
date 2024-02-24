import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  console.log('HomeRoute props', props)
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} fetchPhotosByTopic={props.fetchPhotosByTopic} />
      <PhotoList photos={props.photos} favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} setModalPhoto={props.setModalPhoto} similarPhotos={props.similarPhotos}  />
    </div>
  );
};

export default HomeRoute;