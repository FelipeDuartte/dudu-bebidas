import React, { useState, useEffect } from "react";
import "./App.css";
import { Truck, Award, Zap, TrendingUp } from "lucide-react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";

// Dados dos produtos
const produtosData = [
  {
    id: 1,
    nome: "Cerveja Heineken Long Neck 330ml",
    categoria: "cerveja",
    preco: 4.99,
    precoAntigo: 6.99,
    desconto: 29,
    imagem:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400",
    estoque: 45,
    promocao: true,
    destaque: true,
  },
  {
    id: 2,
    nome: "Vinho Tinto Cabernet Sauvignon",
    categoria: "vinho",
    preco: 45.9,
    precoAntigo: 65.9,
    desconto: 30,
    imagem:
      "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=400",
    estoque: 12,
    promocao: true,
    destaque: false,
  },
  {
    id: 3,
    nome: "Whisky Jack Daniels 1L",
    categoria: "destilado",
    preco: 129.9,
    precoAntigo: 159.9,
    desconto: 19,
    imagem:
      "https://images.unsplash.com/photo-1527281400560-55df5b937f55?w=400",
    estoque: 8,
    promocao: false,
    destaque: true,
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
    destaque: false,
  },
  {
    id: 5,
    nome: "Red Bull Energy Drink 250ml",
    categoria: "energetico",
    preco: 7.99,
    precoAntigo: 9.99,
    desconto: 20,
    imagem:
      "https://images.unsplash.com/photo-1622543925917-763c34f6e099?w=400",
    estoque: 50,
    promocao: false,
    destaque: false,
  },
  {
    id: 6,
    nome: "Cerveja Corona Extra 330ml",
    categoria: "cerveja",
    preco: 5.99,
    precoAntigo: 7.99,
    desconto: 25,
    imagem:
      "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400",
    estoque: 60,
    promocao: true,
    destaque: false,
  },
  {
    id: 7,
    nome: "Vinho Branco Chardonnay",
    categoria: "vinho",
    preco: 39.9,
    precoAntigo: 54.9,
    desconto: 27,
    imagem: "https://images.unsplash.com/photo-1560148489-2f77f8e4f48e?w=400",
    estoque: 15,
    promocao: false,
    destaque: false,
  },
  {
    id: 8,
    nome: "Vodka Absolut 1L",
    categoria: "destilado",
    preco: 89.9,
    precoAntigo: 119.9,
    desconto: 25,
    imagem:
      "https://images.unsplash.com/photo-1591367600861-1f6a762e4bb4?w=400",
    estoque: 20,
    promocao: true,
    destaque: true,
  },
];

const banners = [
  {
    id: 1,
    titulo: "🔥 MEGA PROMOÇÃO 🔥",
    subtitulo: "Descontos de até 50%",
    texto: "Aproveite preços imperdíveis em bebidas selecionadas",
    bg: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
    titleColor: "#000",
    textColor: "#333",
  },
  {
    id: 2,
    titulo: "⚡ OFERTA RELÂMPAGO ⚡",
    subtitulo: "Válido apenas hoje",
    texto: "Compre 2 cervejas e leve 3 - Corra!",
    bg: "linear-gradient(135deg, #dc3545 0%, #ff6b6b 100%)",
    titleColor: "#fff",
    textColor: "#fff",
  },
  {
    id: 3,
    titulo: "🚚 FRETE GRÁTIS 🚚",
    subtitulo: "Em compras acima de R$ 50",
    texto: "Receba em casa sem custo adicional",
    bg: "linear-gradient(135deg, #000 0%, #333 100%)",
    titleColor: "#ffd700",
    textColor: "#fff",
  },
];

const benefits = [
  { icon: Truck, title: "Entrega Rápida", text: "Em até 30 minutos" },
  { icon: Award, title: "Qualidade Garantida", text: "Produtos premium" },
  { icon: Zap, title: "Ofertas Relâmpago", text: "Todos os dias" },
  { icon: TrendingUp, title: "Melhores Preços", text: "Do mercado" },
];

export default function DuduBebidas() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState(new Set());
  const [currentBanner, setCurrentBanner] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Banner carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Filtrar produtos
  const filteredProducts = produtosData.filter((produto) => {
    const matchesSearch = produto.nome
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "todos" || produto.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
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
    setCartCount((prev) => prev + 1);
  };

  const categories = [
    { id: "todos", label: "Todos", icon: "bi-grid-fill" },
    { id: "cerveja", label: "Cervejas", icon: "bi-cup-straw" },
    { id: "vinho", label: "Vinhos", icon: "bi-cup" },
    { id: "destilado", label: "Destilados", icon: "bi-droplet-fill" },
    { id: "refrigerante", label: "Refrigerantes", icon: "bi-cup-hot-fill" },
    {
      id: "energetico",
      label: "Energéticos",
      icon: "bi-lightning-charge-fill",
    },
  ];
  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cartCount}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
      />

      <Banner
        banners={banners}
        currentBanner={currentBanner}
        setCurrentBanner={setCurrentBanner}
      />

      <Hero />

      <ProductList
        filteredProducts={filteredProducts}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        toggleFavorite={toggleFavorite}
        addToCart={addToCart}
        favorites={favorites}
      />

    <Benefits benefits={benefits} />

      <Footer />
    </div>
  );
}
