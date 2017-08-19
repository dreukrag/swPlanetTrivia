import React from 'react'
import { findDOMNode } from 'react-dom'

export class StarsWidget extends React.Component {

    render = () => (
        <div className="StarsWidget__container">
            <canvas ref="canvas"
                width={window.innerWidth}
                height={window.innerHeight}
            />
        </div>
    )

    totalObjects = 1500;
    maxVelocity = 2;
    starSize = 1;
    twinkleFreq = 50000;
    shootingStarFreq = 500;
    shootingStarVelocity = 100;
    shootingStarSize = 1;

    stars = [];
    shootingStars = [];
    canvas;
    ctx;

    componentDidMount = () => {
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext('2d');
        var i = 0;
        for (i = 0; i < this.totalObjects; i++) {
            this.stars.push(new this.Star());
        }
        //this.drawCanvas();
        requestAnimationFrame(() => { this.Update() });
    }

    Update = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgba(0, 0, 0, .4)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        var f = 0;
        this.stars.forEach(function (obj) {
            obj.X -= obj.Velocity;
            if (obj.X < 0) { ///reset
                obj.X = this.canvas.width + 1;
            }
        }, this);
        for (f = 0; f < this.stars.length; f++) {
            this.Draw(this.stars[f])
        }

        this.ctx.restore()
        requestAnimationFrame(() => {this.Update()});
        // f = 0;
        // for (f = 0; f < this.shootingStars.length; f++) {
        //     this.shootingStars[f].Update();
        //     this.shootingStars[f].Draw();
        // }
    }

    Draw = (obj) => {
        this.ctx.fillStyle = "rgba(255,255,255," + obj.Opacity + ")";
        if (Math.round((Math.random() * this.twinkleFreq)) == 1) {
            this.ctx.fillRect(obj.X, obj.Y, this.starSize + 2, this.starSize + 2);
        }
        else {
            this.ctx.fillRect(obj.X, obj.Y, this.starSize, this.starSize);
        }
    }

    ShootingStar = () => {
        var X = 2000;
        var Y = Math.random() * this.canvas.height;
        var Length = 1000;

        const Update = function () {
            X -= this.shootingStarVelocity;
        };

        const Draw = function () {
            for (var i = 0; i < this.Length; i++) {
                var opacity = (0.8 - (0.001 * i));
                this.ctx.fillStyle = "rgba(255,255,255," + opacity + ")";
                this.ctx.fillRect(this.X + i, this.Y, this.shootingStarSize, this.shootingStarSize);
            }
        };
    }

    Star = () => {
        // console.log(this.canvas.width)
        var X = Math.random() * this.canvas.width;
        var Y = Math.random() * this.canvas.height;
        var Velocity = (Math.random() * this.maxVelocity);
        var Opacity = (((Math.random() * 10) + 1) * 0.1);

        var obj = {
            X: X,
            Y: Y,
            Velocity: Velocity,
            Opacity: Opacity
        }
        // console.log(obj)
        return obj
    }

}
