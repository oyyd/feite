import React, { Component } from 'react';
import Introduction from './introduction';
import HeaderMenu from './header-menu/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMenu />
        <Introduction />
      </div>
    );
  }
}

export default App;
