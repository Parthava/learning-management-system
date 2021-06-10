import React from 'react';
import TeacherTabs from '../components/TeacherTabs';
import QsnForTeacher from '../components/QsnForTeacher';
import Footer from '../components/Footer';

function AddQuestion() {
  return (
    <div>
      <section>
        <div id="page_banner2" className="banner-wrapper bg-light w-100 py-5">
          <TeacherTabs/>
          <div className="container text-light d-flex justify-content-center align-items-center py-5 p-0">
            <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
              <h1 className="banner-heading display-3 pb-5 semi-bold-600 typo-space-line-center">Add Question</h1>
              <div className="col-md-8 mx-auto my-5 text-center text-dark">
                <form className="contact_form row d-flex justify-content-center mx-0" method="post" action="#">

                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <select class="form-select form-control form-control-lg light-300" id="coursename" name="coursename" aria-label="Default select">
                        <option selected>Select Course*</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <label for="test light-300">Select Test*</label>
                    </div>
                  </div>

                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="number" className="form-control form-control-lg light-300" id="mark" name="mark" placeholder="Total Mark*" required/>
                      <label for="mark light-300">Total Mark*</label>
                    </div>
                  </div>

                  <div className="col-10 col-lg-12 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg light-300" id="questionText" name="questionText" placeholder="Question Text*" required/>
                      <label for="questionText light-300">Question Text*</label>
                    </div>
                  </div>
                  
                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg light-300" id="option1" name="option1" placeholder="Option 1*" required/>
                      <label for="option1 light-300">Option 1*</label>
                    </div>
                  </div>

                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg light-300" id="option2" name="option2" placeholder="Option 2*" required/>
                      <label for="option2 light-300">Option 2*</label>
                    </div>
                  </div>

                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg light-300" id="option3" name="option3" placeholder="Option 3*" required/>
                      <label for="option3 light-300">Option 3*</label>
                    </div>
                  </div>

                  <div className="col-10 col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg light-300" id="option2" name="option4" placeholder="Option 4*" required/>
                      <label for="option4 light-300">Option 4*</label>
                    </div>
                  </div>

                  <div className="col-10 col-lg-12 mb-4">
                    <div className="form-floating">
                      <select class="form-select form-control form-control-lg light-300" id="answer" name="answer" aria-label="Default select">
                        <option selected>Select Answer*</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                      </select>
                      <label for="answer light-300">Select Answer*</label>
                    </div>
                  </div>
                  
                  <div className="col-md-12 col-10 mx-auto my-3">
                    <button type="submit" className="btn btn-info btn-lg rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Save Question</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light pt-sm-0 py-5">
        
        <QsnForTeacher
          qsnID = "2"
          qsnText = "What is a question?"
          mark = "1"
          option1 = "Option 1"
          option2 = "Option 2"
          option3 = "Option 3"
          option4 = "Option 4"
          answer = "Option3"
        />
        <QsnForTeacher
          qsnID = "1"
          qsnText = "What is a question?"
          mark = "1"
          option1 = "Option 1"
          option2 = "Option 2"
          option3 = "Option 3"
          option4 = "Option 4"
          answer = "Option2"
        />

      </section>
      <Footer/>
    </div>
  )
}

export default AddQuestion
