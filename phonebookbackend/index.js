const express = require('express')

const app = express()

let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/info', (request, response) => {
    const personsInfo = `<p>Phonebook has info for ${persons.length} people</p>`
    const currentDate = new Date()
    response.send(`${personsInfo}<p>${currentDate}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const personId = request.params.id
    const person = persons.find(p => p.id === personId)
    if (!person) {
        response.status(404).send('Not Found')
    }
    else {
        response.json(person)
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const personId = request.params.id
    const person = persons.find(p => p.id === personId)
    if (!person) {
        response.status(404).send('Not Found')
    } else {
        persons = persons.filter(person => person.id !== personId)
        response.status(204).send(`Deleted ${person.name} from phonebook`)
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
