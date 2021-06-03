const initialState: ReducerState = {
  user: [],
  album: [],
  publication: [],
  loading: false,
  error: "",
};

interface ReducerState {
  user?: any;
  loading?: boolean;
  error?: any;
  album?: any;
  publication?: any;
}

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

const reducer = (state: ReducerState = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USER_SUCCESS":
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case "FETCH_USER_FAILURE":
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
    case "FETCH_ALBUM_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_ALBUM_SUCCESS":
      return {
        loading: false,
        album: action.payload,
        error: "",
      };
    case "FETCH_ALBUM_FAILURE":
      return {
        loading: false,
        album: [],
        error: action.payload,
      };
    case "FETCH_PUBLICATION_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PUBLICATION_SUCCESS":
      return {
        loading: false,
        publication: action.payload,
        error: "",
      };
    case "FETCH_PUBLICATION_FAILURE":
      return {
        loading: false,
        publication: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
