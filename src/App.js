import React, { Component } from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import {Provider} from 'react-redux';

import store from './store/store';

import { database } from './firebase/firebase';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    );
  }
}

console.log(database);
database.ref().push({
  age: 10
})

export default App;
