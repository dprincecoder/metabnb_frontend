import React from "react";
import "./search.css";
import Button from "../Button";

const SearchInput = ({
  type,
  classes,
  handleChange,
  label,
  name,
  value,
  required,
  ...otherProps
}) => {
  return (
    <div className="input-wrap">
      <input
        className={classes}
        name={name}
        type='text'
        value={value}
        required={required}
        placeholder="search country"
        onChange={handleChange}
        {...otherProps}
      />
      <Button
        text="Search"
        classes="btn-border-right space-letters-1 btn btn-purple"
      />
    </div>
  );
};

export default SearchInput;
