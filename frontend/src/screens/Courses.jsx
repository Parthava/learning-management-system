import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses } from '../actions/courseActions';
import CourseBox from '../components/CourseBox';
import Footer from '../components/Footer';

function Courses() {

    const dispatch = useDispatch()

    const courseList = useSelector(state => state.courseList)
    const { loading, error, courses} = courseList

    useEffect(() => {
      dispatch(listCourses())

    },[dispatch]);

  return (
    <div>
      <section>
        <div id="page_banner1" className="banner-wrapper bg-light w-100 py-5">
          <div className="container text-light d-flex justify-content-center align-items-center py-5 p-0">
            <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
              <h1 className="banner-heading display-3 pb-5 semi-bold-600 typo-space-line-center">Courses</h1>
              <h3 className="pb-2 regular-400">We are offering a wide range of courses</h3>
              <p className="banner-body pb-2 light-300">
                We are glad to help you achieve your goal.
              </p>
              <p className="banner-body pb-2 text-muted">
                Vector illustration <a className="text-white" rel="noreferrer" href="http://freepik.com/" target="_blank">Freepik</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission_wrapper py-3">
        <div className="container pb-3">
          <div className="row">
            <h2 className="text-center col-12 py-5 semi-bold-600">Browse Courses</h2>
            <div className="mission_heading col-10 col-md-9 m-auto text-start float-end light-300">
              <h2 className="pb-4 typo-space-line"><i className='bi-stoplights mt-1'></i> Choose your path</h2>
            </div>
          </div>
          <p className="mission_footer col-10 offset-2 col-md-9 offset-md-3 text-start pb-3 text-muted px-2">
            You are in control of your own fate. Curve your success with us!
          </p>
        </div>
      </section>

      <section className="bg-info">
        <div className="container py-5">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-2 col-12 text-light align-items-center">
              <i className='display-1 bi-stars bi-lg'></i>
            </div>
            <div className="col-lg-8 col-12 text-light pt-2">
              <p className="light-300">Don't just study for certification</p>
              <h3 className="light-300">Get ready to become a professional</h3>
            </div>
            <div className="col-lg-2 col-12 text-light align-items-center">
              <i className='display-1 bi-currency-exchange bi-lg'></i>
            </div>
          </div>
        </div>
      </section>

      <section className="container overflow-hidden py-5">
        <div className="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 courses">

          {courses.map(course => (

            <CourseBox
              courseName = {course.course_name}
              courseOutline = {course.course_outline}
            />

          ))}

        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Courses
