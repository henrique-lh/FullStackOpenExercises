const Total = ({ parts }) => {
    const sum = parts.reduce((s, p) => {
        console.log('s', s)
        console.log('p', p)
        return s + p.exercises
    }, 0)
    return (
        <div>
            <p><strong>Number of exercises {sum}</strong></p>
        </div>
    )
}

export default Total
