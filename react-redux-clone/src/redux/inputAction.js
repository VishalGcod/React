export const ADD_INPUT = "ADD_INPUT";
export const ARRAY_DATA = "ARRAY_DATA";
export const EDIT_ARRAY = "EDIT_ARRAY";
export const UPDATE_DATA = "UPDATE_DATA";

// export const addInput = (inputdata) => {
//   return {
//     type: ADD_INPUT,
//     payload: inputdata,
//   };
// };

export const addToArr = (arrobj) => {
  return {
    type: ARRAY_DATA,
    payload: arrobj,
  };
};
export const editToArr = (editarrobj) => {
  return {
    type: EDIT_ARRAY,
    payload: editarrobj,
  };
};

export const updateData = (updatearrobj) => {
  return {
    type: UPDATE_DATA,
    payload: updatearrobj,
  };
};
