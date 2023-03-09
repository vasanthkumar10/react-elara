import React, { useState } from "react";

export function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameErr, setUsernameErr] = useState(false);
  const [isPasswordErr, setPasswordErr] = useState(false);

  const validate = () => {
    if (username.trim() === "") setUsernameErr(true);
    if (password.trim() === "") setPasswordErr(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validate();
    debugger;
    if (!isUsernameErr) console.log("username", username);
    if (!isPasswordErr) console.log("password", password);
  };

  return (
    <div>
      <h2>
        {username} {password}
      </h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {isUsernameErr && (
            <p style={{ color: "red" }}>Enter valid username</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isPasswordErr && (
            <p style={{ color: "red" }}>Enter valid password</p>
          )}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
