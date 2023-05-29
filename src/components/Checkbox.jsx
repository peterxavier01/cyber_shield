// eslint-disable-next-line react/prop-types
const Checkbox = ({ text, name, checked, onChange }) => {
  return (
    <div className="check-container">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
      />
      <span className="checkmark"></span>
      <label htmlFor={name}>{text}</label>
    </div>
  );
};

export default Checkbox;
