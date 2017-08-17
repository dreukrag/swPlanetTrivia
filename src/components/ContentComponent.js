import React from 'react'
import { getPlanetsFromFilm } from '../utils/api';

export class ContentComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
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
                            <span>{this.props.selPlanet.population}</span>
                        </li>
                        <li>
                            <span>Dominant climate</span>
                            <span>{this.props.selPlanet.climate}</span>
                        </li>
                        <li>
                            <span>Dominant biomes</span>
                            <span>{this.props.selPlanet.terrain}</span>
                        </li>
                        <li>
                            <span># of movies</span>
                            <span>{this.props.selPlanet.films.length}</span>
                        </li>
                        <li>
                            <input type="text" value={this.inputPlanet} onChange={this.handleChange} />
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

    validateName = (event) => {
        event.preventDefault();
        console.log('answer', this.state.inputPlanet);
        console.log('correct', this.props.selPlanet.name);
        if (this.inputPlanet == this.props.selPlanet.name) {
            this.props.hit_func();
        } else {
            this.props.miss_func();
        }
        this.props.validateAnswer(this.inputPlanet)
        this.setState({
            inputPlanet:""
        })
    }
}