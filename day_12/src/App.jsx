import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Product from "./Components/Product";
import Footer from "./Components/Footer";

import "./App.css";

function Home() {
  return (
    <div className="page-content">
      <h1>Welcome to MyStore</h1>
      <p>Welcome to our online shopping website!</p>
    </div>
  );
}

function Cart() {
  return (
    <div className="page-content">
      <h1>Shopping Cart</h1>
      <p>Your cart is currently empty.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-content">
      <h1>Contact Us</h1>
      <p>Email: support@mystore.com</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Product />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;