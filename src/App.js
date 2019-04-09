import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Posts from './components/posts/Posts.js';
import state, {addPost} from './redux/state';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state =
        {
            arr:[],
            text:"",
            sort:"no sort",
            filter:""
        }
    }

    getText = (e) =>{
        this.setState({text: e.target.value});
    }

    addNotes = () => {
        let arrCopy = [...this.state.arr];
        let obj = {
            text:this.state.text,
            id:this.state.arr.length
        }
        arrCopy.push(obj);
        this.setState({arr:arrCopy});
        this.setState({text:''});
    }

    delNotes = (id) =>{
        let arrCopy = [...this.state.arr];
        arrCopy = arrCopy.filter((item) => item.id != id );
        this.setState({arr:arrCopy});
    }

    sortNotes = (e) =>{
        this.setState({sort:e.target.value});
    }

    filterNotes = (e) => {
        this.setState({filter:e.target.value});

    }

    render(){
        let arrCopy = [...this.state.arr];
        if( this.state.sort == 'down'){
            arrCopy.sort((a , b)=>{
                if(a.text > b.text){
                    return -1;
                }else{
                    return 1;
                }
            })
        }else if(this.state.sort == 'up'){
            arrCopy.sort((a , b)=>{
                if(a.text > b.text){
                    return 1;
                }else{
                    return -1;
                }
            })
        }
        
        arrCopy = arrCopy.filter( item => {
            return item.text.toLowerCase().indexOf(this.state.filter.toLowerCase()) == 0;
        });

        let items = arrCopy.map((elem , index) => {
            return(
                <Posts text={elem.text} key={elem.id} index={elem.id} delNotes={this.delNotes}/>
            )
        })

        return(
           <ul className="list-group">
               <li>
                   <div className="form-group">
                       <select className="form-control" onChange={this.sortNotes}>
                           <option value="no sort">no sort</option>
                           <option value="up">a-z</option>
                           <option value="down">z-a</option>
                       </select>
                       <input type="text" className="form-control" onChange={(e)=>{this.filterNotes(e)}}	/>
                   </div>
               </li>
               {items}
               <li>
                   <div className="input-group">
                       <input
                           value={this.state.text}
                           className="form-control" type="text"
                           placeholder="Enter note text"
                           onChange={this.getText}
                       />
                       <span className="input-group-btn">
                           <button className="btn btn-success" onClick={this.addNotes}>send</button>
                       </span>
                   </div>
               </li>

           </ul>
        )
    }

}

export default App;
