import { ADD_BLOG, EDIT_BLOG, DELETE_BLOG } from "./actionTypes";

export const addBlogAction = (blog) => {
  return {
    type: ADD_BLOG,
    payload: blog,
  };
};

export const editBlogAction = (editedBlog) => {
  return {
    type: EDIT_BLOG,
    payload: editedBlog,
  };
};

export const deleteBlogAction = (id) => {
  return {
    type: DELETE_BLOG,
    payload: id,
  };
};
