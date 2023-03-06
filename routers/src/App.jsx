import React from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { Form } from "./components/Form";
import { Input } from "./components/Input";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<h1>Main Page</h1>} />
        <Route path="/form/:user/:id" element={<Form />} />
        <Route path="/input" element={<Input />} />
        <Route path="*" element={<h1>Page not found</h1>} />

        <Route path="/admin">
          <Route index element={<h1>Admin main page</h1>} />
          <Route path="page" element={<h2>admin nested page</h2>} />
          <Route path="login" element={<h2>admin login page</h2>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
