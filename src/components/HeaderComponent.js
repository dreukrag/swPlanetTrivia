import React from 'react'

export default class HeaderComponent extends React.Component {
    render = () =>
        (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container ">
                    <ul className="nav navbar-nav ">
                        <span className="brand navbar-link">
                            <p className="navbar-text__top">Filipe</p>
                            <p className="navbar-text__underline"></p>
                            <p className="navbar-text__bottom">Alexandre Groh</p>
                        </span>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#"><b>Home</b></a>
                        </li>
                        <li>
                            <a href="#"><b>Gallery</b></a>
                        </li>
                        <li>
                            <a href="#"><b>About</b></a>
                        </li>
                        <li>
                            <a href="#"><b>Contact</b></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )

}