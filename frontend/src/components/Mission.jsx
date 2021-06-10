import React from 'react';

function Mission() {
  return (
    <div>
      <section className="mission_wrapper py-3">
        <div className="container pb-3">
            <div className="row">
              <h2 className="text-center col-12 py-5 semi-bold-600">Our Mission</h2>
              <div className="mission_heading col-10 col-md-9 m-auto text-start float-end light-300">
                <h2 className="pb-4 typo-space-line"><i className='bi-shield-check mt-1'></i> Prepare for the future, now!</h2>
              </div>
            </div>
            <p className="mission_footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
              You are free to learn anything and gather as much knowledge as you want.
            </p>
            <p className="mission_footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
              Our mission is to spread knowledge as much as our capacity allows. Does not matter whoever, whenever and wherever it is being delivered or received.
            </p>
        </div>
      </section>
    </div>
  )
}

export default Mission
