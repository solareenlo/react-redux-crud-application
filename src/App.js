import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = "Hi, Tom!";
    const dom = <h1>{greeting}</h1>;
    return dom;
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
