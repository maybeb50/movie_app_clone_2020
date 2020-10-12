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
    // this.state.count = 1;
    
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.setState(current => ({
        count: current.count + 1
    })); 
    
  } 

  decrease = () => {
    //this.state.count = -1;
    // this.setState({
    //   count: this.state.count - 1
    // }); 
    this.setState(current => ({
      count: current.count - 1
  })); 
  } 

  render() {
    // console.log(this);  // App {}
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

