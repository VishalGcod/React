import { ADD_INPUT } from "./inputAction";

import { ARRAY_DATA } from "./inputAction";

import { EDIT_ARRAY } from "./inputAction";

import { UPDATE_DATA } from "./inputAction";

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./inputAction";

const initialState2 = {
  arr: [],
};

// const initialState = {
//   inputArray: {},
// };

// export const inputReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_INPUT:
//       return {
//         ...state,
//         inputArray: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const objReducer = (state = initialState2, action) => {
  switch (action.type) {
    case ARRAY_DATA:
      return {
        ...state,
        arr: action.payload,
      };
    case EDIT_ARRAY:
      return {
        ...state,
        arr: action.payload,
      };
    case UPDATE_DATA:
      return {
        ...state,
        arr: action.payload,
      };
    default:
      return state;
  }
};

const initialFetch = {
  loading: false,
  users: [],
  error: "",
};

export const fetchReducer = (state = initialFetch, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
