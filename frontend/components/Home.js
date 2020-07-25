import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Home = ({ post }) => {
  // console.log('post', post)
  // const [caption, setCaption] = useState(`${post.caption}`);
  console.log("post", post);
  return post.length > 0 ? (
    <div class="container-fluid gedf-wrapper">
      <h1>
        <center>Newsfeed</center>
      </h1>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 gedf-main">
          {post.map((option) => (
            <div class="card">
              <div class="card-body">
                <p class="card-text">{option.caption}</p>
              </div>
              <div class="card-footer">
                <a href="#" class="card-link">
                  <i class="fa fa-gittip"></i> Like
                </a>
                <a href="#" class="card-link">
                  <i class="fa fa-comment"></i> Comment
                </a>
                <a href="#" class="card-link">
                  <i class="fa fa-mail-forward"></i> Share
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

export default connect(mapstate, null)(Home);
{
  /* <h1>Home Page!</h1>
{post.map((option) => (
  <h1>{option.caption}</h1>
))} */
}
