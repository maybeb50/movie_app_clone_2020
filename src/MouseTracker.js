import React, { Component } from 'react';
import dal from './dal.png';

class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return(
            <img src={dal} style={{position: 'absolute', left: mouse.x, top: mouse.y}} />
        );
    }
}

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            x: 0,
            y: 0
        };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return(
            <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
                {/* <p>The current mouse position is {this.state.x}, {this.state.y}</p> */}
                {/* <Cat mouse={this.state} /> */}
                { this.props.render(this.state) }
            </div>
        );
    }
}

class MouseTracker extends Component {
    render() {
        return(
            <>
                <h1>Move the mouse around!</h1>
                <Mouse render={ mouse => (
                    <Cat mouse = { mouse } />
                )} />
            </>
        );
    }
}

export default MouseTracker;