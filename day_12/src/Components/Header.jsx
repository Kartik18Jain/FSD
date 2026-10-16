import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h2 className="logo" onClick={() => navigate("/")}>
        MyStore
      </h2>

      <nav>
        <button onClick={() => navigate("/")}>
          Home
        </button>

        <button onClick={() => navigate("/products")}>
          Product
        </button>

        <button onClick={() => navigate("/cart")}>
          Cart
        </button>

        <button onClick={() => navigate("/contact")}>
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Header;