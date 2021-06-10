import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { register } from '../actions/teacherActions';
//import Spinner from '../components/Spinner';
import Alert from '../components/Alert';
import Footer from '../components/Footer';

function TeacherRegister({history}) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [avatar, setAvatar] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const teacherRegister = useSelector(state => state.teacherRegister)
  const {loading, error, teacherInfo} = teacherRegister

  useEffect(() => {
    if(teacherInfo) {
      history.push('/teacher_dashboard')
    }
  }, [history, teacherInfo])

  const submitHandler = (event) => {
    event.preventDefault()
    if(password !== confirmPassword) {
      alert('Passwords do not match')
    }
    else {
      dispatch(register(name, email, password, phone, address, avatar))
    }
  }

  return (
    <div>
      <section>
        <div id="page_banner2" className="banner-wrapper bg-light w-100 py-5">
          <div className="container text-light d-flex justify-content-center align-items-center py-5 p-0">
            <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
            {error && <Alert type='danger'>{error}</Alert>}
              <h1 className="banner-heading display-3 pb-5 semi-bold-600 typo-space-line-center">Teacher Registration</h1>
              <div className="col-10 col-md-10 mx-auto my-5 text-dark">
                <form className="contact_form row" onSubmit={submitHandler}>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg light-300" id="name" name="name" 
                      placeholder="Your Name*" value={name} onChange={(event) => { setName(event.target.value) }} required/>
                      <label for="name light-300">Your Name*</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control form-control-lg light-300" id="email" name="email" 
                      placeholder="Your Email*" value={email} onChange={(event) => { setEmail(event.target.value) }} required/>
                      <label for="email light-300">Your Email*</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="number" className="form-control form-control-lg light-300" id="phone" name="phone" 
                      placeholder="Your Phone*" value={phone} onChange={(event) => { setPhone(event.target.value) }} required/>
                      <label for="phone light-300">Your Phone*</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="file" className="form-control form-control-lg light-300" id="avatar" name="avatar" 
                      placeholder="Your avatar" value={avatar} onChange={(event) => { setAvatar(event.target.value) }}/>
                      <label for="address light-300">Avatar</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <input type="text" className="form-control form-control-lg light-300" id="address" name="address" 
                      placeholder="address*" value={address} onChange={(event) => { setAddress(event.target.value) }} required/>
                      <label for="subject light-300">Your Address*</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="password" className="form-control form-control-lg light-300" id="password1" name="password1" 
                      placeholder="Your Password*" value={password} onChange={(event) => { setPassword(event.target.value) }} required/>
                      <label for="password1 light-300">Password*</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="password" className="form-control form-control-lg light-300" id="password2" name="password2" 
                      placeholder="Confirm Password*" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} required/>
                      <label for="password2 light-300">Confirm Password*</label>
                    </div>
                  </div>
                  <div className="col-md-12 col-12 mx-auto my-3">
                    <button type="submit" className="btn btn-info btn-lg rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Register</button>
                  </div>
                </form>
              </div>
              <div className="col-10 col-md-8 mx-auto my-5 d-flex justify-content-around">
                <NavLink to="/teacher_login" exact>
                  <button type="button" className="btn rounded-pill btn-light px-4">Teacher Login</button>
                </NavLink>
                <NavLink to="/student_login" exact>
                  <button type="button" className="btn rounded-pill btn-outline-info px-4">Student Login</button>
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

export default TeacherRegister
