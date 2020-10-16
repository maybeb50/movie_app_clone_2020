import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter';

class App extends Component {
  render() {
    return(
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    )
  }
}

export default App;
