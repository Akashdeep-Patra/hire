import { UserActionType } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  playList: {},
  signInError: null,
  signOutError: null,
  signUpError: null,
  addVideoError: null,
  deleteVideoError: null,
  getPlayListError: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signInError: null,
      };
    case UserActionType.SIGNIN_FALIURE:
      return {
        ...state,
        signInError: action.payload,
      };
    case UserActionType.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        signOutError: null,
      };
    case UserActionType.SIGNOUT_FALIURE:
      return {
        ...state,
        signOutError: action.payload,
      };
    case UserActionType.SIGNUP_SUCCESS:
      return {
        ...state,
        signUpError: null,
      };
    case UserActionType.SIGNUP_FALIURE:
      return {
        ...state,
        signUpError: action.payload,
      };
    case UserActionType.ADD_VIDEO_SUCCESS:
      return {
        ...state,
        addVideoError: null,
      };
    case UserActionType.ADD_VIDEO_FALIURE:
      return {
        ...state,
        addVideoError: action.payload,
      };
    case UserActionType.DELETE_VIDEO_SUCCESS:
      return {
        ...state,
        deleteVideoError: null,
      };
    case UserActionType.DELETE_VIDEO_FALIURE:
      return {
        ...state,
        deleteVideoError: action.payload,
      };
    case UserActionType.GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        playList: action.payload,
        getPlayListError: null,
      };
    case UserActionType.GET_PLAYLIST_FALIURE:
      return {
        ...state,
        getPlayListError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
