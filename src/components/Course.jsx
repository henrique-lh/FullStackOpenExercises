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

const Course = ({ course }) => {
    return (
        <div>
            < Header course={course.name} />
            < Content parts={course.parts} />
            < Total parts={course.parts} />
        </div>
    )
}

export default Course
