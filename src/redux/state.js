import {rerenderTree} from '../render';
let state = {
  posts:[
    {id:1 , message: 'hello'},
    {id:2 , message: 'hahaha'},
  ]
}

export let addPost = (message) => {
  let newPost = {
    id:3,
    message:message
  };
  state.posts.push(newPost);
  rerenderTree(state);
}

export default state;
