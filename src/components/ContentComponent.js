import React from 'react'
import { getPlanetsFromFilm, getPlanet } from '../utils/api';

export class ContentComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filmsList: [],
            selPlanet: {
                films:[]
            },
            inputPlanet: ''
        }
    }

    render = () => (
        <div className="ContentComponent__container">
            <div className="ContentComponent__planetWidget">
                <form action="" onSubmit={this.validateName}>
                    <ul>
                        <li>
                            <span>Population</span>
                            <span>{this.state.selPlanet.population}</span>
                        </li>
                        <li>
                            <span>Dominant climate</span>
                            <span>{this.state.selPlanet.climate}</span>
                        </li>
                        <li>
                            <span>Dominant biomes</span>
                            <span>{this.state.selPlanet.terrain}</span>
                        </li>
                        <li>
                            <span># of movies</span>
                            <span>{this.state.selPlanet.films.length}</span>
                        </li>
                        <li>
                            <input type="text" value={this.inputName} onChange={this.handleChange} />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )

    handleChange = (event) => {
        this.setState({
            inputPlanet: event.target.value
        })
    }

    componentDidMount = () => {
        getPlanetsFromFilm().then((rsp) => {
            this.setState({
                filmsList: rsp
            });
            console.log(this.state.filmsList);
            console.log(this.state.selPlanet)
            this.setState({
                selPlanet: this.pickRandomPlanet()
            })
            console.log(this.state.selPlanet)

        });
    }

    pickRandomPlanet = () => {
        return this.state.filmsList[Math.round(this.state.filmsList.length * Math.random())]
    }

    validateName = () => {
        if (this.inputPlanet == this.state.selPlanet.name) {
            this.props.hit_func;
        } else {
            this.props.miss_func;
        }
    }
}