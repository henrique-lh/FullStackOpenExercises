import { useState, useEffect } from 'react';
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import contactService from "./service/contact.js";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [lastId, setLastId] = useState(0)
    const [showPersons, setShowPersons] = useState('')

    useEffect(() => {
        contactService
            .read()
            .then(initialContacts => {
                setPersons(initialContacts)
                setLastId(initialContacts.length)
            })
    }, [])

    const addName = (event) => {
        event.preventDefault()
        const newId = persons.length + 1
        setLastId(newId)
        console.log(lastId)
        const contactObject = {
            name: newName,
            number: newPhone,
            id: newId.toString()
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
            contactService
                .create(contactObject)
                .then(returnedContacts => {
                    setPersons(persons.concat(returnedContacts))
                    setNewName('')
                    setNewPhone('')
                })
        }
    }

    const deleteContact = (id) => {
        contactService
            .deleteContact(id)
            .then(returnedData => {
                console.log('after delete', returnedData)
                setPersons(persons.filter(p => p.id !== id))
            })
    }

    const handleShowedPersons = (event) => {
        const name = event.target.value
        setShowPersons(name)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
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

            <Persons persons={personsToShow} deleteContact={deleteContact} />
        </div>
    )
}

export default App
