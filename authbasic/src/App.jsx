import React, { useState, useEffect } from "react";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";

export function App() {
  const [originalUsername, setOriginalUsername] = useState(undefined);
  const [originalPassword, setOriginalPassword] = useState(undefined);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const pwd = localStorage.getItem("pwd");

    if (user && pwd) {
      setOriginalUsername(user);
      setOriginalPassword(pwd);
    }
  }, []);

  return (
    <div className="App">
      {originalUsername && originalPassword ? <Login /> : <Signup />}
    </div>
  );
}
