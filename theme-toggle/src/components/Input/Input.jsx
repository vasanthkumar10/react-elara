import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Input.css";

export function Input(props) {
  const { label, type, placeholder } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <label className={`label-${theme}`} htmlFor={`id-${label}`}>
        {label}
      </label>
      <input
        className={`input-${theme}`}
        id={`id-${label}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
