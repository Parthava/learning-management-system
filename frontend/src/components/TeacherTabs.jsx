import React from 'react';
import { NavLink } from "react-router-dom";

function TeacherTabs() {
  return (
    <div className="py-2">
      <div className="col-md-12">
        <ul className="nav d-flex justify-content-center">
          <li className="nav-item mx-lg-4">
            <NavLink to="/teacher_courses" exact className="btn nav-link btn-info rounded-pill text-dark px-4 light-300">Courses</NavLink>
          </li>
          <li className="nav-item mx-lg-4">
            <NavLink to="/teacher_tests" exact className="btn nav-link btn-info rounded-pill text-dark px-4 light-300">Tests</NavLink>
          </li>
          <li className="nav-item mx-lg-4">
            <NavLink to="/" exact className="btn nav-link btn-info rounded-pill text-dark px-4 light-300">Results</NavLink>
          </li>
          <li className="nav-item mx-lg-4">
            <NavLink to="/" exact className="btn nav-link btn-info rounded-pill text-dark px-4 light-300">Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TeacherTabs
