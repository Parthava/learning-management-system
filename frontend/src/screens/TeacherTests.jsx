import React from 'react';
import TeacherTabs from '../components/TeacherTabs';
import TestForTeacher from '../components/TestForTeacher';
import Footer from '../components/Footer';

function TeacherTests() {
  return (
    <div>
      <section>
        <div id="page_banner2" className="banner-wrapper bg-light w-100 py-5">
          <TeacherTabs/>
          <div className="container text-light d-flex justify-content-center align-items-center py-5 p-0">
            <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
              <h1 className="banner-heading display-3 pb-5 semi-bold-600 typo-space-line-center">Manage Tests</h1>
              <div className="col-md-8 mx-auto my-5 text-center text-dark">
                <form className="contact_form row d-flex justify-content-center mx-0" method="post" action="#">
                  <div className="col-10 col-lg-12 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg light-300" id="testname" name="testname" placeholder="Test name*" required/>
                      <label for="testname light-300">Test Name*</label>
                    </div>
                  </div>

                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <select className="form-select form-control form-control-lg light-300" id="coursename" name="coursename" aria-label="Default select">
                        <option selected>Select Course*</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <label for="coursename light-300">Select Course*</label>
                    </div>
                  </div>
                  
                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="number" className="form-control form-control-lg light-300" id="questions" name="questions" placeholder="No. of Questions*" required/>
                      <label for="questions light-300">Questions*</label>
                    </div>
                  </div>

                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="number" className="form-control form-control-lg light-300" id="marks" name="marks" placeholder="Total Marks*" required/>
                      <label for="marks light-300">Total Marks*</label>
                    </div>
                  </div>

                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="number" className="form-control form-control-lg light-300" id="time" name="time" placeholder="Time in mins*" required/>
                      <label for="time light-300">Time in Mins*</label>
                    </div>
                  </div>
                  
                  <div className="col-md-12 col-10 mx-auto my-3">
                    <button type="submit" className="btn btn-info btn-lg rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Save Test</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light pt-sm-0 py-5">
        
      <TestForTeacher
          testID = "2"
          testName = "Unit Test - 2"
          questions = "50"
          marks = "50"
          time = "60"
          courseName = "First Course Name"
        />
        <TestForTeacher
          testID = "1"
          testName = "Unit Test - 1"
          questions = "50"
          marks = "50"
          time = "60"
          courseName = "First Course Name"
        />

      </section>
      <Footer/>
    </div>
  )
}

export default TeacherTests
