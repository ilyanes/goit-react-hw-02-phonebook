import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return (
    <label htmlFor="">
      Filter contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
