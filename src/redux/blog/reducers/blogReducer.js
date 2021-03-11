import { ADD_BLOG, EDIT_BLOG, DELETE_BLOG } from "../actions/actionTypes";

const initBlogState = {
  blogs: localStorage.getItem("blogs")
    ? JSON.parse(localStorage.getItem("blogs"))
    : [],
};

export const blogReducer = (state = initBlogState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      localStorage.setItem(
        "blogs",
        JSON.stringify([...state.blogs, action.payload])
      );
      return {
        blogs: [...state.blogs, action.payload],
      };
    case EDIT_BLOG:
      //traditional  way to edit object in array
      // let blogsCloneForEdit = [...state.blogs];
      // let blogEdited = blogsCloneForEdit.find(
      //   (t) => t.id === action.payload.id
      // );
      // blogEdited.title = action.payload.title;
      // blogEdited.content = action.payload.content;
      //the second way to update/edit object in array
      let blogsForEdit = state.blogs;
      let index = blogsForEdit.indexOf(
        blogsForEdit.find(
          (b) => b.id.toString() === action.payload.id.toString()
        )
      );
      blogsForEdit[index] = action.payload;

      localStorage.setItem("blogs", JSON.stringify(blogsForEdit));

      return {
        ...state,
        blogs: blogsForEdit,
      };
    case DELETE_BLOG:
      //there are 2 ways to remove an object from an array
      //1.
      let blogsCloneForDelete = [
        ...state.blogs.filter((blog) => blog.id !== action.payload),
      ];
      //2.
      // let indexOfBlogDeleted = blogsCloneForDelete.indexOf(
      //   blogsCloneForDelete.find((t) => t.id === action.payload)
      // );
      // blogsCloneForDelete.splice(indexOfBlogDeleted, 1);

      localStorage.setItem("blogs", JSON.stringify(blogsCloneForDelete));
      return {
        blogs: blogsCloneForDelete,
      };

    default:
      return state;
  }
};
