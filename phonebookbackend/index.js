const express = require('express')

const app = express()
app.use(express.json())

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

const generateRandomId = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

app.post('/api/persons', (request, response) => {
    const personId = generateRandomId(5, 1000)
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const foundName = persons.find(p => p.name === body.name)
    if (foundName) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        id: String(personId),
        name: request.body.name,
        number: request.body.number
    }

    persons = persons.concat(person)
    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
