import React from 'react';

let Posts = (props) => {
  let newMessage = React.createRef();
  let newArr = props.message.map((message) => {
    return (
        <div>{message.message}</div>
    )

  })
  let addPost = () => {
    let text = newMessage.current.value;
    props.addPost(text);
  }

  return(
    <div>
        <textarea ref={newMessage}></textarea>
        <button onClick={addPost}>send</button>
        <div>{newArr}</div>
    </div>

  )
}
export default Posts;
