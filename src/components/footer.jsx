import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container" style={{ margin: "0 auto" }}>
          <div className="row">
            <div className="col-sm-12 col-md-6" style={{ margin: "0 auto" }}>
              <h6>About</h6>
              <p className="text-justify">
                <i>Simple Blog App </i> It's a simple blog application that I
                made to apply my first knowledge in redux with React. You can
                check this amazing playlist on youtube
                <strong>
                  {" "}
                  <a
                    style={{ color: "#0056b3" }}
                    href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK"
                  >
                    {" "}
                    React Redux Tutorial
                  </a>{" "}
                </strong>
                It is the best tutorial in redux for me at all. I am so grateful
                to this dev guy. I hope it may help you a lot.
              </p>
            </div>
            <div className="col-xs-6 col-md-3" style={{ margin: "0 auto" }}>
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <Link to="#">C</Link>
                </li>
                <li>
                  <Link to="#">UI Design</Link>
                </li>
                <li>
                  <Link to="#">PHP</Link>
                </li>
                <li>
                  <Link to="#">Java</Link>
                </li>
                <li>
                  <Link to="#">Android</Link>
                </li>
                <li>
                  <Link to="#">Templates</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3" style={{ margin: "0 auto" }}>
              <h6>Quick as</h6>
              <ul className="footer-as">
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Contribute</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container" style={{ margin: "0 auto" }}>
          <div className="row">
            <div
              className="col-md-8 col-sm-6 col-xs-12"
              style={{ margin: "0 auto" }}
            >
              <p className="copyright-text">
                Copyright © 2021 All Rights Reserved by{" "}
                <Link to="#">Mahmoud Adel (GIS Developer)</Link>.
              </p>
            </div>
            <div
              className="col-md-4 col-sm-6 col-xs-12"
              style={{ margin: "0 auto" }}
            >
              <ul className="social-icons">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-square"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/mahmoudadel54">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
