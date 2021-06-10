import React from 'react';
import { NavLink } from "react-router-dom";
import bck from "../assets/img/workspace.jpg";

function CourseBox({courseName, courseOutline}) {
  return (
    <div className="col-xl-3 col-md-4 col-sm-6 filter frontend">
      <NavLink to="/" exact className="course card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
        <img className="course card-img" src={bck} alt="courseImage"/>
        <div className="course-vertical card-img-overlay d-flex align-items-end">
          <div className="course-content text-left text-light">
            <p className="card-text"><strong>{courseName}</strong></p>
            <p className="card-text">{courseOutline}</p>
            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Enroll Now</span>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default CourseBox
