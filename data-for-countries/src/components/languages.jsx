export const Languages = ({ langs }) => {
    return (
        <div>
            <ul>
                {Object.entries(langs).map(([code, name]) => {
                    return <li key={code}>{name}</li>
                })}
            </ul>
        </div>
    )
}