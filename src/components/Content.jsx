import Part from "./Part.jsx";

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

export default Content
