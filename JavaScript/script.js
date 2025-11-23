const produtos = [
  {
    id: 1,
    nome: "Skol Beats",
    categoria: "cerveja",
    preco: 6.99,
    precoAntigo: 8.99,
    desconto: 22,
    estoque: 45,
    imagem:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400",
  },
  {
    id: 2,
    nome: "Budweiser 350ml",
    categoria: "cerveja",
    preco: 4.5,
    precoAntigo: 5.99,
    desconto: 25,
    estoque: 120,
    imagem:
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400",
  },
  {
    id: 3,
    nome: "Heineken Long Neck",
    categoria: "cerveja",
    preco: 5.99,
    precoAntigo: 7.5,
    desconto: 20,
    estoque: 8,
    imagem:
      "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400",
  },
  {
    id: 4,
    nome: "Corona Extra",
    categoria: "cerveja",
    preco: 6.5,
    precoAntigo: null,
    desconto: 0,
    estoque: 55,
    imagem:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400",
  },
  {
    id: 5,
    nome: "Vinho Tinto Reserva",
    categoria: "vinho",
    preco: 45.9,
    precoAntigo: 59.9,
    desconto: 23,
    estoque: 15,
    imagem:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400",
  },
  {
    id: 6,
    nome: "Vinho Branco Suave",
    categoria: "vinho",
    preco: 38.9,
    precoAntigo: null,
    desconto: 0,
    estoque: 22,
    imagem: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400",
  },
  {
    id: 7,
    nome: "Jack Daniel's",
    categoria: "destilado",
    preco: 129.9,
    precoAntigo: 149.9,
    desconto: 13,
    estoque: 12,
    imagem:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400",
  },
  {
    id: 8,
    nome: "Vodka Absolut",
    categoria: "destilado",
    preco: 89.9,
    precoAntigo: 109.9,
    desconto: 18,
    estoque: 18,
    imagem: "https://images.unsplash.com/photo-1560508331-27a9e92d38a5?w=400",
  },
  {
    id: 9,
    nome: "Coca-Cola 2L",
    categoria: "refrigerante",
    preco: 8.99,
    precoAntigo: 10.99,
    desconto: 18,
    estoque: 200,
    imagem: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400",
  },
  {
    id: 10,
    nome: "Guaraná Antarctica 2L",
    categoria: "refrigerante",
    preco: 7.99,
    precoAntigo: null,
    desconto: 0,
    estoque: 150,
    imagem:
      "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?w=400",
  },
  {
    id: 11,
    nome: "Red Bull 250ml",
    categoria: "energetico",
    preco: 9.99,
    precoAntigo: 12.99,
    desconto: 23,
    estoque: 7,
    imagem:
      "https://images.unsplash.com/photo-1622543925917-763c34f1f0a4?w=400",
  },
  {
    id: 12,
    nome: "Monster Energy",
    categoria: "energetico",
    preco: 8.99,
    precoAntigo: null,
    desconto: 0,
    estoque: 85,
    imagem:
      "https://images.unsplash.com/photo-1622543925373-8c7dc1467a2d?w=400",
  },
  {
    id: 13,
    nome: "Stella Artois",
    categoria: "cerveja",
    preco: 5.9,
    precoAntigo: 7.5,
    desconto: 21,
    estoque: 95,
    imagem:
      "https://images.unsplash.com/photo-1608434780564-ddb76da5f125?w=400",
  },
  {
    id: 14,
    nome: "Espumante Chandon",
    categoria: "vinho",
    preco: 65.9,
    precoAntigo: 79.9,
    desconto: 18,
    estoque: 9,
    imagem:
      "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=400",
  },
  {
    id: 15,
    nome: "Gin Tanqueray",
    categoria: "destilado",
    preco: 119.9,
    precoAntigo: 139.9,
    desconto: 14,
    estoque: 14,
    imagem:
      "https://images.unsplash.com/photo-1599902798034-b6e0be8e1c90?w=400",
  },
  {
    id: 16,
    nome: "Brahma Duplo Malte",
    categoria: "cerveja",
    preco: 3.99,
    precoAntigo: 4.99,
    desconto: 20,
    estoque: 180,
    imagem:
      "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400",
  },
];

// ESTADO DA APLICAÇÃO
let filtroAtivo = "todos";
let favoritos = [];

// RENDERIZAR PRODUTOS
function renderizarProdutos() {
  const grid = document.getElementById("produtosGrid");
  const produtosFiltrados =
    filtroAtivo === "todos"
      ? produtos
      : produtos.filter((p) => p.categoria === filtroAtivo);

  document.getElementById("totalProdutos").textContent =
    produtosFiltrados.length;

  if (produtosFiltrados.length === 0) {
    grid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1 / -1;">
                        <i class="bi bi-inbox"></i>
                        <h4>Nenhum produto encontrado</h4>
                        <p>Tente selecionar outra categoria</p>
                    </div>
                `;
    return;
  }

  grid.innerHTML = produtosFiltrados
    .map(
      (produto) => `
                <div class="produto-card" data-categoria="${produto.categoria}">
                    <div class="produto-img-container">
                        <img src="${produto.imagem}" alt="${
        produto.nome
      }" class="produto-img">
                        ${
                          produto.desconto > 0
                            ? `<span class="badge-promo">-${produto.desconto}%</span>`
                            : ""
                        }
                        ${
                          produto.estoque < 10
                            ? `<span class="badge-estoque baixo">Últimas unidades!</span>`
                            : ""
                        }
                        <button class="btn-favorito ${
                          favoritos.includes(produto.id) ? "active" : ""
                        }" onclick="toggleFavorito(${produto.id})">
                            <i class="bi ${
                              favoritos.includes(produto.id)
                                ? "bi-heart-fill"
                                : "bi-heart"
                            }"></i>
                        </button>
                    </div>
                    <div class="produto-info">
                        <div class="produto-categoria">${
                          produto.categoria
                        }</div>
                        <h3 class="produto-nome">${produto.nome}</h3>
                        <div class="produto-precos">
                            <span class="preco-atual">R$ ${produto.preco.toFixed(
                              2
                            )}</span>
                            ${
                              produto.precoAntigo
                                ? `
                                <span class="preco-antigo">R$ ${produto.precoAntigo.toFixed(
                                  2
                                )}</span>
                                <span class="desconto-percentual">-${
                                  produto.desconto
                                }%</span>
                            `
                                : ""
                            }
                        </div>
                        <button class="btn-add-cart" onclick="adicionarCarrinho(${
                          produto.id
                        })">
                            <i class="bi bi-cart-plus"></i>
                            Adicionar
                        </button>
                    </div>
                </div>
            `
    )
    .join("");
}

// FILTRAR PRODUTOS
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    filtroAtivo = this.dataset.filter;
    renderizarProdutos();
  });
});

// TOGGLE FAVORITO
function toggleFavorito(id) {
  const index = favoritos.indexOf(id);
  if (index > -1) {
    favoritos.splice(index, 1);
  } else {
    favoritos.push(id);
  }
  renderizarProdutos();
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho(id) {
  const produto = produtos.find((p) => p.id === id);
  alert(`${produto.nome} adicionado ao carrinho!`);
  // Aqui você integraria com seu sistema de carrinho real
}

// INICIALIZAR
renderizarProdutos();

function scrollCarousel(id, direction) {
  const carousel = document.getElementById(id);
  const cardWidth = 280; // largura aproximada dos cards
  carousel.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth",
  });
}
