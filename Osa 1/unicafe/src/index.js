import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const Header = ({text}) => <h1>{text}</h1>

const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad, pos, avg}) => {

  return (
      <table>
        <tbody>
        <StatisticsLine text='good' value = {good}/>
        <StatisticsLine text='neutral' value = {neutral}/>
        <StatisticsLine text='bad' value = {bad}/>
        <StatisticsLine text='average' value = {avg}/>
        <StatisticsLine text='positive' value = {pos}/>
        </tbody>
      </table>
  );

}





const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleBad = () => setBad(bad + 1)
  const handleNeutral = () => setNeutral(neutral + 1)

  const average = () =>  {
    const total = good + bad + neutral
    if(total > 0) return (good - bad) / total; else return 0
  }

  const positive = () => {
    const total = good + bad + neutral
    if(total > 0) return 100 * good / total + '%'; else return 0
  }
  
  return (
    <div>
      <Header text='Give feedback'/>
      <Button handleClick={handleGood} text={'Good'}/>
      <Button handleClick={handleNeutral} text={'Neutral'}/>
      <Button handleClick={handleBad} text={'Bad'}/>
      <Header text='Statistics'/>
      <Statistics 
       good={good}
       bad={bad}
       neutral={neutral}
       pos={positive()}
       avg={average()}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))