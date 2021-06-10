import React from 'react';
import { NavLink } from "react-router-dom";

function QsnForTeacher({qsnID, qsnText, mark, option1, option2, option3, option4, answer}) {
  return (
    <div className="container py-5 text-center">

      <div className="row col-10 m-auto d-flex shadow rounded overflow-hidden bg-white">
        <div className="col-md-2 text-center bg-info text-light py-4">
          <h3 className="semi-bold-600 pb-4 light-300">#1 ({qsnID})</h3>
          <h5 className="semi-bold-600 pb-4 light-300">Mark: {mark}</h5>
        </div>
        <div className="col-md-7 d-flex align-items-center pl-5 pt-lg-0 pt-4 text-start">
          <ul className="text-left px-4 list-unstyled mb-0 light-300">
            <li><i className="bi-circle-fill me-2"></i>{qsnText}</li>
            <li>A) {option1}</li>
            <li>B) {option2}</li>
            <li>C) {option3}</li>
            <li>D) {option4}</li>
            <li className="text-success">Answer: {answer}</li>
          </ul>
        </div>
        <div className="col-md-3 text-end pt-3 d-flex align-items-center">
          <div className="w-100 light-300 d-flex d-md-block justify-content-between">
            <p><button type="button" className="btn rounded-pill px-4 btn-outline-primary mb-3" data-bs-toggle="modal" data-bs-target="#updateModal">Update</button></p>
            <p><NavLink to="/" exact className="btn rounded-pill px-4 btn-outline-warning">Delete</NavLink></p>
          </div>
        </div>
      </div>

      <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <form className="row mx-auto w-100" method="post" action="#">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Question - {qsnID}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <div className="mb-4">
                  <div className="form-floating">
                    <select className="form-select form-control form-control-lg light-300" id="coursename" name="coursename" aria-label="Default select">
                      <option selected>Select Course*</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="test light-300">Select Test*</label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-floating">
                    <input type="number" className="form-control form-control-lg light-300" id="mark" name="mark" placeholder="Total Mark*" required/>
                    <label for="mark light-300">Total Mark*</label>
                  </div>
                </div>
              
                <div className="mb-4">
                  <div className="form-floating">
                    <input type="text" className="form-control form-control-lg light-300" id="questionText" name="questionText" placeholder="Question Text*" required/>
                    <label for="questionText light-300">Question Text*</label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-floating">
                    <input type="text" className="form-control form-control-lg light-300" id="option1" name="option1" placeholder="Option 1*" required/>
                    <label for="option1 light-300">Option 1*</label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-floating">
                    <input type="text" className="form-control form-control-lg light-300" id="option2" name="option2" placeholder="Option 2*" required/>
                    <label for="option2 light-300">Option 2*</label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-floating">
                    <input type="text" className="form-control form-control-lg light-300" id="option3" name="option3" placeholder="Option 3*" required/>
                    <label for="option3 light-300">Option 3*</label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-floating">
                    <input type="text" className="form-control form-control-lg light-300" id="option2" name="option4" placeholder="Option 4*" required/>
                    <label for="option4 light-300">Option 4*</label>
                  </div>
                </div>

                <div className="cmb-4">
                  <div className="form-floating">
                    <select className="form-select form-control form-control-lg light-300" id="answer" name="answer" aria-label="Default select">
                      <option selected>Select Answer*</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 4</option>
                    </select>
                    <label for="answer light-300">Select Answer*</label>
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

export default QsnForTeacher
