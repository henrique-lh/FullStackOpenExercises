import { useState } from 'react'
import Contact from "./components/Contact"
import contact from "./components/Contact";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>debug {newName}</div>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) =>
                    <Contact key={person.name} contact={person} />
                )}
            </ul>
        </div>
    )
}

export default App