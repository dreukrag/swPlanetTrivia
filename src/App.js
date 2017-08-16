import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HeaderComponent, ContentComponent, FooterComponent}  from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
