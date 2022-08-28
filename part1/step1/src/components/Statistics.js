import React from "react"
import StatisticLine from "./StatisticLine"

const Statistics = ({good,bad,neutral,avg}) => {
    return(
        <>
        <h1>statistics</h1>
        <table>
            <tbody>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="total" value={good+bad+neutral}/>
                <StatisticLine text="average score" value={avg/(good+bad+neutral)}/>
                <StatisticLine text="positive" value={(good/(good+bad+neutral))*100}/>
            </tbody>
        </table>
        </>
    )
}
export default Statistics