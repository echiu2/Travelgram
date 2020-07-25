import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

const Home = ({post}) => {
  // console.log('post', post)
  // const [caption, setCaption] = useState(`${post.caption}`);
  console.log('post', post)
  return post.length > 0 ?(
    <div>
        <h1>Home Page!</h1>
        {post.map((option) => (
          <p>{option.caption}</p>
        ))}
    </div>
  ) : <h1> No Post! </h1>
}
//connect to store
//grab posts from store
//map through props to display each post

const mapstate = ({ post }) => ({
  post,
});

export default connect(mapstate, null)(Home);
