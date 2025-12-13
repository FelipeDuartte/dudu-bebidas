import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

export default function ProductList({
  filteredProducts,
  categories,
  selectedCategory,
  setSelectedCategory,
  toggleFavorite,
  addToCart,
  favorites,
}) {
  return (
    <section id="produtos" className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="section-title">Nossos Produtos</h2>
          </div>
          <div className="text-end">
            <span
              className="badge bg-dark px-3 py-2"
              style={{ fontSize: "14px" }}
            >
              {filteredProducts.length} produtos disponíveis
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div
          className="d-flex gap-3 overflow-x-auto pb-3 mb-5"
          style={{ scrollbarWidth: "thin" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn filter-btn ${
                selectedCategory === cat.id ? "active" : ""
              }`}
            >
              <i className={`${cat.icon} me-2`}></i>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((produto, index) => (
              <ProductCard
                key={produto.id}
                produto={produto}
                index={index}
                toggleFavorite={toggleFavorite}
                addToCart={addToCart}
                favorites={favorites}
              />
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <div className="p-5">
                <i
                  className="bi bi-search"
                  style={{ fontSize: "64px", color: "#ddd" }}
                ></i>
                <h4 className="mt-4 mb-2">Nenhum produto encontrado</h4>
                <p className="text-muted">
                  Tente buscar por outro termo ou categoria
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
