import React from "react";
// import SideBar from "../components/sideBar";
import BlogsListContent from "../components/blogsList";

export default function Home() {
  return (
    <div className="content">
        <h1
        style={{
          border: "solid",
          borderRadius: "1em",
          width: "fit-content",
          margin: "auto",
          padding: "0.2em 1em",
        }}
      >
        Simple Blog App
      </h1>


      <div className="container">
        <div className="home-grid">
          <BlogsListContent />
          {/* <SideBar /> */}
        </div>
      </div>
    </div>
  );
}
