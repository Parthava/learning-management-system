import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses } from '../actions/courseActions';
import CourseBox from '../components/CourseBox';
import { NavLink } from "react-router-dom";
import bck from "../assets/img/workspace.jpg";

function Features() {

    const dispatch = useDispatch()

    const courseList = useSelector(state => state.courseList)
    const { loading, error, courses} = courseList

    useEffect(() => {
      dispatch(listCourses())

    },[dispatch]);

     console.log(courses)

  return (
    <div>
      <section className="bg-info">
        <div className="container py-5">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-2 col-12 text-light align-items-center">
              <i className='display-1 bi-gift-fill bi-lg'></i>
            </div>
            <div className="col-lg-7 col-12 text-light pt-2">
              <h3 className="light-300">Make transformations successful</h3>
              <p className="light-300">Get ready to transform yourself from zero to hero with our courses
              <br/><a rel="noreferrer" target="_blank" href='https://www.freepik.com/vectors/mockup'>Mockup vector created by macrovector - www.freepik.com</a></p>
            </div>
            <div className="col-lg-3 col-12 pt-4">
              <NavLink to="/courses" exact>
                <button type="button" className="btn btn-primary rounded-pill btn-block shadow px-4 py-2">View Our Courses</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 mb-5">
        <div className="container">
            <div className="row text-center pb-5">
              <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">Our Popular Courses</h2>
            </div>
            <div className="row gy-5 g-lg-5 mb-4">
              {courses.map(course => (

                <CourseBox
                  courseName = {course.course_name}
                  courseOutline = {course.course_outline}
                />

              ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Features
