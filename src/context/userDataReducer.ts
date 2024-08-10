// userDataReducer.ts

import { ADD_USER_DATA, GET_USER_DATA, UPDATE_USER_DATA } from './actionTypes';
import userActivities from '../stub/userActivities';


export interface RestaurantActivityData {
  foodName: string;
  quantity: string;
  redStars?: string;
  yellowStars?: string;
}

export interface SportActivityData {
  name: string;
  time: number;
  peopleNum: string;
}

export interface PintActivityData {
  beverageName: string;
  cups: number;
}

export interface ChatActivityData {
  feeling: string;
}

export interface TargetActivityData {
  feeling: string;
}

export type ActivityData =
  | RestaurantActivityData
  | SportActivityData
  | PintActivityData
  | ChatActivityData
  | TargetActivityData;

export interface Activity {
  name: string;
  date: string;
  data: ActivityData;
}

export interface State {
  data: Activity[];
}

const initialState: State = {
  data: [],
};

const userDataReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case ADD_USER_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case UPDATE_USER_DATA:
      return {
        ...state,
        data: state.data.map(activity =>
          activity.name === action.payload.name && activity.date === action.payload.date
            ? action.payload
            : activity
        ),
      };

    case GET_USER_DATA:
        console.log("user on Get",userActivities.user.activities)
      return {
        ...state,
        data: userActivities.user.activities,
      };

    default:
      return state;
  }
};

export default userDataReducer;
