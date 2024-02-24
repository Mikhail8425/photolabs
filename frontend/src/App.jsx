import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';
import './styles/HomeRoute.scss'

// Note: Rendering a single component to build components in isolation
const App = () => {  
  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal } = useApplicationData();
  console.log('state', state);
  return (
    <div className="App">
      <HomeRoute state={state} setPhotoSelected={setPhotoSelected} updateToFavPhotoIds={updateToFavPhotoIds} />
      {state.photoSelected && <PhotoDetailsModal state={state} onClosePhotoDetailsModal={onClosePhotoDetailsModal} updateToFavPhotoIds={updateToFavPhotoIds}/>}
    </div>
  );
};

export default App;