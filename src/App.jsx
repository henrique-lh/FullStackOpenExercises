import { useState } from 'react'
import Contact from "./components/Contact"

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            phone: '040-1234567'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            phone: newPhone
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

    const handleNameChange = (event) => {
        console.log('name=', event.target.value)
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        console.log('phone=', event.target.value)
        setNewPhone(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
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
                {persons.map((person) =>
                    <Contact key={person.phone} contact={person} />
                )}
            </table>
        </div>
    )
}

export default App