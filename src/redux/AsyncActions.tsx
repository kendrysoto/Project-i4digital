import axios from "axios";
import { BASE_URL } from "../const/index";
import { first } from "underscore";

type Action =
  | { type: "FETCH_USER_SUCCESS"; payload: any }
  | { type: "FETCH_USER_FAILURE"; payload: any }
  | { type: "FETCH_USER_REQUEST"; payload: any }
  | { type: "FETCH_ALBUM_SUCCESS"; payload: string }
  | { type: "FETCH_ALBUM_FAILURE"; payload: string }
  | { type: "FETCH_ALBUM_REQUEST"; payload: string }
  | { type: "FETCH_PUBLICATION_SUCCESS"; payload: any }
  | { type: "FETCH_PUBLICATION_FAILURE"; payload: any }
  | { type: "FETCH_PUBLICATION_REQUEST"; payload: any };

export const fetchUser = () => {
  return (dispatch: any) => {
    dispatch(fetchUserRequest);
    axios
      .get(`${BASE_URL}users`)
      .then((response) => {
        const dataUser = first(response.data, 9);
        dispatch(fetchUserSucces(dataUser));
      })
      .catch((error) => {
        const errorMsg = error.payload;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};

export const fetcAlbum = () => {
  return (dispatch: any) => {
    dispatch(fetchAlbumRequest);
    axios
      .get(`${BASE_URL}albums`)
      .then((response) => {
        const dataAlbum = first(response.data, 6);
        dispatch(fetchAlbumSucces(dataAlbum));
      })
      .catch((error) => {
        const errorMsg = error.payload;
        dispatch(fetchAlbumFailure(errorMsg));
      });
  };
};

export const fetcPublication = () => {
  return (dispatch: any) => {
    dispatch(fetchPublicationRequest);
    axios
      .get(`${BASE_URL}comments`)
      .then((response) => {
        const dataPublication = first(response.data, 6);
        dispatch(fetchPublicationSucces(dataPublication));
      })
      .catch((error) => {
        const errorMsg = error.payload;
        dispatch(fetchPublicationFailure(errorMsg));
      });
  };
};

export const fetchUserSucces = (dataUser: any): Action => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: dataUser,
  };
};

export const fetchUserFailure = (error: any): Action => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
};

export const fetchUserRequest = (error: any): Action => {
  return {
    type: "FETCH_USER_REQUEST",
    payload: error,
  };
};

export const fetchAlbumSucces = (dataAlbum: any): Action => {
  return {
    type: "FETCH_ALBUM_SUCCESS",
    payload: dataAlbum,
  };
};

export const fetchAlbumFailure = (error: any): Action => {
  return {
    type: "FETCH_ALBUM_FAILURE",
    payload: error,
  };
};

export const fetchAlbumRequest = (error: any): Action => {
  return {
    type: "FETCH_ALBUM_REQUEST",
    payload: error,
  };
};

export const fetchPublicationSucces = (dataPublication: any): Action => {
  return {
    type: "FETCH_PUBLICATION_SUCCESS",
    payload: dataPublication,
  };
};

export const fetchPublicationFailure = (error: any): Action => {
  return {
    type: "FETCH_PUBLICATION_FAILURE",
    payload: error,
  };
};

export const fetchPublicationRequest = (error: any): Action => {
  return {
    type: "FETCH_PUBLICATION_REQUEST",
    payload: error,
  };
};

export default {
  fetchUser,
  fetchUserSucces,
  fetchUserFailure,
  fetchUserRequest,
  fetcAlbum,
  fetchAlbumSucces,
  fetchAlbumFailure,
  fetchAlbumRequest,
  fetcPublication,
  fetchPublicationSucces,
  fetchPublicationFailure,
  fetchPublicationRequest,
};
