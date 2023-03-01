import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Button.css";

export function Button(props) {
  const { theme } = useContext(ThemeContext);
  const { action, text } = props;
  return (
    <div>
      <button className={`button-${theme}`} onClick={action}>
        {text}
      </button>
    </div>
  );
}
