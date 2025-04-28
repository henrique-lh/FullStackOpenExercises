const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Missing password')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://admin:${password}@cluster0.ptjpswz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const contactSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
})

const Contact = mongoose.model('Contact', contactSchema)

function addPhoneNumber (contact) {
    contact.save().then(result => {
        console.log(`added ${contact.name} number ${contact.phoneNumber} to phonebook`)
        mongoose.connection.close()
    })
}

function listContacts () {
    Contact.find({}).then(result => {
        result.forEach(contact => {
            console.log(contact)
        })
        mongoose.connection.close()
    })
}

if (process.argv.length > 3) {
    const name = process.argv.slice(3, process.argv.length - 1).join(" ")
    const phone = process.argv.at(-1)

    const contact = new Contact({
        name: name,
        phoneNumber: phone,
    })
    addPhoneNumber(contact)
} else {
    listContacts()
}
