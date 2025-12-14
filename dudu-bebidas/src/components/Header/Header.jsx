import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import "./Header.css";

export default function Header({
  searchTerm,
  setSearchTerm,
  cartCount,
  menuOpen,
  setMenuOpen,
  scrolled,
}) {
  return (
    <header
      className={`sticky-top navbar-custom ${scrolled ? "scrolled" : ""}`}
    >
      <nav className="navbar navbar-dark">
        <div className="container-fluid px-3 px-lg-4">
          <a href="#" className="navbar-brand logo d-flex align-items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="url(#gradient1)"/>
              <path d="M20 8L12 15V28C12 29.1 12.9 30 14 30H26C27.1 30 28 29.1 28 28V15L20 8Z" fill="white" fillOpacity="0.9"/>
              <circle cx="20" cy="20" r="4" fill="#ffd700"/>
              <path d="M16 24H24V28H16V24Z" fill="rgba(255,255,255,0.7)"/>
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#ffd700"/>
                  <stop offset="100%" stopColor="#ffed4e"/>
                </linearGradient>
              </defs>
            </svg>
            <div>
              Dudu <span>Bebidas</span>
            </div>
          </a>

          {/* Search Desktop */}
          <div
            className="d-none d-lg-flex flex-grow-1 mx-4"
            style={{ maxWidth: "500px" }}
          >
            <div className="search-box w-100">
              <Search className="search-icon" size={22} />
              <input
                type="search"
                placeholder="Buscar bebidas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control border-0"
                style={{
                  background: "transparent",
                  outline: "none",
                  boxShadow: "none",
                  fontSize: "15px",
                }}
              />
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <a
              href="#"
              className="user-btn d-none d-lg-flex align-items-center gap-2 text-decoration-none"
            >
              <User size={20} />
              <span>Entrar</span>
            </a>

            <button className="user-btn position-relative d-flex align-items-center gap-2">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              <span className="d-none d-lg-inline">Carrinho</span>
            </button>

            <button
              className="navbar-toggler d-lg-none border-0 shadow-none"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        {/* Search Mobile */}
        <div className="container-fluid d-lg-none mt-2 px-3">
          <div className="search-box w-100">
            <Search className="search-icon" size={20} />
            <input
              type="search"
              placeholder="Buscar bebidas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control border-0"
              style={{
                background: "transparent",
                outline: "none",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="bg-black border-top py-3 d-lg-none"
          style={{ borderColor: "#333 !important" }}
        >
          <div className="container-fluid px-3">
            <a
              href="#hero"
              className="d-block text-white text-decoration-none py-2 px-3 rounded mb-1"
            >
              <i className="bi bi-house-door-fill me-2"></i>Início
            </a>
            <a
              href="#produtos"
              className="d-block text-white text-decoration-none py-2 px-3 rounded mb-1"
            >
              <i className="bi bi-tag-fill me-2"></i>Promoções
            </a>
            <a
              href="#produtos"
              className="d-block text-white text-decoration-none py-2 px-3 rounded mb-1"
            >
              <i className="bi bi-grid-fill me-2"></i>Categorias
            </a>
            <a
              href="#contato"
              className="d-block text-white text-decoration-none py-2 px-3 rounded"
            >
              <i className="bi bi-envelope-fill me-2"></i>Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}