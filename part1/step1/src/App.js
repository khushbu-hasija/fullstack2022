import { useState } from 'react'
import React from 'react'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg,setAvg] = useState(0)
  const [showStats, setShowStats] = useState(false)

  const setToGood = (val) => {
    setShowStats(true)
    setGood(val)
    setAvg(avg+1)
  }

  const setToBad = (val) => {
    setShowStats(true)
    setBad(val)
    setAvg(avg-1)
  }

  const setToNeutral = (val) => {
    setShowStats(true)
    setNeutral(val)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setToGood(good+1)}>good</button>
      <button onClick={() => setToNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setToBad(bad+1)}>bad</button>
      { showStats
       ? <Statistics good={good} bad={bad} neutral={neutral} avg={avg}/>
       : <p>No feedback given</p> }
      </div>
  )
}

export default App