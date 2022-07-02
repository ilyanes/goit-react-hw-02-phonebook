function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
          {/* <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button> */}
          <button type="button" id={id} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
