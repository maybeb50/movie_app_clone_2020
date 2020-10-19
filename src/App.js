import React, { Component } from 'react';

function createMarkup() {
  return {__html: 'Create Markup !!!!!!'}
}

class App extends Component {
  render() {
    return(
      <div dangerouslySetInnerHTML={createMarkup()} />
    )
  }
}

export default App;
