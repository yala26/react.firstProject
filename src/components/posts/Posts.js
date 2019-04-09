import React from 'react';
import Add from './Add';
import DelPost from './Del';

let Posts = ({text , index , delNotes}) => {

        return(
                <li className="list-group-item">
                    <p className="list-group-item-text">{text}
                        <span
                            onClick={() => {
                                delNotes(index)
                            }}
                            className="glyphicon glyphicon-remove pull-right">
                        </span>
                    </p>
                </li>
        )
}
export default Posts;
