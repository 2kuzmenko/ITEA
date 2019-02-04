import React, { Component } from 'react';
import './App.css';
import { RouterPage } from './Components/RouterPage';
import Root from './Components/Root';

class App extends Component {
  render() {
    return (
      <div>
        {/* <RouterPage></RouterPage> */}
        <Root/>
      </div>
    );
  }
}

export default App;
