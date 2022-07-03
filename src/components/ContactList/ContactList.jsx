import PropTypes from "prop-types";

function ContactList({ children }) {
  return <ul>{children}</ul>;
}

ContactList.propTypes = {
  children: PropTypes.node,
};

export default ContactList;
