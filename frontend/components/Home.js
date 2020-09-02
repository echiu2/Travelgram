import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import { createPost, homePost } from "../redux/post";

const Home = ({ post, create }) => {
  const [caption, setCaption] = useState("");

  return (
    <div className="container-fluid gedf-wrapper">
      <h1>
        <center>Newsfeed</center>
      </h1>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 gedf-main">
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              create(caption);
            }}
          >
            <label>
              Create Post
              <textarea
                name="new_post"
                placeholder="What's on your mind?"
                rows="6"
                cols="83"
                style={{ resize: "none" }}
                onChange={(event) => setCaption(event.target.value)}
              ></textarea>
              <input className="btn-block" type="submit" value="Post" />
            </label>
          </form>
          {post.map((eachPost, idx) => (
            <div className="card" key={idx}>
              <div className="card-header">
                <p className="card-text">
                  {eachPost.user.firstName + " " + eachPost.user.lastName}
                </p>
              </div>
              <div className="card-body">
                <p className="card-text">{eachPost.caption}</p>
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
  )
};
//connect to store
//grab posts from store
//map through props to display each post

const mapstate = ({ post }) => ({
  post,
});

const mapDispatch = (dispatch) => ({
  create: (caption) => dispatch(createPost(caption)),
});

export default connect(mapstate, mapDispatch)(Home);
