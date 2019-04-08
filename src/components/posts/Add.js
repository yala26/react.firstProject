import React from 'react';

let Add = ({addPost}) => {
    let newPost = React.createRef();
    let addMessage = () =>{
        let text = newPost.current.value;
        newPost.current.value = '';
        return text;
    }
    return(
        <div>
            <input  ref={newPost} />
            <button onClick={
                () => addPost(addMessage())
            }>send</button>
        </div>

    )
}

export default Add;