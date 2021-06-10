import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCourse, getSpecificCourses } from '../actions/courseActions';
import Alert from '../components/Alert';
import Spinner from '../components/Spinner';
import TeacherNavs from '../components/TeacherNavs';
import CourseForTeacher from '../components/CourseForTeacher';
import Footer from '../components/Footer';

function TeacherCourses() {

  const [coursename, setCourseName] = useState('')
  const [units, setUnits] = useState('')
  const [outline, setOutline] = useState('')

  const dispatch = useDispatch()

  const courseCreate = useSelector(state => state.courseCreate)
  const {loading, error, course} = courseCreate

  const specificCourseList = useSelector(state => state.specificCourseList)
  let {loading:scLoading, error:scError, spcfcourses} = specificCourseList
  spcfcourses = spcfcourses.reverse()

  const courseUpdate = useSelector(state => state.courseUpdate)
  const {loading:cuLoading, error:cuError, updatedCourse} = courseUpdate

  const courseDelete = useSelector(state => state.courseDelete)
  const {loading:dcLoading, error:dcError, courseDeleted} = courseDelete

  //console.log(spcfcourses)

  useEffect(() => {
    dispatch(getSpecificCourses())
  }, [dispatch, course, updatedCourse, courseDeleted])

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(createCourse(coursename, outline, units))
    setCourseName('')
    setUnits('')
    setOutline('')
  }

  return (
    <div>
      <section>
        <div id="page_banner2" className="banner-wrapper bg-light w-100 py-5">
          <TeacherNavs/>
          <div className="container text-light d-flex justify-content-center align-items-center py-5 p-0">
            <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
              {error && <Alert type='danger'>{error}</Alert>}
              {course && <Alert type='success'>Course added successfully</Alert>}
              <h1 className="banner-heading display-3 pb-5 semi-bold-600 typo-space-line-center">Manage Courses</h1>
              <div className="col-md-8 mx-auto my-5 text-center text-dark">
                <form className="contact_form row d-flex justify-content-center mx-0" onSubmit={submitHandler}>
                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg light-300" id="coursename" name="coursename" 
                      placeholder="Course name*" value={coursename} onChange={(event) => { setCourseName(event.target.value) }} required/>
                      <label for="coursename light-300">Course Name*</label>
                    </div>
                  </div>
                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="number" className="form-control form-control-lg light-300" id="units" name="units" 
                      placeholder="No. of Units*" value={units} onChange={(event) => { setUnits(event.target.value) }} required/>
                      <label for="units light-300">Units*</label>
                    </div>
                  </div>
                  <div className="col-10 col-lg-12 mb-4">
                    <div className="form-floating mb-4">
                      <input type="text" className="form-control form-control-lg light-300" id="outline" name="outline" 
                      placeholder="Course Outline*" value={outline} onChange={(event) => { setOutline(event.target.value) }} required/>
                      <label for="outline light-300">Outline*</label>
                    </div>
                  </div>
                  <div className="col-md-12 col-10 mx-auto my-3">
                    <button type="submit" className="btn btn-info btn-lg rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Save Course</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {scLoading ? (<Spinner/>) : spcfcourses == '' ? (

        <section className="bg-light text-center py-5 w-100 min__height">
          <h2>
            <i className="bi-exclamation-triangle text-danger mx-3" role="img"></i>
            You have not created any course!
          </h2>
        </section>

        ) : (

          <section className="bg-light py-2">
            <CourseForTeacher spcfcourses={spcfcourses}/>
          </section>

        )}
      
      <Footer/>
    </div>
  )
}

export default TeacherCourses
