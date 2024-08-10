import { ADD_USER_DATA, GET_USER_DATA, UPDATE_USER_DATA } from './actionTypes';
import { Activity } from './userDataReducer'; // Import the Activity type

// Action creators with TypeScript types

// Action creator for adding user data
export const addUserData = (data: Activity) => {
  return {
    type: ADD_USER_DATA,
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

// Action creator for getting user data
export const getUserData = (activities: Activity[]) => {
  return {
    type: GET_USER_DATA,
    payload: activities,
  } as const;
};
