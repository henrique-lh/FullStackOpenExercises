const Filter = ({ showPersons, handleShowedPersons }) => {
    return (
        <div>
            filter shown with <input value={showPersons} onChange={handleShowedPersons} />
        </div>
    )
}

export default Filter
