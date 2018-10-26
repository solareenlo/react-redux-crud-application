import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) { // constructorは初期化処理を行います
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    const count = this.state.count
    this.setState({ count: count + 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>console.log{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
