import React from 'react'

export class HeaderComponent extends React.Component {

    render = () =>
        (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container ">
                    <div className="Header__title-left">
                        <span className="top starWars-font__main starWars-font2">Star Wars</span>
                        <span className="starWars-font__sec starWars-font1"> Planetary Trivia</span>
                    </div>
                    <div className="Header__title-right">
                        <span className="starWars-font1 starWars-font__sec">{this.props.hits}</span>
                        <span className="starWars-font1 starWars-font__sec">/</span>
                        <span className="starWars-font1 starWars-font__sec">{this.props.misses + this.props.hits}</span>
                    </div>
                </div>
            </nav>
        )

}