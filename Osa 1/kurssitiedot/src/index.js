import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
  <>
    <p>{props.course} {props.points}</p>
  </>);
}

const Content = (props) => {

  return (
  <>
    <Part course={props.parts[0].name} points={props.parts[0].exercises}/>
    <Part course={props.parts[1].name} points={props.parts[1].exercises}/>
    <Part course={props.parts[2].name} points={props.parts[2].exercises}/>

  </>
  );
}




const Total = (props) => {
    
  const tot = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <>
      <p>Number of exercises {tot}</p>
    </>
  )
}  


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))