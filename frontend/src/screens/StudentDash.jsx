import React from 'react';
import { NavLink } from "react-router-dom";
import bck from "../assets/img/workspace.jpg";
import Footer from '../components/Footer';

function StudentDash() {
  return (
    <div>
      <section>
        <div id="page_banner2" className="banner-wrapper bg-light w-100 py-5">
          <div className="container text-light d-flex justify-content-center align-items-center py-5 p-0">
            <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
              <h1 className="banner-heading display-3 pb-5 semi-bold-600 typo-space-line-center">Student Dashboard</h1>
              
              <div className="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 m-0">
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <NavLink to="/" exact className="course card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="course card-img" src={bck} alt="courseImage"/>
                    <div className="course-vertical card-img-overlay d-flex align-items-end">
                      <div className="course-content text-left text-light">
                        <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Courses</span>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-6">
                  <NavLink to="/" exact className="course card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="course card-img" src={bck} alt="courseImage"/>
                    <div className="course-vertical card-img-overlay d-flex align-items-end">
                      <div className="course-content text-left text-light">
                        <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Tests</span>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-6">
                  <NavLink to="/" exact className="course card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="course card-img" src={bck} alt="courseImage"/>
                    <div className="course-vertical card-img-overlay d-flex align-items-end">
                      <div className="course-content text-left text-light">
                        <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Results</span>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-6">
                  <NavLink to="/" exact className="course card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="course card-img" src={bck} alt="courseImage"/>
                    <div className="course-vertical card-img-overlay d-flex align-items-end">
                      <div className="course-content text-left text-light">
                        <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Profile</span>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default StudentDash
