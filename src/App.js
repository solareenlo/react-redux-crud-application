import React from 'react';

const App = () => {
  return (
    <div>
      <User name={"Taro"} age={10} />
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

export default App;
