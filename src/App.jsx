const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = ({part}) => {

    return (
        <div>
            <p> {part.name} {part.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            {props.parts.map(part => (
                < Part part={part} key={part.name} />
            ))}

        </div>

    )
}

const Total = (props) => {
    const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
    return (
        <div>
            <p>Number of exercises {sum}</p>
        </div>
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
            < Header course={course.name} />
            < Content parts={course.parts} />
            < Total parts={course.parts} />
        </div>
    )
}

export default App