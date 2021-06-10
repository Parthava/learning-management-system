import React from 'react';
import Footer from '../components/Footer';
import banner from "../assets/img/banner-img-01.svg";

function About() {
  return (
    <div>
      <section className="bg-light">
        <div className="container py-4">
          <div className="row align-items-center justify-content-between">
            <div className="contact-header col-lg-4">
                <h1 className="pb-3 text-primary typo-space-line">Contact Us!</h1>
                <h3 className="mt-3 regular-400">We are happy to hear you!</h3>
                <p className="light-300">
                  If you have any query or suggestions for us, please feel free to reach out. We'll get back to you as soon as possible.
                </p>
                <p className="text-muted">
                  Vector illustration credit goes to <a rel="noreferrer" href="https://storyset.com/" target="_blank">StorySet</a>.
                </p>
            </div>
            <div className="contact-img col-lg-5 align-items-end col-md-4">
              <figure className="td_figure">
                <img src={banner} alt="banner" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <h1 className="col-12 col-xl-8 h2 text-left text-primary pt-3">Create your success story with us!</h1>
        <h2 className="col-12 col-xl-8 h4 text-left regular-400">It's never too late to start</h2>
        <p className="col-12 col-xl-8 text-left text-muted pb-5 light-300">
          We are here to help you.
        </p>
        <div className="row pb-4">
          <div className="col-lg-4">
            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="py-3 mb-2 text-center border rounded text-info">
                  <i className="display-6 bi-person-square"></i>
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9  light-300">
                <li className="h5 mb-0">Center Head</li>
                <li className="text-muted">email@address.com</li>
                <li className="text-muted">010-020-0340</li>
              </ul>
            </div>
            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="border py-3 mb-2 text-center border rounded text-info">
                  <i className="display-6 bi-headset"></i>
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                <li className="h5 mb-0">Front Desk</li>
                <li className="text-muted">email@address.com</li>
                <li className="text-muted">010-020-0340</li>
              </ul>
            </div>
            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="border py-3 mb-2 text-center border rounded text-info">
                  <i className="display-6 bi-pin-map"></i>
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                <li className="h5 mb-0">Address</li>
                <li className="text-muted">Assam</li>
                <li className="text-muted">India</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 ">
            <form className="contact_form row" method="post" action="#">
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-lg light-300" id="name" name="name" placeholder="Your Name*" required/>
                  <label for="name light-300">Your Name*</label>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-lg light-300" id="email" name="email" placeholder="Your Email*" required/>
                  <label for="email light-300">Your Email*</label>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-lg light-300" id="phone" name="phone" placeholder="Your Phone*" required/>
                  <label for="phone light-300">Your Phone*</label>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input type="text" className="form-control form-control-lg light-300" id="address" name="address" placeholder="Your Address"/>
                  <label for="address light-300">Your Address</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-4">
                  <input type="text" className="form-control form-control-lg light-300" id="subject" name="subject" placeholder="Subject*" required/>
                  <label for="subject light-300">Subject*</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <textarea className="form-control light-300" rows="8" id="message" name="message" placeholder="Your Message*"></textarea>
                  <label for="message light-300">Your Message*</label>
                </div>
              </div>
              <div className="col-md-12 col-12 m-auto text-end">
                <button type="submit" className="btn btn-info rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About
