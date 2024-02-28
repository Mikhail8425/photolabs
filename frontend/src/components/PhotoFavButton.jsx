import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // console.log('PhotoFavButton props', props)

  const [likes, setLikes] = useState(false);
  let favourites = props.favouritePhotos;
  const toggleFavorite = () => {
    console.log('toggleFavorite')

    console.log('favourites', favourites)
    let like = false  

    if (favourites.includes(props.id)) { 
      const index = favourites.indexOf(props.id);
      if (index > -1) {
        favourites.splice(index, 1);
      }
    } else {
      favourites.push(props.id);
      like = true
    }
    props.setFavouritePhotos([...favourites]);
    setLikes(like);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourites.includes(props.id)} />
      </div>
      <div className="photo-list__likes">{likes}</div>
    </div>
  );
}

export default PhotoFavButton;