import { ADD_INPUT } from "./inputAction";

import { ARRAY_DATA } from "./inputAction";

import { EDIT_ARRAY } from "./inputAction";

import { UPDATE_DATA } from "./inputAction";

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
