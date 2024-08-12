import { Dispatch } from 'redux';
import { CREATE_USER_DATA, UPDATE_USER_DATA, GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILURE } from './actionTypes';
import { Activity } from './userDataReducer';
import { calStarService } from "../services/calStarService";


// Action creator for adding user data
export const addUserData = (data: Activity) => {
  return {
    type: CREATE_USER_DATA,
    payload: data,
  } as const; // Use 'as const' to infer the action type correctly
};

// Action creator for updating user data
export const updateUserData = (data: Activity) => {
  return {
    type: UPDATE_USER_DATA,
    payload: data,
  } as const;
};

// Async action creator for getting user data
export const getUserData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'GET_USER_DATA' });
    try {
      const response = await calStarService.getUserData();
      dispatch({
        type: 'GET_USER_DATA_SUCCESS',
        payload: response
      });
    } catch (error) {
      dispatch({
        type: 'GET_USER_DATA_FAILURE',
        payload: error
      });
    }



  };
};
