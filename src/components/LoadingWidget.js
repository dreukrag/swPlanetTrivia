import React from 'react'

export class LoadingWidget extends React.Component {
    render = () => (

        <div className="loadingWidget " style={
            !this.props.loadingVar ? {} : { display: 'none' }
        }>
            <div className="loadingWidget__container">
                <p className="loadingWidget__text">LOADING</p>
                <div className="loadingWidget__loading">
                    <div className="loadingWidget__dot"></div>
                    <div className="loadingWidget__dot"></div>
                    <div className="loadingWidget__dot"></div>
                    <div className="loadingWidget__dot"></div>
                </div>
            </div>
        </div>
    )
}