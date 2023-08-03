import { ADD_ICECREAM, DEL_ICECREAM, MULTI_ICECREAM } from "./icecreamTypes";

const initialState = {
  numOfIcecreams: 1,
};

export const icecreamReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state?.numOfIcecreams + 1,
      };
    case DEL_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state?.numOfIcecreams - 1,
      };
    case MULTI_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state?.numOfIcecreams * 2,
      };

    default:
      return state;
  }
};
