import { useReducer, useEffect, } from "react";

const initialState = {
  favouritePhotos: [],
  modalPhoto: null,
  photos: [],
  topics: [],
  photoSelected: false
};

const ACTIONS = {
  SET_FAVOURITE_PHOTOS: "SET_FAVOURITE_PHOTOS",
  SET_MODAL_PHOTO: "SET_MODAL_PHOTO",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  CLOSE_MODAL_PHOTO: "CLOSE_MODAL_PHOTO",
  SET_DISPLAY_MODAL: "SET_DISPLAY_MODAL"
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DISPLAY_MODAL: 
      return { ...state, photoSelected: action.payload };
    case ACTIONS.SET_FAVOURITE_PHOTOS:
      return { ...state, favouritePhotos: action.payload };
    case ACTIONS.SET_MODAL_PHOTO:
      return { ...state, modalPhoto: action.payload };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };
    case ACTIONS.CLOSE_MODAL_PHOTO:
      return { ...state, modalPhoto: null, photoSelected: false};
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos by topic:", error);
      });
  };

  const setFavouritePhotos = (photos) => {
    dispatch({ type: ACTIONS.SET_FAVOURITE_PHOTOS, payload: photos });
  };

  const closeModalPhoto = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL_PHOTO });
  };

  const updateToFavPhotoIds = (photoId) => {
    if (state.favPhotos.includes(photoId)) {
      const newFavPhotos = state.favouritePhotos.filter(
        (photo) => photo.id !== photoId
      );
      dispatch({ type: ACTIONS.SET_FAVOURITE_PHOTOS, payload: newFavPhotos});
    } else {
      const newFavPhotos = state.photos.filter((photo) => photo.id === photoId);
      setFavouritePhotos([...state.favouritePhotos, ...newFavPhotos]);
      dispatch({ type: ACTIONS.SET_FAVOURITE_PHOTOS, payload: [...state.favouritePhotos, ...newFavPhotos] });
    }
  };

  const setModalPhoto = (photo) => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO, payload: photo })
    dispatch({ type: ACTIONS.SET_DISPLAY_MODAL, payload: true })
  };

  return {
    state,
    setFavouritePhotos,
    setModalPhoto,
    closeModalPhoto,
    fetchPhotosByTopic,
    updateToFavPhotoIds
  };
};

export default useApplicationData;