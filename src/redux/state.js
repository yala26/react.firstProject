import {rerenderTree} from '../render';
let state = {
  posts:[
    {id:0 , message: 'hello'},
    {id:1 , message: 'hahaha'},
  ]
}

export let del = (id) => {
  for(let i = 0; i < state.posts.length; i++){
    if(state.posts[i].id == id){
        state.posts.splice(i , 1);
        console.log( state.posts)
        break;
    }
  }
    rerenderTree(state);
}

export let addPost = (message) => {
  let i = state.posts.length;
  let newPost = {
    id:i,
    message:message
  };
  state.posts.push(newPost);
  rerenderTree(state);
}

export default state;
