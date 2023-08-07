import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import UserPage from "./pages/Users";
import ProductPage from "./pages/Products";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
