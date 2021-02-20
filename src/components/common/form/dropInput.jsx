import { React } from "react";

const DropInput = ({ name, options, error, label, value, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} </label>
      <select {...rest} name={name} id={name} className="form-control">
        {options.map((option) => (
          <option key={option} value={option} selected={option === value}>
            {option}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default DropInput;
