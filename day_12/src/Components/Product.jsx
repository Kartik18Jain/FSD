import React, { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2 className="status">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="error">Error: {error}</h2>;
  }

  return (
    <section className="products-section" id="products">
      <h1>Our Products</h1>

      <p className="subtitle">
        Explore our latest collection
      </p>

      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <h3>{product.title}</h3>

            <p className="description">
              {product.description}
            </p>

            <p className="price">
              ${product.price}
            </p>

            <p className="rating">
              ⭐ {product.rating}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Product;
