import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import { createPost, homePost } from "../redux/post";

const Home = (props) => {
  const [caption, setCaption] = useState("");

  return props.post.length > 0 ? (
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
              props.create(caption);
            }}
          >
            <label>
              Create Post
              <textarea
                name="new_post"
                placeholder="What's on your mind?"
                rows="6"
                cols="83"
                onChange={(event) => setCaption(event.target.value)}
              ></textarea>
            </label>
            <input type="submit" value="Submit" />
          </form>
          {props.post.map((option, i) => (
            <div className="card" key={i}>
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
  ) : (
    <h1> No Post! </h1>
  );
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
