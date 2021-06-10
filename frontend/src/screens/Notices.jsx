import React from 'react';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';
import banner from "../assets/img/lists.svg";
import bck from "../assets/img/workspace.jpg";

function About() {
  return (
    <div>
      <section className="bg-light w-100">
        <div className="container">
          <div className="row d-flex align-items-center py-5">
            <div className="col-lg-6">
              <figure className="td_figure">
                <img src={banner} alt="banner"/>
              </figure>
            </div>
            <div className="col-lg-6 text-start">
              <h1 className="py-5 text-primary typo-space-line">Events and Notices</h1>
              <p className="light-300">
                Keep youself updated. Check out and try to join our various events, seminars, webinars and workshops regularly.
              </p>
              <p className="text-muted">
                Vector illustration credit goes to <a rel="noreferrer" href="http://freepik.com/" target="_blank">FreePik</a> website.
              </p>
            </div>
          </div>
        </div>
      </section>
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
              <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">Upcoming Events</h2>
            </div>
            <div className="row gy-5 g-lg-5 mb-4">
              <div className="col-md-4 mb-3">
                <NavLink to="/" exact className="features card border-0 shadow-lg overflow-hidden">
                  <img className="features-img card-img" src={bck} alt="eventImage"/>
                  <div className="features-vertical card-img-overlay d-flex align-items-end">
                    <div className="features-content text-start mb-3 ml-3 text-dark">
                      <h3 className="card-title light-300">Office Automation</h3>
                      <p className="card-text">MS Office Package, Libre Office, Tally ERP9</p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-4 mb-3">
                <NavLink to="/" exact className="features card border-0 shadow-lg overflow-hidden">
                  <img className="features-img card-img" src={bck} alt="eventImage"/>
                  <div className="features-vertical card-img-overlay d-flex align-items-end">
                    <div className="features-content text-start mb-3 ml-3 text-dark">
                      <h3 className="card-title light-300">Web Development</h3>
                      <p className="card-text">Designing, Frontend, Backend, Fullstack</p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-4 mb-3">
                <NavLink to="/" exact className="features card border-0 shadow-lg overflow-hidden">
                  <img className="features-img card-img" src={bck} alt="eventImage"/>
                  <div className="features-vertical card-img-overlay d-flex align-items-end">
                    <div className="features-content text-start mb-3 ml-3 text-dark">
                      <h3 className="card-title light-300">Networking</h3>
                      <p className="card-text">TCP IP, OSI Model, Routing, Topologies</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About
