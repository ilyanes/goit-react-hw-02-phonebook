import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
