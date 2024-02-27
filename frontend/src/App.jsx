import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';
import './styles/HomeRoute.scss'

// Note: Rendering a single component to build components in isolation
const App = () => {  
  const { 
    state, 
    updateToFavPhotoIds, 
    setPhotoSelected, 
    setFavouritePhotos,
    setModalPhoto,
    closeModalPhoto,
    fetchPhotosByTopic,
    switchLight
  } = useApplicationData();
  console.log('state', state);
  const dark = (state.light === 'off') ? 'dark' : '';
  return (
    <div className={`App ${dark}`}>
      <HomeRoute 
        state={state} 
        setPhotoSelected={setPhotoSelected} 
        updateToFavPhotoIds={updateToFavPhotoIds} 
        setModalPhoto={setModalPhoto}
        setFavouritePhotos={setFavouritePhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        switchLight={switchLight}
      />
      {state.photoSelected && <PhotoDetailsModal 
        state={state} 
        closeModalPhoto={closeModalPhoto}
        updateToFavPhotoIds={updateToFavPhotoIds} 
        setModalPhoto={setModalPhoto}
        setFavouritePhotos={setFavouritePhotos}
      />}
    </div>
  );
};

export default App;