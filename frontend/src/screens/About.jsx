import React from 'react';
import Footer from '../components/Footer';
import banner from "../assets/img/banner-img-02.svg";

function About() {
  return (
    <div>
      <section className="bg-light w-100">
        <div className="container">
          <div className="row d-flex align-items-center py-5">
            <div className="col-lg-6 text-start">
              <h1 className="py-5 text-primary typo-space-line">About Us</h1>
              <p className="light-300">
                We are one of best in the idustry to provide updated learning metarials. We are constantly trying our best 
                to master the ample technologies to make you market ready as well as to keep us future-ready.
              </p>
              <p className="text-muted">
                Vector illustration credit goes to <a rel="noreferrer" href="http://freepik.com/" target="_blank">FreePik</a> website.
              </p>
            </div>
            <div className="col-lg-6">
              <figure className="td_figure">
                <img src={banner} alt="banner"/>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About
