import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function BlogDetail({ blog }) {
  if (blog)
    return (
      <div className="container">
        <div className="blog-detail">
          <div>
            <h2>Blog Title: {blog.title}</h2>
            <br></br>
            <p>{blog.content}</p>
          </div>
          <br />
          <div>
            <Link to={`/blog/edit/${blog.id}`} className="btn btn-info">
              <i className="fas fa-edit"></i> Edit
            </Link>
          </div>
        </div>
      </div>
    );
  else
    return (
      <>
        <h1>Error 404 Page Not Found</h1>
      </>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    blog: state.blogs.blogs.find(
      (t) => t.id.toString() === ownProps.match.params.id.toString()
    ),
  };
};

export default connect(mapStateToProps)(BlogDetail);
