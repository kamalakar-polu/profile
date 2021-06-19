import React from "react";
import profileImg from "../../images/kamalakar-profile.jpg";

export const Home = () => {
  return (
    <>
      <div className="landing-section">
        <div className="container">
          {/* container-cm */}
          <div className="navbar-wrapper">
            <nav className="navbar main-navbar">
              <div className="profile-avatar">
                <img alt="Social Icon" src={profileImg} />
              </div>
              <div className="nav-items">
                <ul>
                  <li>
                    <a href="/about">About Me</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
                <div className="btn-hire-me">
                  <a href="https://wa.me/919949555578" target="_blank">
                    Hire Me
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="landing-page-content">
            <div className="profile-content">
              <h2>I'm</h2>
              <h1>
                Kamalakar.Polu
                <br /> <span>Full Stack Developer</span>
              </h1>
              <div className="social-media">
                <a
                  href="https://www.instagram.com/kamalakar_polu/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                </a>
                <a
                  href="https://github.com/kamalakar-polu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </span>
                </a>
                <a
                  href="https://wa.me/919949555578"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/iamKamalakarPolu/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </span>
                </a>
                <a
                  href="https://twitter.com/KamalakarPolu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="services-section py-5">
          <div className="container">
            <h3>What I can do!</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="service-card card py-2 px-3">
                  <h2>Web Designer </h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card card py-2 px-3">
                  <h2>Web Developer </h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card card py-2 px-3">
                  <h2>Graphic Designer </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
