import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import "./Hero.css";
import bannerCerveja from "../../assets/CervejaBanner.png";
import Bannerwisky from "../../assets/WiskyBanner.png";
import Bannervinhos from "../../assets/vinhoBanner.png";
import BannerGin from "../../assets/ginBanner.png";
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Mega Promoção",
      subtitle: "Cervejas Premium",
      description: "Até 40% OFF em cervejas importadas",
      badge: "OFERTA",
      image: bannerCerveja,
      ctaText: "Ver Ofertas",
    },
    {
      id: 2,
      title: "Novidades",
      subtitle: "Vinhos Selecionados",
      description: "Acabou de chegar - Importados direto da Europa",
      badge: "NOVO",
      image: Bannervinhos,
      ctaText: "Conferir Novidades",
    },
    {
      id: 3,
      title: "Super Desconto",
      subtitle: "Whisky & Destilados",
      description: "Descontos imperdíveis em destilados premium",
      badge: "HOT",
      image: Bannerwisky,
      ctaText: "Aproveitar Agora",
    },
    {
      id: 4,
      title: "Lançamento",
      subtitle: "Gin Artesanal",
      description: "Sabores exclusivos direto do produtor",
      badge: "EXCLUSIVO",
      image: BannerGin,
      ctaText: "Conhecer Produtos",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-carousel">
      <div className="carousel-wrapper">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="carousel-overlay"></div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="carousel-content">
                    <span className="banner-badge">{banner.badge}</span>
                    <h1 className="banner-title">
                      {banner.title}
                      <span className="banner-highlight">
                        {banner.subtitle}
                      </span>
                    </h1>
                    <p className="banner-description">{banner.description}</p>
                    <a href="#produtos" className="btn-banner">
                      <ShoppingCart size={20} />
                      <span>{banner.ctaText}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
