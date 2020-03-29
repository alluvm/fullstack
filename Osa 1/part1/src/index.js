import React from 'react'
import ReactDOM from 'react-dom'


const Hello = (props) => {
  return (
  <dív>
    <p>
      Hello {props.name}, you are {props.age} years old
    </p>
  </dív>
  );
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Aleksi' age='18'/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))