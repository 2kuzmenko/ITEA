import React, { Component } from 'react';
import './App.css';
import { RouterPage } from './RouterPage';
import Artists from "./Root";
import Root from './Root';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <RouterPage></RouterPage> */}
        <Root/>
      </div>
    );
  }
}

export default App;
