import { useState } from 'react'


const Button = ( { onClick, text } ) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const StatisticsLine = ({ text, value }) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </tbody>
    )
}

const Statistics = ({ good, neutral, bad, total, average, positive}) => {

    if (total === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <table>
            <StatisticsLine text={'good'} value={good} />
            <StatisticsLine text={'neutral'} value={neutral} />
            <StatisticsLine text={'bad'} value={bad} />
            <StatisticsLine text={'total'} value={total} />
            <StatisticsLine text={'average'} value={average} />
            <StatisticsLine text={'positive'} value={positive} />
        </table>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const handlingGood = () => {
        const newGood = good + 1
        setGood(newGood)
        const newTotal = newGood + neutral + bad
        setTotal(newTotal)
        setAverage((newGood - bad) / newTotal)
        setPositive(newGood * 100 / newTotal)
    }

    const handlingBad = () => {
        const newBad = bad + 1
        setBad(newBad)
        const newTotal = good + neutral + newBad
        setTotal(newTotal)
        setAverage((good - newBad) / newTotal)
        setPositive(good * 100 / newTotal)
    }

    const handlingNeutral = () => {
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
        const newTotal = newNeutral + good + bad
        setTotal(newTotal)
        setAverage((good - bad) / newTotal)
        setPositive(good * 100 / newTotal)
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button onClick={handlingGood} text={'good'} />
            <Button onClick={handlingNeutral} text={'neutral'} />
            <Button onClick={handlingBad} text={'bad'} />
            <h1>statistics</h1>
            <Statistics good={good} bad={bad} average={average} neutral={neutral} positive={positive} total={total} />
        </div>
    )
}

export default App