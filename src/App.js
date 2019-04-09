import React, { Component } from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";

import store from "./store/store";

import "./firebase/firebase";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}


export default App;
