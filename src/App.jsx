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

    const handlingGood = () => {
        setGood(good + 1)
    }

    const handlingBad = () => {
        setBad(bad + 1)
    }

    const handlingNeutral = () => {
        setNeutral(neutral + 1)
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
        </div>
    )
}

export default App