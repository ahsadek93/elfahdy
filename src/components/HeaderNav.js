import React, { Component } from "react";
import logo from "./../assets/logo.png";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


class HeaderNav extends Component {
  render() {
    return (
        <div className="container-fluid fixed-top bg-white">
          <div className="row">
            <div className="col-12">
              <nav className="navbar  navbar-expand-lg">
                <a className="navbar-brand col-4 col-md-2" href="#">
                  <img className="img-fluid" src={logo}></img>
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon text-primary"><FontAwesomeIcon icon={faBars} /></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-2">
                      <NavLink exact="true" activeClassName='active' className="nav-link text-dark" to="/">
                        Overview
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                      <NavLink activeClassName='active' className="nav-link text-dark" to="/Homework">
                        Homework
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                      <NavLink activeClassName='active' className="nav-link text-dark"  to="/Quizzes">
                        Quizzes
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link text-dark" href="#">
                        Online Courses
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link text-dark" href="#">
                        Online Sessions
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a
                        className="nav-link text-white btn bg-primary px-5 "
                        href="#"
                      >
                        Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          
        </div>
    );
  }
}

export default HeaderNav;
