import React from "react";
import { App } from "./App";
import { Home } from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
