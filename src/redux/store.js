import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const middleWare = composeWithDevTools(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, middleWare);

export default store;
