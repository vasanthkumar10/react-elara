import React, { useState, createContext, useEffect } from "react";
import { Form } from "./components/Form/Form";
import { Button } from "./components/Button/Button";
import "./App.css";
export const ThemeContext = createContext();

const currentTheme = localStorage.getItem("theme");
const initialTheme = currentTheme ? currentTheme : "light";

export function App() {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    console.log("logging", theme);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={`app-${theme}`}>
        <Form />
        <Button text={"toggle"} action={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

// Child changes parent -> two way binding
