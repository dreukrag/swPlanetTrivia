import React from 'react'

export class HeaderComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hits: 0,
            misses: 0
        }
    }

    addHit = () =>{
        this.setState({
            hits:this.state.hits + 1
        })
    }

    addMiss = () =>{
        this.setState({
            misses:this.state.misses+1
        })
    }

    render = () =>
        (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container ">
                    <ul className="nav navbar-nav navbar-left">
                        <li className="navbar-text">
                            <span>Star Wars Planetary Trivia</span>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="navbar-text">
                            <span>{this.state.hits}</span>
                            <span>/</span>
                            <span>{this.state.misses}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )

}