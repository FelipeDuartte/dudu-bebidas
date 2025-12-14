import React from "react";
import { ShoppingCart } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section" style={{backgroundImage: 'url(./public/hero_dudu.png)'}}>
      {/* Pattern overlay decorativo */}
      <div className="hero-pattern"></div>

      {/* Fade gradient na parte inferior */}
      <div className="bottom-fade"></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-3 fw-bold text-white mb-3">
              As Melhores Bebidas
              <br />
              <span>Direto na Sua Porta</span>
            </h1>
            <p className="text-white fs-5 mb-4">
              Delivery rápido, seguro e repleto de ofertas especiais. Qualidade
              premium com preços que cabem no seu bolso!
            </p>
            <a href="#produtos" className="btn-primary-custom">
              <ShoppingCart size={20} className="me-2" />
              Explorar Produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
