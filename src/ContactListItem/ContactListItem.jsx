import PropTypes from "prop-types";

function ContactListItem({ contacts, onDeleteContact }) {
  return (
    <>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
          <button type="button" id={id} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactListItem;
