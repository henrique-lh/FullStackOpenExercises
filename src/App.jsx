import { useState, useEffect } from 'react';
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import contactService from "./service/contact.js";
import Notification from "./components/Notification.jsx";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [_lastId, setLastId] = useState(0)
    const [showPersons, setShowPersons] = useState('')
    const [notificationMesaage, setNotificationMesaage] = useState(null)

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
        const contactObject = {
            name: newName,
            number: newPhone,
            id: newId.toString()
        }
        const exists = persons.find(p => p.name === newName)
        if (newPhone.length === 0) {
            window.alert("Please enter a phone")
        }
        else if (newName.length === 0) {
            window.alert("Please enter a name")
        }
        else if (exists) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const existingContactWithUpdatedNumber = {...exists, number: newPhone}
                contactService
                    .updateContact(existingContactWithUpdatedNumber.id, existingContactWithUpdatedNumber)
                    .then(returnedContact => {
                        setPersons(persons.map(p => p.id === returnedContact.id ? returnedContact : p))
                        setNotificationMesaage(
                            `${newName} phone's number updated`
                        )
                        setNewName('')
                        setNewPhone('')
                        setTimeout(() => {
                            setNotificationMesaage(null)
                        }, 2000)
                    })
            }
        }
        else {

            contactService
                .create(contactObject)
                .then(returnedContacts => {
                    setPersons(persons.concat(returnedContacts))
                    setNotificationMesaage(
                        `Added ${newName}`
                    )
                    setNewName('')
                    setNewPhone('')
                    setTimeout(() => {
                        setNotificationMesaage(null)
                    }, 2000)
                })
        }
    }

    const deleteContact = (id) => {
        contactService
            .deleteContact(id)
            .then(returnedData => {
                setPersons(persons.filter(p => p.id !== returnedData.id))
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

            <Notification message={notificationMesaage}/>

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
