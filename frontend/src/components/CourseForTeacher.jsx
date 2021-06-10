import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse, deleteCourse } from '../actions/courseActions';
import { NavLink } from "react-router-dom";

function CourseForTeacher({spcfcourses}) {

  const [courseName, setCourseName] = useState('')
  const [courseOutline, setCourseOutline] = useState('')
  const [courseUnits, setCourseUnits] = useState('')
  const [courseId, setCourseId] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(updateCourse(courseName, courseOutline, courseUnits, courseId))
    setCourseName('')
    setCourseOutline('')
    setCourseUnits('')
    setCourseId('')
  }

  const handleDelete = (id) => {
    dispatch(deleteCourse(id))
  }

  return (
    <div className="container text-center">

      {spcfcourses.map(spcfcourse => (

          <div className="row col-10 m-auto d-flex shadow rounded overflow-hidden bg-light my-5" key={spcfcourse._id}>
            <div className="col-md-3 text-center bg-info text-light py-4">
              <i className="display-1 bi-journal-bookmark-fill"></i>
              <h5 className="semi-bold-600 pb-4 light-300">{spcfcourse.course_name}</h5>
            </div>
            <div className="col-md-6 d-flex align-items-center pl-5 pt-lg-0 pt-4 text-start">
              <ul className="text-left px-4 list-unstyled mb-0 light-300">
                <li><i className="bi-circle-fill me-2"></i>{spcfcourse.course_outline}</li>
                <li><i className="bi-circle-fill me-2"></i>Total Units: {spcfcourse.total_units}</li>
                <li><i className="bi-circle-fill me-2"></i>Students: {spcfcourse.total_students}</li>
              </ul>
            </div>
            <div className="col-md-3 text-end pt-3 d-flex align-items-center">
              <div className="w-100 light-300 d-flex d-md-block justify-content-between">
                <p><button type="button" className="btn rounded-pill px-4 btn-outline-primary mb-3" data-bs-toggle="modal" data-bs-target="#updateModal" 
                onClick={() => { setCourseName(spcfcourse.course_name)
                                 setCourseOutline(spcfcourse.course_outline) 
                                 setCourseUnits(spcfcourse.total_units)
                                 setCourseId(spcfcourse._id)
                }}>Update</button></p>
                <p><button onClick={() => { handleDelete(spcfcourse._id) }} exact className="btn rounded-pill px-4 btn-outline-warning">Delete</button></p>
              </div>
            </div>
          </div>

        ))}

      <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <form className="row mx-auto w-100" onSubmit={submitHandler}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Course - {courseName}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              
                <div className="mb-4">
                  <div className="form-floating">
                    <input type="text" className="form-control form-control-lg light-300" 
                    placeholder="Course name*" value={courseName} onChange={(event) => { setCourseName(event.target.value)}} required/>
                    <label for="coursename light-300">Course Name*</label>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-floating">
                    <input type="number" className="form-control form-control-lg light-300"
                    placeholder="No. of Units*" value={courseUnits} onChange={(event) => { setCourseUnits(event.target.value)}} required/>
                    <label for="units light-300">Units*</label>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-floating mb-4">
                    <input type="text" className="form-control form-control-lg light-300"
                    placeholder="Course Outline*" value={courseOutline} onChange={(event) => { setCourseOutline(event.target.value)}} required/>
                    <label for="outline light-300">Outline*</label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-info btn-lg rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Save Changes</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default CourseForTeacher
