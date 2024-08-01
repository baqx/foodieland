import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

import RecipePage from "./components/RecipePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RecipePage" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
