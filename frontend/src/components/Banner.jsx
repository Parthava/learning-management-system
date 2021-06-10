import React from 'react';
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div>
      <div className="banner-wrapper bg-light">
        <div id="index_banner" className="banner-vertical-center-index container-fluid pt-5">
          <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="py-5 row d-flex align-items-center">
                  <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                    <h1 className="banner-heading text-primary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                      Develop <strong>Strategies</strong> for 
                      <br/>Unlimited Learning
                    </h1>
                    <p className="banner-body text-muted py-3">
                      Never stop learning. Never stop exploring. Never stop growing. Never stop living. Never stop smiling.
                    </p>
                    <NavLink to="/" exact>
                      <button type="button" className="btn rounded-pill btn-outline-primary btn-lg px-4">Know More</button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="py-5 row d-flex align-items-center">
                  <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                    <h1 className="banner-heading text-primary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                      Explore various <strong>Courses</strong>
                    </h1>
                    <p className="banner-body text-muted py-3">
                      We are offering a bunch of updated courses to make you market-ready. Start your journey now!
                    </p>
                    <NavLink to="/" exact>
                      <button type="button" className="btn rounded-pill btn-outline-primary btn-lg px-4">Explore Now</button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="py-5 row d-flex align-items-center">
                  <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                    <h1 className="banner-heading text-primary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                      <strong>Test</strong> your limits
                    </h1>
                    <p className="banner-body text-muted py-3">
                      Attending the lectures alone are not enough. Take a step beyond by testing your knowledge with our updated tests.
                    </p>
                    <NavLink to="/" exact>
                      <button type="button" className="btn rounded-pill btn-outline-primary btn-lg px-4">Get Started</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev text-decoration-none" href="#carouselIndicators" role="button" data-bs-slide="prev">
                <i className='bi-chevron-left'></i>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next text-decoration-none" href="#carouselIndicators" role="button" data-bs-slide="next">
                <i className='bi-chevron-right'></i>
                <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
