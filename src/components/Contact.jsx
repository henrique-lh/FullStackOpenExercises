const Contact = ({ contact }) => {
    return (
        <tbody>
            <tr>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
            </tr>
        </tbody>
    )
}

export default Contact
