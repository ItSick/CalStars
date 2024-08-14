// userDataReducer.ts

import { CREATE_USER_DATA, GET_USER_DATA, GET_USER_DATA_FAILURE, GET_USER_DATA_SUCCESS, UPDATE_USER_DATA } from './actionTypes';


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
export interface User {
  id: number;
  name: string;
  activities: Activity[];
}

export interface State {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  user: null,
  loading: false,
  error: null,
};

const userDataReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case CREATE_USER_DATA:
      return {
        ...state,
        user: state.user,
      };

    case UPDATE_USER_DATA:
      return {
        ...state,
        user: state.user
        // user: state.user?.activities.map(activity =>
        //   activity.name === action.payload.name && activity.date === action.payload.date
        //     ? action.payload
        //     : activity
        // ),
      };

    case GET_USER_DATA:
      //console.log('GET_USER_DATA action', action)
      return {
        ...state,
        loading: true,
        user: action.payload,
      };

    case GET_USER_DATA_SUCCESS:
      //console.log('GET_USER_DATA_SUCCESS', action)
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case GET_USER_DATA_FAILURE:
      //console.error('GET_USER_DATA_SUCCESS', action)
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userDataReducer;
