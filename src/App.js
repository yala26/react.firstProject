import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Posts from './components/posts/Posts.js';
import state, {addPost} from './redux/state';


let App = (props) => {

  return(
      <div>
        <Posts message= {props.state.posts} addPost={props.addPost} delPost={props.delPost} />
      </div>


  )
};

export default App;
