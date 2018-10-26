import React, { Component } from 'react';

class App extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

// こんな風にも書けるが上の方が直感的でわかりやすい
// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello World!"
//     );
//   }
// }

export default App;
