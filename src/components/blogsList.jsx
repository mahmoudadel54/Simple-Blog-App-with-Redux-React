// import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBlogAction } from "../redux/blog/actions/blogActions";

const BlogsListContent = ({ blogs, deleteBlog }) => {
  console.log(blogs);
  //   const { blogs } = useSelector((state) => state.blogs);
  return (
    <div className="home-content">
      <div className="blogs-cards">
        {blogs.length ? (
          blogs.map((blog, index) => (
            <div className="card" key={index}>
              <h5 className="card-header">Blog</h5>
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
                <Link to={`/blog/${blog.id}`} className="btn btn-primary mr-1">
                  <i className="fas fa-info-circle"></i> {"  "} Details
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBlog(blog.id)}
                >
                  <i className="fas fa-trash"></i> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <h1>There is no blog</h1>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBlog: (id) => dispatch(deleteBlogAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogsListContent);
