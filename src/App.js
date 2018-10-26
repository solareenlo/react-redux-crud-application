import React, { Component } from 'react';

class App extends Component {
  render() {
    return <input type="text" onClick={() => {console.log("I am clicked!")}} />;
  }
}

export default App;
