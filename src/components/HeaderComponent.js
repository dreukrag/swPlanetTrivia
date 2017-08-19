import React from 'react'

export class HeaderComponent extends React.Component {

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
                            <span>{this.props.hits}</span>
                            <span>/</span>
                            <span>{this.props.misses + this.props.hits}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )

}