import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import { createPost, homePost } from "../redux/post";
const jwt = require("jsonwebtoken");

const Profile = ({ post, create, user }) => {
  const [caption, setCaption] = useState("");
  const filteredPosts = post.filter((eachPost) => eachPost.userId === user.id);
  const token = window.localStorage.getItem("token")

  console.log('user', user)
  return (
    <div className="container-fluid gedf-wrapper">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
        <a href="/updateProfile">Update Profile</a>
        <br></br>
        <a href='/updateSecurity'> Change Security Settings</a>
          <br></br>
          <div className="card">
            <div className="card-header">
              <h3 className="card-text">
                <center>Social Media</center>
              </h3>
            </div>
            <div className="card-body">
              <li className="card-text">Instagram: @something</li>
              <li className="card-text">Instagram: @something</li>
              <li className="card-text">Instagram: @something</li>
            </div>
            <div className="card-footer"></div>
          </div>
          <br></br>
          <div className="card">
            <div className="card-header">
              <h3 className="card-text">
                <center>Introduction</center>
              </h3>
            </div>
            <div className="card-body">
              <li className="card-text">Birthday: MM/DD/YYYY</li>
              <li className="card-text">
                About Me: It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout.
              </li>
              <li className="card-text">Location: New York, NY</li>
            </div>
            <div className="card-footer"></div>
          </div>
          <br></br>
          <div className="card">
            <div className="card-header">
              <h3 className="card-text">
                <center>Photos</center>
              </h3>
            </div>
            <div className="card-body"></div>
            <div className="card-footer"></div>
          </div>
          <br></br>
          <div className="card">
            <div className="card-header">
              <h3 className="card-text">
                <center>Friends</center>
              </h3>
            </div>
            <div className="card-body"></div>
            <div className="card-footer"></div>
          </div>
        </div>
        <div className="col-md-4 gedf-main">
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              const options = {
                headers: {
                  Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },
              };
              create(caption, options);
            }}
          >
            <label>
              Create Post
              <textarea
                name="new_post"
                placeholder="What's on your mind?"
                rows="6"
                cols="53"
                style={{ resize: "none" }}
                onChange={(event) => setCaption(event.target.value)}
              ></textarea>
              <input className="btn-block" type="submit" value="Post" />
            </label>
          </form>
          {filteredPosts.map((option, i) => (
            <div className="card" key={i}>
              <div className="card-header">
                <p className="card-text">
                  {option.user.firstName + " " + option.user.lastName}
                </p>
              </div>
              <div className="card-body">
                <p className="card-text">{option.caption}</p>
              </div>
              <div className="card-footer">
                <a href="#" className="card-link">
                  <i className="fa fa-gittip"></i> Like
                </a>
                <a href="#" className="card-link">
                  <i className="fa fa-comment"></i> Comment
                </a>
                <a href="#" className="card-link">
                  <i className="fa fa-mail-forward"></i> Share
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
//connect to store
//grab posts from store
//map through props to display each post

const mapstate = ({ post, user }) => {
  return { post, user };
};

const mapDispatch = (dispatch) => ({
  create: (caption, options) => dispatch(createPost(caption, options)),
});

export default connect(mapstate, mapDispatch)(Profile);
