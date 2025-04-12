import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [showPersons, setShowPersons] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(res => {
                setPersons(res.data)
            })
    }, [])

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
            axios
                .post('http://localhost:3001/persons', nameObject)
                .then(res => {
                    setPersons(persons.concat(res.data))
                    setNewName('')
                    setNewPhone('')
                })
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
        : persons.filter(p => p.name.includes(showPersons))

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter showPersons={showPersons} handleShowedPersons={handleShowedPersons} />

            <h3>add a new</h3>

            <PersonForm
                addName={addName}
                newName={newName}
                handleNameChange={handleNameChange}
                newPhone={newPhone}
                handlePhoneChange={handlePhoneChange}
            />

            <h2>Numbers</h2>

            <Persons persons={personsToShow} />
        </div>
    )
}

export default App
