import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const originalUsername = localStorage.getItem("user");
    const originalPassword = localStorage.getItem("pwd");

    if (originalUsername === username && originalPassword === password) {
      console.log("logged in successfully");
      setIsError(false);
      navigate("/home");
    } else {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login page</h2>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {isError && <p style={{ color: "red" }}>Invalid username or password</p>}
      <button type="submit">submit</button>
    </form>
  );
}
