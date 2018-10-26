import React, { Component } from 'react';

class App extends Component {
  render() {
    return <input type="text" onChange={() => {console.log("I am clicked!")}} />;
  }
}

export default App;
