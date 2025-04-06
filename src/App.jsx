import { useState } from 'react'


const Button = ( { onClick, text } ) => {
    return (
        <button onClick={onClick}>{text}</button>
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
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {total}</p>
            <p>average {average}</p>
            <p>positive {positive} %</p>
        </div>
    )
}

export default App