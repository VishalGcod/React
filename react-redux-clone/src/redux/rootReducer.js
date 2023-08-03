import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { icecreamReducer } from "./icecream/icecreamReducer";
import { fetchReducer, inputReducer, objReducer } from "./inputReducer";

export const rootReducer = combineReducers({
  // cake:cakeReducer,
  // icecream:icecreamReducer,
  // input:inputReducer,
  obj: objReducer,
  fetch: fetchReducer,
});
