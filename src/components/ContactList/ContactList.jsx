export const ContactList = ({ data, onDeletePerson }) => {
    return data.map(({ id, name, number }) => {
        return (
            <li key={id} id={id}>
                {name}: {number}
                <button onClick={() => onDeletePerson(id)}>Delete</button>
            </li>
        );
    });
};
