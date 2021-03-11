import { blogReducer } from "./blog/reducers/blogReducer";

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  blogs: blogReducer,
});
