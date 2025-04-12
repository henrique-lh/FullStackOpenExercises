import Contact from "./Contact";

const Person = ({ persons, deleteContact }) => {
    return (
        <table>
            {persons.map((person) =>
                <Contact key={person.id} contact={person} deleteContact={deleteContact} />
            )}
        </table>
    )
}

export default Person
