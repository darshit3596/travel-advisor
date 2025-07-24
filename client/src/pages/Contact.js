import React from "react";
import logo from "../assets/group.jpg";

const Contact = () => {
  return (
    <div className="container mt-2">
      <h2 className="display-6">Contact</h2>
      <div className="row mb-3">
        <div className="col">
          <img
            src={logo}
            width="50%"
            alt="Team Procedural"
            className="rounded mx-auto d-block"
          />
        </div>
      </div>  

      <div className="row mb-3">
        <div className="col">
          <h2 className="display-6">Sapariya Darshit</h2>
          <a href={"https://www.linkedin.com/in/sapariya-darshit-47b7b1287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "} className="link-dark">
          darshit@gmail.com
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Dhanavate Prasad</h2>
          <a href={"P"} className="link-dark">
            Prasad@gmail.com
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Panchal Harsh</h2>
          <a href={"H"} className="link-dark">
            Harsh@gmail.com
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Mitul </h2>
          <a href={"M"} className="link-dark">
            Mitul@gmail.com
          </a>
        </div>
      
      </div>
    </div>
  );
};

export default Contact;
