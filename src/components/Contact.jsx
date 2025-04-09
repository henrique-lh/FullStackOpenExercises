const Contact = ({ contact }) => {
    return (
        <tbody>
            <tr>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
            </tr>
        </tbody>
    )
}

export default Contact
