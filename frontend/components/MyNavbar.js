import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const MyNavBar = (props) => {
  return window.localStorage.getItem("token") != null ? (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/Home">
        Travelgram
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Profile">
              Profile
            </Link>
          </li>
          {window.localStorage.getItem("token") != null ? (
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  window.localStorage.removeItem("token");
                  window.location = "/";
                }}
              >
                Log Out
              </Link>
            </li>
          ) : null}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  ) : null;
};
export default MyNavBar;
