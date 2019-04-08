import React from 'react';

let DelPost = ({id , delPost}) => {
    // let link = React.createRef();
    //
    return(
        <button  onClick={() => {delPost(id)}}>x</button>
    )
}
export default DelPost;