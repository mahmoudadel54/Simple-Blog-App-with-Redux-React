import React from "react";
// import SideBar from "../components/sideBar";
import BlogsListContent from "../components/blogsList";

export default function Home() {
  return (
    <div className="content">
      <h1>New Blogs</h1>

      <div className="container">
        <div className="home-grid">
          <BlogsListContent />
          {/* <SideBar /> */}
        </div>
      </div>
    </div>
  );
}
