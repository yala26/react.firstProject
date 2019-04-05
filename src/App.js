import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Posts from './components/posts.js';


let App = (props) => {
  return(
    <Posts message= {props.state.posts} addPost={props.addPost} />
  )
};

export default App;
