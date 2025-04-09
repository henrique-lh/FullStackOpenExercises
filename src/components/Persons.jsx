import Contact from "./Contact";

const Person = ({ persons }) => {
    return (
        <table>
            {persons.map((person) =>
                <Contact key={person.id} contact={person}/>
            )}
        </table>
    )
}

export default Person