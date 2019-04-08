import React from 'react';
import Add from './Add';
import DelPost from './Del';

let Posts = ({message ,addPost ,delPost}) => {
    let newArr = message.map(elem => {
        return(
            <div>{elem.message}<DelPost id={elem.id} delPost={delPost}/></div>
        )
    })

    return(
        <div>
            <div>{newArr}</div>
            <Add addPost={addPost}/>

        </div>
    )
}
export default Posts;
