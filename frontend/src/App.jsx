import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModel from './routes/PhotoDetailsModal';

import './App.scss';
import './styles/HomeRoute.scss'

// Note: Rendering a single component to build components in isolation
const App = () => {  
  return (
    <div className="App">
      <HomeRoute />
      <PhotoDetailsModel />
    </div>
  );
};

export default App;