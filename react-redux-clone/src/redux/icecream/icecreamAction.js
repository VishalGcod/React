import { ADD_ICECREAM, MULTI_ICECREAM } from "./icecreamTypes";
import { DEL_ICECREAM } from "./icecreamTypes";

export const addIcecream = () => {
  return {
    type: ADD_ICECREAM,
  };
};

export const delIcecream = () => {
  return {
    type: DEL_ICECREAM,
  };
};

export const multiIcecream = () => {
  return {
    type: MULTI_ICECREAM,
  };
};
