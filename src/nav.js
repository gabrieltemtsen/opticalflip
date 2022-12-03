import React from "react";
import classnames from "classnames";
// import pokeball from "./images/pokeball.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Nav = () => {

  return (
    <nav class="navbar navbar-light bg-light justify-content-between shadow p-3 mb-5 bg-white rounded">
    <a class="navbar-brand text-danger text-bold mx-5 fw-bold fst-italic">OpticalFlip</a>
     <a target="_blank" href="https://github.com/gabrieltemtsen"> <button class="btn btn-outline-dark mx-5 my-sm-0" >Developers</button></a>
  </nav>
  );
};


export default Nav;
