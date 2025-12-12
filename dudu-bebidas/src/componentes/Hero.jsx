import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-3 fw-bold text-white mb-3" style={{ lineHeight: 1.2 }}>
              As Melhores Bebidas<br/>
              <span style={{ color: '#ffd700' }}>Direto na Sua Porta</span>
            </h1>
            <p className="text-white fs-5 mb-4" style={{ maxWidth: '600px', lineHeight: 1.6 }}>
              Delivery rápido, seguro e repleto de ofertas especiais. Qualidade premium com preços que cabem no seu bolso!
            </p>
            <a href="#produtos" className="btn btn-primary-custom">
              <ShoppingCart size={20} className="me-2" />
              Explorar Produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
