import React, { Component } from 'react';

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            ({count}) => ({
                count: count + 1 
            })
        )
    }

    render() {
        if (this.state.count === 3) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.count}</h1>;
    }
}

export default BuggyCounter;