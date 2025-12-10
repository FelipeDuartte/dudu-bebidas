import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Heart, Plus, TrendingUp, Zap, Award, Truck } from 'lucide-react';

// Dados dos produtos
const produtosData = [
  {
    id: 1,
    nome: "Cerveja Heineken Long Neck 330ml",
    categoria: "cerveja",
    preco: 4.99,
    precoAntigo: 6.99,
    desconto: 29,
    imagem: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400",
    estoque: 45,
    promocao: true,
    destaque: true
  },
  {
    id: 2,
    nome: "Vinho Tinto Cabernet Sauvignon",
    categoria: "vinho",
    preco: 45.90,
    precoAntigo: 65.90,
    desconto: 30,
    imagem: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=400",
    estoque: 12,
    promocao: true,
    destaque: false
  },
  {
    id: 3,
    nome: "Whisky Jack Daniels 1L",
    categoria: "destilado",
    preco: 129.90,
    precoAntigo: 159.90,
    desconto: 19,
    imagem: "https://images.unsplash.com/photo-1527281400560-55df5b937f55?w=400",
    estoque: 8,
    promocao: false,
    destaque: true
  },
  {
    id: 4,
    nome: "Coca-Cola 2L",
    categoria: "refrigerante",
    preco: 8.99,
    precoAntigo: 10.99,
    desconto: 18,
    imagem: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400",
    estoque: 100,
    promocao: true,
    destaque: false
  },
  {
    id: 5,
    nome: "Red Bull Energy Drink 250ml",
    categoria: "energetico",
    preco: 7.99,
    precoAntigo: 9.99,
    desconto: 20,
    imagem: "https://images.unsplash.com/photo-1622543925917-763c34f6e099?w=400",
    estoque: 50,
    promocao: false,
    destaque: false
  },
  {
    id: 6,
    nome: "Cerveja Corona Extra 330ml",
    categoria: "cerveja",
    preco: 5.99,
    precoAntigo: 7.99,
    desconto: 25,
    imagem: "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400",
    estoque: 60,
    promocao: true,
    destaque: false
  },
  {
    id: 7,
    nome: "Vinho Branco Chardonnay",
    categoria: "vinho",
    preco: 39.90,
    precoAntigo: 54.90,
    desconto: 27,
    imagem: "https://images.unsplash.com/photo-1560148489-2f77f8e4f48e?w=400",
    estoque: 15,
    promocao: false,
    destaque: false
  },
  {
    id: 8,
    nome: "Vodka Absolut 1L",
    categoria: "destilado",
    preco: 89.90,
    precoAntigo: 119.90,
    desconto: 25,
    imagem: "https://images.unsplash.com/photo-1591367600861-1f6a762e4bb4?w=400",
    estoque: 20,
    promocao: true,
    destaque: true
  }
];

const banners = [
  {
    id: 1,
    titulo: "🔥 MEGA PROMOÇÃO 🔥",
    subtitulo: "Descontos de até 50%",
    texto: "Aproveite preços imperdíveis em bebidas selecionadas",
    bg: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
    titleColor: "#000",
    textColor: "#333"
  },
  {
    id: 2,
    titulo: "⚡ OFERTA RELÂMPAGO ⚡",
    subtitulo: "Válido apenas hoje",
    texto: "Compre 2 cervejas e leve 3 - Corra!",
    bg: "linear-gradient(135deg, #dc3545 0%, #ff6b6b 100%)",
    titleColor: "#fff",
    textColor: "#fff"
  },
  {
    id: 3,
    titulo: "🚚 FRETE GRÁTIS 🚚",
    subtitulo: "Em compras acima de R$ 50",
    texto: "Receba em casa sem custo adicional",
    bg: "linear-gradient(135deg, #000 0%, #333 100%)",
    titleColor: "#ffd700",
    textColor: "#fff"
  }
];

const benefits = [
  { icon: Truck, title: "Entrega Rápida", text: "Em até 30 minutos" },
  { icon: Award, title: "Qualidade Garantida", text: "Produtos premium" },
  { icon: Zap, title: "Ofertas Relâmpago", text: "Todos os dias" },
  { icon: TrendingUp, title: "Melhores Preços", text: "Do mercado" }
];

