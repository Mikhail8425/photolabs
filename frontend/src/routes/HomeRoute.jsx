import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  // console.log('HomeRoute props', props)
  const state = props.state;
  const { photos, topics, favouritePhotos, similarPhotos, light} = state;
  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics} 
        favouritePhotos={favouritePhotos} 
        setFavouritePhotos={props.setFavouritePhotos} 
        fetchPhotosByTopic={props.fetchPhotosByTopic}
        light={light}
      />
      <PhotoList 
        photos={photos} 
        favouritePhotos={favouritePhotos} 
        setFavouritePhotos={props.setFavouritePhotos} 
        setModalPhoto={props.setModalPhoto} 
        similarPhotos={similarPhotos}
      />
    </div>
  );
};

export default HomeRoute;