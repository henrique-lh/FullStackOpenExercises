import axios from "axios"
const baseUrl = 'http://localhost:3001/api/persons'

const read = () => {
    const request = axios.get(baseUrl)
    return request.then(res => {
        return res.data
    })
}

const create = (newContact) => {
    const request = axios.post(baseUrl, newContact)
    return request.then(res => {
        return res.data
    })
}

const deleteContact = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(res => {
        return res.data
    })
}

const updateContact = (id, newContact) => {
    const request = axios.put(`${baseUrl}/${id}`, newContact)
    return request.then(res => {
        return res.data
    })
}

export default {
    read, create, deleteContact, updateContact
}