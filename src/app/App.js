import React, { Component } from 'react';
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { store } from "./store.js";
import './../stylesheets/common.css';
import Home from '../views/home/home'

class App extends Component {
  render() {
      return (
          <Provider store={store}>
            <div>
              <Router>
                <div>
                  <Route exact path="/" component={Home}/>
                </div>
              </Router>
            </div>
          </Provider>
      );
  }
}

export default App;
