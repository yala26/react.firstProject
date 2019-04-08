import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redux/state';
import {del} from './redux/state';

export let rerenderTree = (state) => {
  ReactDOM.render(<App state={state} addPost={addPost} delPost={del}/>, document.getElementById('root'));
}
