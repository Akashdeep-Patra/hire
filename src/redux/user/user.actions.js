import { UserActionType } from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionType.GOOGLE_SIGNIN_START,
});

export const signInSuccess = (user) => ({
  type: UserActionType.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFaliure = (error) => ({
  type: UserActionType.SIGNIN_FALIURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionType.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: UserActionType.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionType.SIGNOUT_START,
});
export const signOutSuccess = () => ({
  type: UserActionType.SIGNOUT_SUCCESS,
});

export const signOutFaliure = (error) => ({
  type: UserActionType.SIGNOUT_FALIURE,
  payload: error,
});

export const signUpStart = (formDetails) => ({
  type: UserActionType.SIGNUP_START,
  payload: formDetails,
});

export const signUpSuccess = () => ({
  type: UserActionType.SIGNUP_SUCCESS,
});

export const signUpFalure = (error) => ({
  type: UserActionType.SIGNUP_FALIURE,
  payload: error,
});

export const addVideoStart = (user, video) => ({
  type: UserActionType.ADD_VIDEO_START,
  payload: { video, user },
});

export const addVideoSuccess = () => ({
  type: UserActionType.ADD_VIDEO_SUCCESS,
});

export const addVideoFaliure = (error) => ({
  type: UserActionType.ADD_VIDEO_FALIURE,
  payload: error,
});
