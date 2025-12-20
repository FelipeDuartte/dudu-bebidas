import React from "react";
import { ShoppingCart, Clock, Shield, Star } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section" style={{backgroundImage: 'url(./hero_dudu.png)'}}>
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="hero-content">
              
              {/* Main Heading */}
              <h1 className="hero-title">
                Melhores bebidas com
                <span className="hero-highlight"> Desconto de até 50%</span>
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle">
                Entrega rápida com produtos das melhores marcas e preços que cabem no seu bolso.
              </p>

              {/* Trust Indicators */}
              <div className="trust-row">
                <div className="trust-item">
                  <Clock size={20} />
                  <span>Entrega rápida</span>
                </div>
                <div className="trust-item">
                  <Shield size={20} />
                  <span>Compra 100% Segura</span>
                </div>
                <div className="trust-item">
                  <Star size={20} />
                  <span>Avaliação 5.0/5.0</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="hero-cta">
                <a href="#produtos" className="btn-hero">
                  <ShoppingCart size={22} />
                  <span>Ver Ofertas Agora</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}