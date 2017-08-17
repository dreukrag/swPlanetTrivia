import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent, ContentComponent, FooterComponent } from './components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hits: 0,
      misses: 0
    }
  }
  render() {
    return (
      <div className="App">
        <style>

        </style>
        <style dangerouslySetInnerHTML={{
          __html: [
            "@font-face{font-family:'star-wars'; src:url('src/fonts/Strjmono.ttf');}"
          ]
        }}>
        </style>
        <HeaderComponent hits={this.state.hits} misses={this.state.misses} />
        <ContentComponent hit_func={this.addHit} miss_func={this.addMiss} />
        <FooterComponent />
      </div>
    );
  }
  addHit = () => {
    this.setState({
      hits: this.state.hits + 1
    })
  }

  addMiss = () => {
    this.setState({
      misses: this.state.misses + 1
    })
  }
}

export default App;
