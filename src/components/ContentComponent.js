import React from 'react'

import {LoadingWidget, StarsWidget} from '.'

export class ContentComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputPlanet: ''
        }
    }

    glowClass = '';

    render = () => (
        <div className="ContentComponent__container">
            <div className={"ContentComponent__planetWidget " + this.glowClass + " " + this.props.isPlaying}>
                <form className="ContentComponent__form" action="" onSubmit={this.submitAnswer}>
                    <div>
                        <span className="text-left label">Population</span>
                        <span className="text-right labelAnswer">{this.props.selPlanet.population}</span>
                    </div>
                    <div>
                        <span className="text-left label">Climate</span>
                        <span className="text-right labelAnswer">{this.props.selPlanet.climate}</span>
                    </div>
                    <div>
                        <span className="text-left label">Biomes</span>
                        <span className="text-right labelAnswer">{this.props.selPlanet.terrain}</span>
                    </div>
                    <div>
                        <span className="text-left label">Movies</span>
                        <span className="text-right labelAnswer">{this.props.selPlanet.films.length}</span>
                    </div>
                    <div>
                        <input className="ContentComponent__planetWidget-input" type="text" value={this.inputPlanet} onChange={this.handleChange} />
                    </div>
                </form>
            </div>
            <LoadingWidget loadingVar={this.props.isLoading}/>
            <StarsWidget />
        </div>
    )

    handleChange = (event) => {
        this.setState({
            inputPlanet: event.target.value
        })
    }

    applyGlow = (a) => {
        this.glowClass = '';
        if (a)      { this.glowClass = 'answerGlow-correct'; }
        else if(!a) { this.glowClass = 'answerGlow-incorrect'; }
        else        { this.glowClass = '';}
    }

    submitAnswer = (event) => {
        event.preventDefault();
        if (!this.props.isPlaying) { return }
        if (this.props.validateAnswer(this.inputPlanet)) {
            this.setState({ inputPlanet: '' })
            this.applyGlow(true);
        } else {
            this.applyGlow(false);            
        }
    }
}