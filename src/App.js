import React from 'react';

const App = () => {
  return (
    <div>
      <User name={"Taro"} />
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}! </div>
}

export default App;
