import React from 'react';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';

function StudentLogin() {
  return (
    <div>
      <section>
        <div id="page_banner2" className="banner-wrapper bg-light w-100 py-5">
          <div className="container text-light d-flex justify-content-center align-items-center py-5 p-0">
            <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
              <h1 className="banner-heading display-3 pb-5 semi-bold-600 typo-space-line-center">Student Login</h1>
              <div className="col-md-8 mx-auto my-5 text-dark">
                <form className="contact_form row" method="post" action="#">
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg light-300" id="email" name="email" placeholder="Email*" required/>
                      <label for="email light-300">Email*</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="password" className="form-control form-control-lg light-300" id="password" name="password" placeholder="Password*" required/>
                      <label for="password light-300">Password*</label>
                    </div>
                  </div>
                  <div className="col-md-12 col-12 mx-auto my-3">
                    <button type="submit" className="btn btn-info btn-lg rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Login</button>
                  </div>
                </form>
              </div>
              <div className="col-10 col-md-8 mx-auto my-5 d-flex justify-content-around">
                <NavLink to="/teacher_login" exact>
                  <button type="button" className="btn rounded-pill btn-light px-4">Teacher Login</button>
                </NavLink>
                <NavLink to="/student_register" exact>
                  <button type="button" className="btn rounded-pill btn-outline-info px-4">Register Now</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default StudentLogin
