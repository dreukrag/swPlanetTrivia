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
                        <div>
                            <span className="text-left">Population</span>
                            <span className="text-right">{this.props.selPlanet.population}</span>
                        </div>
                        <div>
                            <span className="text-left">Dominant climate</span>
                            <span className="text-right">{this.props.selPlanet.climate}</span>
                        </div>
                        <div>
                            <span className="text-left">Dominant biomes</span>
                            <span className="text-right">{this.props.selPlanet.terrain}</span>
                        </div>
                        <div>
                            <span className="text-left"># of movies</span>
                            <span className="text-right">{this.props.selPlanet.films.length}</span>
                        </div>
                        <div>
                            <input className="ContentComponent__planetWidget-input" type="text" value={this.inputPlanet} onChange={this.handleChange} />
                        </div>
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
        if(!this.props.isPlaying){return}
        if (this.props.validateAnswer(this.inputPlanet)) {
            this.setState({
                inputPlanet: ""
            })
        }else{

        }
    }
}