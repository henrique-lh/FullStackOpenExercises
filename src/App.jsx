import { useState } from 'react'
import Contact from "./components/Contact"

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [showPersons, setShowPersons] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newPhone,
            id: persons.length + 1
        }
        const exists = persons.some(p => p.name === newName)
        if (newPhone.length === 0) {
            window.alert("Please enter a phone")
        }
        else if (newName.length === 0) {
            window.alert("Please enter a name")
        }
        else if (exists) {
            window.alert(`${newName} is already added to phonebook`)
        }
        else {
            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewPhone('')
        }
    }

    const handleShowedPersons = (event) => {
        console.log('name', event.target.value)
        const name = event.target.value
        setShowPersons(name)
    }

    const handleNameChange = (event) => {
        console.log('name=', event.target.value)
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        console.log('number=', event.target.value)
        setNewPhone(event.target.value)
    }

    const personsToShow = showPersons.length === 0
        ? persons
        : persons.filter(p => p.name.toLowerCase().includes(showPersons))

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input value={showPersons} onChange={handleShowedPersons} />
            </div>
            <h2>add a new</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newPhone} onChange={handlePhoneChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <table>
                {personsToShow.map((person) =>
                    <Contact key={person.id} contact={person} />
                )}
            </table>
        </div>
    )
}

export default App
