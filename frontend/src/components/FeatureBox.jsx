import React from 'react';
import { NavLink } from "react-router-dom";
import bck from "../assets/img/workspace.jpg";

function FeatureBox({title, subtitle}) {
  return (
    <div className="col-md-4 mb-3">
      <NavLink to="/" exact className="features card border-0 shadow-lg overflow-hidden">
        <img className="features-img card-img" src={bck} alt="eventImage"/>
        <div className="features-vertical card-img-overlay d-flex align-items-end">
          <div className="features-content text-start mb-3 ml-3 text-dark">
            <h3 className="card-title light-300">{title}</h3>
            <p className="card-text">{subtitle}</p>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default FeatureBox
