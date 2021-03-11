import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import {
  addBlogAction,
  editBlogAction,
} from "../redux/blog/actions/blogActions";

function CreateNewBlog({ addNewBlog, blogToEdit, editBlog }) {
  const history = useHistory();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });
  useEffect(() => {
    if (blogToEdit && blogToEdit.id) {
      console.log(blogToEdit);
      setBlog(blogToEdit);
    } else return null;
  }, [blogToEdit]);
  const handleChange = (e) => {
    let name = e.target.name;
    let blogCopy = { ...blog };
    blogCopy[name] = e.target.value;
    setBlog(blogCopy);
  };
  const handleSaveBlog = () => {
    if (blogToEdit && blogToEdit.id) {
      editBlog(blog);
      history.push(`/blog/${blogToEdit.id}`);
    } else {
      let blogId = Date.now();
      let blogClone = { ...blog, id: blogId };
      addNewBlog(blogClone);
      history.push("/");
    }
  };

  const handleCancelBlogSaving = () => {
    setBlog({
      title: "",
      content: "",
    });
    history.push("/");
  };
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="blogTitle" className="form-label">
          Blog Title
        </label>
        <input
          className="form-control"
          name="title"
          type="text"
          value={blog.title}
          onChange={handleChange}
          id="blogTitle"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="blogContent" className="form-label">
          Blog Content
        </label>
        <textarea
          value={blog.content}
          placeholder="Enter Blog Content here "
          className="form-control"
          // type="textbox"
          name="content"
          onChange={handleChange}
          id="blogContent"
        />
      </div>
      <button className="btn btn-success" onClick={handleSaveBlog}>
        {" "}
        Save
      </button>
      <button className="btn btn-danger" onClick={handleCancelBlogSaving}>
        Cancel
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let blogID = ownProps.match.params.id;
  if (!blogID)
    return {
      addNewBlog: (blog) => dispatch(addBlogAction(blog)),
    };
  else {
    return {
      editBlog: (blog) => dispatch(editBlogAction(blog)),
    };
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state.blogs);

  let blogID = ownProps.match.params.id;
  if (blogID)
    return {
      blogToEdit: state.blogs.blogs.find((b) => b.id === parseFloat(blogID)),
    };
  else return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewBlog);
