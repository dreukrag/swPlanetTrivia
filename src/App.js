import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent, ContentComponent, FooterComponent } from './components'
import { getPlanetsFromFilm } from './utils/api';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hits: 0,
      misses: 0,
      filmsList: [],
      selPlanet: {
        films: []
      },
      planetHistory: []
    }
  }

  componentDidMount = () => {
    getPlanetsFromFilm().then((rsp) => {
      this.setState({
        filmsList: rsp
      });
      this.pickRandomPlanet();
    });
  }

  pickRandomPlanet = () => {
    var n = Math.floor(this.state.filmsList.length * Math.random());

    if (this.state.planetHistory.length == this.state.filmsList.length){
      console.log('list has been fully played')
      return;
    }
    if (this.state.planetHistory.indexOf(n) > -1) {
      console.log('this planet has been picked already!')
      this.pickRandomPlanet();
      return;
    }

    this.setState({
      selPlanet: this.state.filmsList[n]
    });

    this.blacklistPlanet(n);
  }

  planetPicker = (n) =>{
    if(this.state.planetHistory.indexOf(n)>-1){
      return false;
    }
  }

  blacklistPlanet = (n) => {
    console.log('blacklisting planet: ', n)
    if (this.state.planetHistory.indexOf(n) > -1) {
      console.log('planet is already black listed!')
      return
    }
    this.setState({
      planetHistory: this.state.planetHistory.concat(n)
    })
    console.log(this.state.planetHistory);
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
        <ContentComponent hit_func={this.addHit} miss_func={this.addMiss} selPlanet={this.state.selPlanet} />
        <FooterComponent />
      </div>
    );
  }
  addHit = () => {
    this.setState({
      hits: this.state.hits + 1
    })
    this.pickRandomPlanet();
  }

  addMiss = () => {
    this.setState({
      misses: this.state.misses + 1
    })
    this.pickRandomPlanet();
  }
}

export default App;
