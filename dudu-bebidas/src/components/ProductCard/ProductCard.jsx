import React from "react";
import { Heart, Plus } from "lucide-react";

export default function ProductCard({
  produto,
  index,
  toggleFavorite,
  addToCart,
  favorites,
}) {
  return (
    <div className="col" style={{ animationDelay: `${index * 0.05}s` }}>
      <div className="produto-card">
        <div className="produto-img-container">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="produto-img"
          />

          {produto.promocao && (
            <span className="badge-promo">
              <i className="bi bi-lightning-charge-fill me-1"></i>
              OFERTA
            </span>
          )}

          {produto.estoque < 15 && (
            <span
              className={`badge-estoque ${produto.estoque < 15 ? "baixo" : ""}`}
            >
              <i className="bi bi-exclamation-circle-fill me-1"></i>
              Últimas unidades
            </span>
          )}

          <button
            onClick={() => toggleFavorite(produto.id)}
            className="btn-favorito"
          >
            <Heart
              size={20}
              fill={favorites.has(produto.id) ? "#ff0000" : "none"}
              color={favorites.has(produto.id) ? "#ff0000" : "#000"}
              strokeWidth={2.5}
            />
          </button>
        </div>

        <div className="produto-info">
          <span
            className="d-inline-block px-2 py-1 rounded mb-2"
            style={{
              background: "#f8f9fa",
              color: "#666",
              fontSize: "11px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {produto.categoria}
          </span>

          <h3
            className="fw-semibold mb-3"
            style={{
              fontSize: "15px",
              lineHeight: "1.4",
              minHeight: "42px",
              color: "#000",
            }}
          >
            {produto.nome}
          </h3>

          <div className="mb-3">
            <div className="d-flex align-items-baseline gap-2 mb-1">
              <span
                className="fw-bold"
                style={{ fontSize: "24px", color: "#ffd700" }}
              >
                R$ {produto.preco.toFixed(2)}
              </span>
            </div>
            {produto.precoAntigo && (
              <div className="d-flex align-items-center gap-2">
                <span
                  className="text-muted text-decoration-line-through"
                  style={{ fontSize: "13px" }}
                >
                  R$ {produto.precoAntigo.toFixed(2)}
                </span>
                <span
                  className="badge"
                  style={{
                    background: "linear-gradient(135deg, #000, #1a1a1a)",
                    color: "#ffd700",
                    fontSize: "11px",
                    padding: "4px 8px",
                  }}
                >
                  -{produto.desconto}% OFF
                </span>
              </div>
            )}
          </div>

          <button
            onClick={() => addToCart(produto)}
            className="btn btn-add-cart d-flex align-items-center justify-content-center gap-2 mt-auto"
          >
            <Plus size={18} strokeWidth={3} />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