export default function DuduBebidas() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState(new Set());
  const [currentBanner, setCurrentBanner] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Banner carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Filtrar produtos
  const filteredProducts = produtosData.filter(produto => {
    const matchesSearch = produto.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || produto.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const addToCart = (produto) => {
    setCartCount(prev => prev + 1);
  };

  const categories = [
    { id: 'todos', label: 'Todos', icon: 'bi-grid-fill' },
    { id: 'cerveja', label: 'Cervejas', icon: 'bi-cup-straw' },
    { id: 'vinho', label: 'Vinhos', icon: 'bi-cup' },
    { id: 'destilado', label: 'Destilados', icon: 'bi-droplet-fill' },
    { id: 'refrigerante', label: 'Refrigerantes', icon: 'bi-cup-hot-fill' },
    { id: 'energetico', label: 'Energéticos', icon: 'bi-lightning-charge-fill' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        .navbar-custom {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          background: ${scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 1)'} !important;
          box-shadow: ${scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'};
        }
        
        .logo {
          font-size: 28px;
          font-weight: 900;
          color: #ffd700;
          transition: all 0.3s ease;
          letter-spacing: -1px;
          text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
        }
        .logo:hover {
          transform: scale(1.05);
          text-shadow: 0 4px 20px rgba(255, 215, 0, 0.6);
        }
        .logo span {
          color: white;
          font-weight: 700;
        }
        
        .search-box {
          border: 3px solid #ffd700;
          border-radius: 30px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          background: white;
          box-shadow: 0 2px 10px rgba(255, 215, 0, 0.2);
        }
        .search-box:focus-within {
          box-shadow: 0 0 0 4px rgba(255, 215, 0, 0.2), 0 4px 20px rgba(255, 215, 0, 0.4);
          transform: scale(1.02);
          border-width: 3px;
        }
        .search-icon {
          color: #ffd700;
          margin-right: 12px;
          font-size: 22px;
        }
        
        .user-btn {
          color: white;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 10px 16px;
          font-weight: 600;
          background: rgba(255, 215, 0, 0.1);
        }
        .user-btn:hover {
          color: #000;
          background: #ffd700;
          border-color: #ffd700;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
        }
        
        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #ffd700;
          color: black;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 8px;
          border-radius: 12px;
          min-width: 22px;
          box-shadow: 0 2px 8px rgba(255, 215, 0, 0.5);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .banner-slide {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 140px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .banner-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          100% { left: 100%; }
        }
        
        .banner-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .banner-indicator:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.4);
        }
        .banner-indicator.active {
          background: #ffd700;
          width: 30px;
          border-radius: 5px;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
        }
        
        .hero-section {
          min-height: 550px;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.6)),
            url("../ChatGPT Image 10 de dez. de 2025, 18_13_46") center/cover no-repeat;
          display: flex;
          align-items: center;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.15), transparent);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }
        
        .btn-primary-custom {
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          color: black;
          border: none;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
          font-size: 16px;
        }
        .btn-primary-custom:hover {
          background: linear-gradient(135deg, #ffed4e 0%, #ffd700 100%);
          color: black;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.5);
        }
        
        .benefit-card {
          background: white;
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid #f0f0f0;
          height: 100%;
        }
        .benefit-card:hover {
          transform: translateY(-10px);
          border-color: #ffd700;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2);
        }
        .benefit-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
        }
        
        .section-title {
          position: relative;
          display: inline-block;
          padding-bottom: 15px;
          font-weight: 800;
          font-size: 36px;
          color: #000;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 80px;
          height: 5px;
          background: linear-gradient(90deg, #ffd700, #ffed4e);
          border-radius: 3px;
        }
        
        .filter-btn {
          border: 2px solid #e0e0e0;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          white-space: nowrap;
          padding: 12px 24px;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .filter-btn:hover {
          border-color: #ffd700;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.2);
          background: #fffef8;
        }
        .filter-btn.active {
          background: linear-gradient(135deg, #000, #1a1a1a) !important;
          color: #ffd700 !important;
          border-color: #000;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          transform: translateY(-3px);
        }
        
        .produto-card {
          background: white;
          border: 2px solid #f0f0f0;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }
        .produto-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #ffd700;
        }
        
        .produto-img-container {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        }
        .produto-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .produto-card:hover .produto-img {
          transform: scale(1.2) rotate(2deg);
        }
        
        .badge-promo {
          position: absolute;
          top: 15px;
          left: 15px;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: black;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 12px;
          font-weight: 800;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .badge-estoque {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          z-index: 2;
          backdrop-filter: blur(10px);
        }
        .badge-estoque.baixo {
          background: linear-gradient(135deg, #ff6b6b, #ff8787);
          animation: pulse 2s infinite;
        }
        
        .btn-favorito {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .btn-favorito:hover {
          background: #ffd700;
          transform: scale(1.2) rotate(10deg);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }
        
        .produto-info {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        
        .btn-add-cart {
          background: linear-gradient(135deg, #000, #1a1a1a);
          color: #ffd700;
          border: none;
          font-weight: 700;
          transition: all 0.3s ease;
          width: 100%;
          padding: 14px;
          border-radius: 15px;
          font-size: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .btn-add-cart:hover {
          background: linear-gradient(135deg, #ffd700, #ffed4e) !important;
          color: black !important;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
        }
        
        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }
        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #ffd700, #ffed4e);
          border-radius: 10px;
        }
        
        .footer-custom {
          background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }
        .footer-custom::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ffd700, #ffed4e, #ffd700);
        }
      `}</style>

      {/* Header */}
      <header className={`sticky-top navbar-custom`}>
        <nav className="navbar navbar-dark">
          <div className="container-fluid px-3 px-lg-4">
            <a href="#" className="navbar-brand logo">
              Dudu <span>Bebidas</span>
            </a>

            {/* Search Desktop */}
            <div className="d-none d-lg-flex flex-grow-1 mx-4" style={{ maxWidth: '500px' }}>
              <div className="search-box w-100">
                <Search className="search-icon" size={22} />
                <input
                  type="search"
                  placeholder="Buscar bebidas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control border-0"
                  style={{ background: 'transparent', outline: 'none', boxShadow: 'none', fontSize: '15px' }}
                />
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <a href="#" className="user-btn d-none d-lg-flex align-items-center gap-2 text-decoration-none">
                <User size={20} />
                <span>Entrar</span>
              </a>
              
              <button className="user-btn position-relative d-flex align-items-center gap-2">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
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
                style={{ background: 'transparent', outline: 'none', boxShadow: 'none' }}
              />
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-black border-top py-3 d-lg-none" style={{ borderColor: '#333 !important' }}>
            <div className="container-fluid px-3">
              <a href="#hero" className="d-block text-white text-decoration-none py-2 px-3 rounded mb-1">
                <i className="bi bi-house-door-fill me-2"></i>Início
              </a>
              <a href="#produtos" className="d-block text-white text-decoration-none py-2 px-3 rounded mb-1">
                <i className="bi bi-tag-fill me-2"></i>Promoções
              </a>
              <a href="#produtos" className="d-block text-white text-decoration-none py-2 px-3 rounded mb-1">
                <i className="bi bi-grid-fill me-2"></i>Categorias
              </a>
              <a href="#contato" className="d-block text-white text-decoration-none py-2 px-3 rounded">
                <i className="bi bi-envelope-fill me-2"></i>Contato
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Banner Carousel */}
      <div className="position-relative overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`banner-slide ${index === currentBanner ? '' : 'position-absolute top-0 start-0 w-100'}`}
            style={{ 
              opacity: index === currentBanner ? 1 : 0,
              background: banner.bg
            }}
          >
            <div className="container text-center py-4 position-relative" style={{ zIndex: 1 }}>
              <h4 className="fw-bold mb-2" style={{ color: banner.titleColor, fontSize: '24px', letterSpacing: '1px' }}>
                {banner.titulo}
              </h4>
              <p className="fw-semibold mb-1" style={{ color: banner.titleColor, fontSize: '16px', opacity: 0.9 }}>
                {banner.subtitulo}
              </p>
              <p className="mb-0" style={{ color: banner.textColor, fontSize: '14px' }}>
                {banner.texto}
              </p>
            </div>
          </div>
        ))}
        
        <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-2" style={{ zIndex: 10 }}>
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`banner-indicator ${index === currentBanner ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
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

      {/* Benefits Section */}
      <section className="py-5" style={{ background: 'white' }}>
        <div className="container">
          <div className="row g-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="col-6 col-lg-3">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <Icon size={32} color="#000" strokeWidth={2.5} />
                    </div>
                    <h5 className="fw-bold mb-2" style={{ fontSize: '18px' }}>
                      {benefit.title}
                    </h5>
                    <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                      {benefit.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h2 className="section-title">Nossos Produtos</h2>
            </div>
            <div className="text-end">
              <span className="badge bg-dark px-3 py-2" style={{ fontSize: '14px' }}>
                {filteredProducts.length} produtos disponíveis
              </span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="d-flex gap-3 overflow-x-auto pb-3 mb-5" style={{ scrollbarWidth: 'thin' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`btn filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
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
                <div key={produto.id} className="col" style={{ animationDelay: `${index * 0.05}s` }}>
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
                        <span className={`badge-estoque ${produto.estoque < 15 ? 'baixo' : ''}`}>
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
                          fill={favorites.has(produto.id) ? '#ff0000' : 'none'}
                          color={favorites.has(produto.id) ? '#ff0000' : '#000'}
                          strokeWidth={2.5}
                        />
                      </button>
                    </div>

                    <div className="produto-info">
                      <span className="d-inline-block px-2 py-1 rounded mb-2" style={{ 
                        background: '#f8f9fa', 
                        color: '#666', 
                        fontSize: '11px', 
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {produto.categoria}
                      </span>
                      
                      <h3 className="fw-semibold mb-3" style={{ 
                        fontSize: '15px', 
                        lineHeight: '1.4', 
                        minHeight: '42px',
                        color: '#000'
                      }}>
                        {produto.nome}
                      </h3>
                      
                      <div className="mb-3">
                        <div className="d-flex align-items-baseline gap-2 mb-1">
                          <span className="fw-bold" style={{ fontSize: '24px', color: '#ffd700' }}>
                            R$ {produto.preco.toFixed(2)}
                          </span>
                        </div>
                        {produto.precoAntigo && (
                          <div className="d-flex align-items-center gap-2">
                            <span className="text-muted text-decoration-line-through" style={{ fontSize: '13px' }}>
                              R$ {produto.precoAntigo.toFixed(2)}
                            </span>
                            <span className="badge" style={{ 
                              background: 'linear-gradient(135deg, #000, #1a1a1a)',
                              color: '#ffd700',
                              fontSize: '11px',
                              padding: '4px 8px'
                            }}>
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
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <div className="p-5">
                  <i className="bi bi-search" style={{ fontSize: '64px', color: '#ddd' }}></i>
                  <h4 className="mt-4 mb-2">Nenhum produto encontrado</h4>
                  <p className="text-muted">Tente buscar por outro termo ou categoria</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="footer-custom text-white py-5 mt-5">
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <h5 className="logo mb-4">Dudu <span>Bebidas</span></h5>
              <p className="text-light mb-4" style={{ lineHeight: 1.8, fontSize: '14px', opacity: 0.9 }}>
                As melhores bebidas com entrega rápida e preços imbatíveis. Sua satisfação é nossa prioridade!
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="d-flex align-items-center justify-content-center" style={{
                  width: '45px',
                  height: '45px',
                  background: 'rgba(255, 215, 0, 0.1)',
                  borderRadius: '12px',
                  color: '#ffd700',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}>
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="#" className="d-flex align-items-center justify-content-center" style={{
                  width: '45px',
                  height: '45px',
                  background: 'rgba(255, 215, 0, 0.1)',
                  borderRadius: '12px',
                  color: '#ffd700',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}>
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="#" className="d-flex align-items-center justify-content-center" style={{
                  width: '45px',
                  height: '45px',
                  background: 'rgba(255, 215, 0, 0.1)',
                  borderRadius: '12px',
                  color: '#ffd700',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}>
                  <i className="bi bi-whatsapp fs-5"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <h6 className="fw-bold mb-4" style={{ color: '#ffd700', fontSize: '18px' }}>
                Links Rápidos
              </h6>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="#hero" className="text-light text-decoration-none d-flex align-items-center" style={{ 
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    opacity: 0.9 
                  }}>
                    <i className="bi bi-chevron-right me-2" style={{ color: '#ffd700' }}></i>
                    Início
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#produtos" className="text-light text-decoration-none d-flex align-items-center" style={{ 
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    opacity: 0.9 
                  }}>
                    <i className="bi bi-chevron-right me-2" style={{ color: '#ffd700' }}></i>
                    Produtos
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-light text-decoration-none d-flex align-items-center" style={{ 
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    opacity: 0.9 
                  }}>
                    <i className="bi bi-chevron-right me-2" style={{ color: '#ffd700' }}></i>
                    Sobre Nós
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-light text-decoration-none d-flex align-items-center" style={{ 
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    opacity: 0.9 
                  }}>
                    <i className="bi bi-chevron-right me-2" style={{ color: '#ffd700' }}></i>
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h6 className="fw-bold mb-4" style={{ color: '#ffd700', fontSize: '18px' }}>
                Entre em Contato
              </h6>
              <div className="mb-3 d-flex align-items-start" style={{ fontSize: '14px' }}>
                <i className="bi bi-whatsapp me-3 mt-1" style={{ color: '#ffd700', fontSize: '18px' }}></i>
                <div style={{ opacity: 0.9 }}>
                  <div className="fw-semibold mb-1">WhatsApp</div>
                  <div>(11) 99999-9999</div>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-start" style={{ fontSize: '14px' }}>
                <i className="bi bi-envelope me-3 mt-1" style={{ color: '#ffd700', fontSize: '18px' }}></i>
                <div style={{ opacity: 0.9 }}>
                  <div className="fw-semibold mb-1">Email</div>
                  <div>contato@dudububebidas.com.br</div>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-start" style={{ fontSize: '14px' }}>
                <i className="bi bi-geo-alt me-3 mt-1" style={{ color: '#ffd700', fontSize: '18px' }}></i>
                <div style={{ opacity: 0.9 }}>
                  <div className="fw-semibold mb-1">Localização</div>
                  <div>São Paulo, SP</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="col text-center">
              <p className="mb-0" style={{ fontSize: '14px', opacity: 0.8 }}>
                &copy; 2024 Dudu Bebidas. Todos os direitos reservados. | Beba com Moderação.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}