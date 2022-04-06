function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>name: {contact.name}</p>
          <p>number: {contact.number}</p>
          {/* <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button> */}
          <button type="button" id={contact.id} onClick={deleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
