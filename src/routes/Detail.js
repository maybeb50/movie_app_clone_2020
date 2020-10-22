import React, { Component } from 'react';


class Detail extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) history.push('./');
    }

    render() {
        const { location } = this.props;
        // console.log(this.props.location.state.title);
        if(location.state) {
            return(
                <span>{location.state.title}</span>
            )
        } else {
            return null;
        }
    }
}

export default Detail;