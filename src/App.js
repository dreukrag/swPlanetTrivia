import React, { Component } from 'react';
import font1 from './fonts/Starjedi.ttf';
import font2 from './fonts/Starjhol.ttf';
import './App.css';
import './css/main.css';
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
        population: 'default value',
        climate:'default value',
        terrain:'default value',
        films:{
            length:0
        }
      },
      planetHistory: [],
      isPlaying:false,
      loaded:false      
    }
  }

  componentDidMount = () => {
    getPlanetsFromFilm().then((rsp) => {
      this.setState({
        filmsList: rsp
      });
      this.pickRandomPlanet();
      this.setState({
        loaded:true
      })
    });
  }

  pickRandomPlanet = () => {
    var n = Math.floor(this.state.filmsList.length * Math.random());
    if (this.state.planetHistory.length == this.state.filmsList.length) {
      console.log('list has been fully played')
      // console.log(this.state.planetHistory);    
      this.setState({ isPlaying:false }); return;
    }
    if (this.state.planetHistory.indexOf(n) > -1) {this.pickRandomPlanet();return;}
    this.setState({ selPlanet: this.state.filmsList[n] });
    this.blacklistPlanet(n);
  }

  blacklistPlanet = (n) => {
    if (this.state.planetHistory.indexOf(n) > -1) { console.log('planet is already black listed!'); return; }
    this.setState({ planetHistory: this.state.planetHistory.concat(n) })
    // console.log(this.state.planetHistory);
  }

  render() {
    return (
      <div className="App">
        <style dangerouslySetInnerHTML={{
          __html: [
            "@font-face{font-family:'star-wars1'; src:url('"+font1+"');}"
          ]
        }}>
        </style>
        <style dangerouslySetInnerHTML={{
          __html: [
            "@font-face{font-family:'star-wars2'; src:url('"+font2+"');}"
          ]
        }}>
        </style>
        <HeaderComponent hits={this.state.hits} misses={this.state.misses} />
        <ContentComponent validateAnswer={this.validateAnswer} selPlanet={this.state.selPlanet} isPlaying={this.state.isPlaying} isLoading={this.state.loaded}/>
        <FooterComponent />
      </div>
    );
  }
  addHit = () => {
    this.setState({ hits: this.state.hits + 1 })
    this.pickRandomPlanet();
  }

  addMiss = () => {
    this.setState({ misses: this.state.misses + 1 })
    this.pickRandomPlanet();
  }

  validateAnswer = (a) => {
    if(!this.state.isPlaying){return}
    if (a == this.state.selPlanet.name) {
      this.addHit();
    } else {
      this.addMiss();
    }
  }
}

export default App;
