import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('실행');
  }

  state = {
    count: 0
  };
  
  increase = () => {
    this.setState(current => ({
        count: current.count + 1
    })); 
    
  } 

  decrease = () => {
    this.setState(current => ({
      count: current.count - 1
    })); 
  } 

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('component update');
  }

  componentWillUnmount() {
    console.log('component unmount');
  }

  render() {
    console.log('I am rendering'); 
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default App;
