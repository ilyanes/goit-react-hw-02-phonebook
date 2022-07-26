import PropTypes from "prop-types";

function ContactListItem({ name, number, id, onDeleteContact }) {
  return (
    <li key={id}>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button type="button" id={id} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
