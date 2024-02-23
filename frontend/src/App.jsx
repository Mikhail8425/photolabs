import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import './App.scss';
import './styles/HomeRoute.scss'

// Note: Rendering a single component to build components in isolation
const App = () => {
  const displayModal  = {empty: true};
  const [displayPhotoDetails, setDisplayPhotoDetails] = useState(displayModal);
  const setDisplayModal = function(photoDetails) {
    if (photoDetails) {
      setDisplayPhotoDetails({empty: false, photoDetails});
    } else {
      setDisplayPhotoDetails(displayModal);
    }
  }
  return (
    <div className="App">
      <HomeRoute setDisplayModal = {setDisplayModal}/>
      {!displayPhotoDetails.empty && <PhotoDetailsModal photoDetails={displayPhotoDetails.photoDetails} setDisplayModal={() => setDisplayModal()}/>}
    </div>
  );
};

export default App;