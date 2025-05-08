import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import HomeComponent from "./components/HomeComponent";
import ProductsComponent from "./components/ProductsComponent";
import PhonesComponent from "./components/PhonesComponent";
import LaptopsComponent from "./components/LaptopsComponent";
import AboutComponent from "./components/AboutComponent";

import "./App.css"; // importa el CSS

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/products" element={<ProductsComponent />} />
          <Route path="/products/phones" element={<PhonesComponent />} />
          <Route path="/products/laptops" element={<LaptopsComponent />} />
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
