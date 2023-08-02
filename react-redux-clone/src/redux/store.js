import { cakeReducer } from "./cake/cakeReducer";
import { createStore, applyMiddleware } from "redux";
import { icecreamReducer } from "./icecream/icecreamReducer";
import { rootReducer } from "./rootReducer";
import { logger } from "redux-logger";

export const store = createStore(rootReducer, applyMiddleware(logger));
