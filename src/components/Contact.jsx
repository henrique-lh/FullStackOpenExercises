const Contact = ({ contact, deleteContact }) => {
    return (
        <tbody>
            <tr>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
                <td><button onClick={() => {
                    if (window.confirm(`Delete ${contact.name}?`)) {
                        deleteContact(contact.id)
                    }
                }}>delete</button></td>
            </tr>
        </tbody>
    )
}

export default Contact
