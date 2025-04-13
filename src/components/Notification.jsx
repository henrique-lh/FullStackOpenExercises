const Notification = ({ message, colorMessage }) => {
    if (message === null) {
        return null
    }
    return (
        <div className='notification' style={{ color: colorMessage}}>
            {message}
        </div>
    )
}

export default Notification
