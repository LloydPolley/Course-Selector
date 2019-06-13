import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//screen showing 
import { startSetCourses } from './actions/course';
import store from "./store/store";






ReactDOM.render(<p>Loading</p>, document.getElementById('root'));

store.dispatch(startSetCourses()).then(()=>{
    ReactDOM.render(<App />, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
