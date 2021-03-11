import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link className="btn btn-secondary" to="/home">
        <i className="fas fa-home"></i> Home
      </Link>
      {/* <div className="right-side"> */}
      <Link className="btn btn-primary" to="/blog/create">
        <i className="fas fa-plus"></i> {"  "}Create New Blog
      </Link>
      {/* </div> */}
    </div>
  );
};

export default NavBar;
