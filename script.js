const shippingFee = 15.99;

const categoryMeta = {
  camisetas: {
    label: "Camisetas",
    description: "Malhas premium, cortes essenciais e oversized.",
    background: "linear-gradient(135deg, #101010 0%, #31343a 52%, #c8a45d 100%)"
  },
  calcas: {
    label: "Calças",
    description: "Jeans, cargos, joggers e moletons para rotina urbana.",
    background: "linear-gradient(135deg, #17191d 0%, #41464d 55%, #3c6df0 100%)"
  },
  jaquetas: {
    label: "Jaquetas",
    description: "Camadas fortes para elevar qualquer composição.",
    background: "linear-gradient(135deg, #070707 0%, #2b2d31 48%, #8b764a 100%)"
  },
  tenis: {
    label: "Tênis",
    description: "Sneakers e modelos casuais com visual premium.",
    background: "linear-gradient(135deg, #0c0d0f 0%, #34373d 50%, #e5e5df 100%)"
  }
};

const products = [
  {
    id: 1,
    name: "Camiseta Essential Preta",
    category: "camisetas",
    image: "",
    price: 99.9,
    description: "Algodão macio, gola firme e corte versátil para todo dia.",
    tone: "linear-gradient(135deg, #050505, #272727)"
  },
  {
    id: 2,
    name: "Camiseta Essential Branca",
    category: "camisetas",
    image: "",
    price: 99.9,
    description: "Base limpa em malha premium com toque leve e respirável.",
    tone: "linear-gradient(135deg, #f7f7f4, #cfcfc8)"
  },
  {
    id: 3,
    name: "Camiseta Premium Azul",
    category: "camisetas",
    image: "",
    price: 119.9,
    description: "Azul profundo com acabamento minimalista e caimento moderno.",
    tone: "linear-gradient(135deg, #071225, #3159d4)"
  },
  {
    id: 4,
    name: "Camiseta Street Cinza",
    category: "camisetas",
    image: "",
    price: 109.9,
    description: "Cinza urbano com visual limpo para combinações fáceis.",
    tone: "linear-gradient(135deg, #22252a, #888c92)"
  },
  {
    id: 5,
    name: "Camiseta Oversized",
    category: "camisetas",
    image: "",
    price: 129.9,
    description: "Modelagem ampla com presença streetwear e toque premium.",
    tone: "linear-gradient(135deg, #0e0e0e, #70624a)"
  },
  {
    id: 6,
    name: "Camiseta Minimalista",
    category: "camisetas",
    image: "",
    price: 114.9,
    description: "Design sem excesso, perfeita para looks elegantes.",
    tone: "linear-gradient(135deg, #f4f3ee, #b9b9b4)"
  },
  {
    id: 7,
    name: "Camiseta Urban",
    category: "camisetas",
    image: "",
    price: 124.9,
    description: "Visual urbano com estrutura encorpada e acabamento premium.",
    tone: "linear-gradient(135deg, #15171b, #3c6df0)"
  },
  {
    id: 8,
    name: "Camiseta Classic",
    category: "camisetas",
    image: "",
    price: 104.9,
    description: "Clássica, confortável e pronta para qualquer ocasião.",
    tone: "linear-gradient(135deg, #202226, #d5d2c9)"
  },
  {
    id: 9,
    name: "Camiseta Premium Black",
    category: "camisetas",
    image: "",
    price: 139.9,
    description: "Preta intensa com toque refinado e costura reforçada.",
    tone: "linear-gradient(135deg, #000000, #1b1b1d)"
  },
  {
    id: 10,
    name: "Camiseta Premium White",
    category: "camisetas",
    image: "",
    price: 139.9,
    description: "Branco sofisticado em tecido encorpado de alta durabilidade.",
    tone: "linear-gradient(135deg, #ffffff, #d8d6cf)"
  },
  {
    id: 11,
    name: "Jeans Slim",
    category: "calcas",
    image: "",
    price: 219.9,
    description: "Lavagem azul escura com corte slim e elastano confortável.",
    tone: "linear-gradient(135deg, #0e1b2c, #375a84)"
  },
  {
    id: 12,
    name: "Jeans Reta",
    category: "calcas",
    image: "",
    price: 209.9,
    description: "Modelagem reta atemporal com acabamento resistente.",
    tone: "linear-gradient(135deg, #18202a, #627084)"
  },
  {
    id: 13,
    name: "Jeans Black",
    category: "calcas",
    image: "",
    price: 229.9,
    description: "Denim preto para composições noturnas e urbanas.",
    tone: "linear-gradient(135deg, #020202, #2c2f34)"
  },
  {
    id: 14,
    name: "Cargo Verde",
    category: "calcas",
    image: "",
    price: 239.9,
    description: "Bolsos funcionais e verde fechado com pegada utilitária.",
    tone: "linear-gradient(135deg, #182219, #56654c)"
  },
  {
    id: 15,
    name: "Cargo Preta",
    category: "calcas",
    image: "",
    price: 239.9,
    description: "Cargo preta com volume controlado e presença street.",
    tone: "linear-gradient(135deg, #080808, #3a3a3c)"
  },
  {
    id: 16,
    name: "Moletom Casual",
    category: "calcas",
    image: "",
    price: 189.9,
    description: "Conforto premium com visual limpo para dias leves.",
    tone: "linear-gradient(135deg, #2a2d32, #9a9c9f)"
  },
  {
    id: 17,
    name: "Jogger Preta",
    category: "calcas",
    image: "",
    price: 179.9,
    description: "Punho ajustado, tecido flexível e caimento esportivo.",
    tone: "linear-gradient(135deg, #090909, #202226)"
  },
  {
    id: 18,
    name: "Jogger Cinza",
    category: "calcas",
    image: "",
    price: 174.9,
    description: "Jogger cinza com estrutura leve e acabamento discreto.",
    tone: "linear-gradient(135deg, #33363a, #a7a8a8)"
  },
  {
    id: 19,
    name: "Jaqueta Jeans",
    category: "jaquetas",
    image: "",
    price: 289.9,
    description: "Camada clássica em denim encorpado e lavagem premium.",
    tone: "linear-gradient(135deg, #132034, #456990)"
  },
  {
    id: 20,
    name: "Jaqueta Bomber",
    category: "jaquetas",
    image: "",
    price: 319.9,
    description: "Silhueta bomber com acabamento urbano e punhos firmes.",
    tone: "linear-gradient(135deg, #060606, #4a463f)"
  },
  {
    id: 21,
    name: "Jaqueta Corta-Vento",
    category: "jaquetas",
    image: "",
    price: 279.9,
    description: "Leve, funcional e ideal para sobreposição em meia estação.",
    tone: "linear-gradient(135deg, #111827, #3c6df0)"
  },
  {
    id: 22,
    name: "Jaqueta Streetwear",
    category: "jaquetas",
    image: "",
    price: 339.9,
    description: "Volume moderno, visual street e detalhes discretos.",
    tone: "linear-gradient(135deg, #171717, #777064)"
  },
  {
    id: 23,
    name: "Jaqueta Premium",
    category: "jaquetas",
    image: "",
    price: 389.9,
    description: "Construção refinada para um visual forte e sofisticado.",
    tone: "linear-gradient(135deg, #050505, #c8a45d)"
  },
  {
    id: 24,
    name: "Jaqueta Casual",
    category: "jaquetas",
    image: "",
    price: 299.9,
    description: "Peça versátil para looks casuais com acabamento superior.",
    tone: "linear-gradient(135deg, #2b2d31, #c8c6bd)"
  },
  {
    id: 25,
    name: "Sneaker Urban",
    category: "tenis",
    image: "",
    price: 299.9,
    description: "Sneaker de linhas limpas para rotina urbana.",
    tone: "linear-gradient(135deg, #111111, #50545a)"
  },
  {
    id: 26,
    name: "Sneaker White",
    category: "tenis",
    image: "",
    price: 289.9,
    description: "Branco essencial com solado confortável e visual premium.",
    tone: "linear-gradient(135deg, #ffffff, #cfd2d8)"
  },
  {
    id: 27,
    name: "Sneaker Black",
    category: "tenis",
    image: "",
    price: 289.9,
    description: "Preto total para combinações limpas e noturnas.",
    tone: "linear-gradient(135deg, #020202, #2f3137)"
  },
  {
    id: 28,
    name: "Running Pro",
    category: "tenis",
    image: "",
    price: 349.9,
    description: "Visual esportivo com energia premium e amortecimento leve.",
    tone: "linear-gradient(135deg, #111827, #3c6df0)"
  },
  {
    id: 29,
    name: "Street Pro",
    category: "tenis",
    image: "",
    price: 329.9,
    description: "Tênis street robusto com linhas marcantes e confortáveis.",
    tone: "linear-gradient(135deg, #101010, #8d794e)"
  },
  {
    id: 30,
    name: "Casual Premium",
    category: "tenis",
    image: "",
    price: 319.9,
    description: "Modelo casual refinado para elevar looks minimalistas.",
    tone: "linear-gradient(135deg, #202226, #d0c6ac)"
  },
  {
    id: 31,
    name: "Casual White",
    category: "tenis",
    image: "",
    price: 279.9,
    description: "Tênis branco casual, leve e fácil de combinar.",
    tone: "linear-gradient(135deg, #f8f8f5, #babdc4)"
  },
  {
    id: 32,
    name: "Casual Black",
    category: "tenis",
    image: "",
    price: 279.9,
    description: "Casual preto com acabamento fosco e discreto.",
    tone: "linear-gradient(135deg, #030303, #25282f)"
  },
  {
    id: 33,
    name: "Sport Max",
    category: "tenis",
    image: "",
    price: 369.9,
    description: "Performance visual com pegada esportiva e urbana.",
    tone: "linear-gradient(135deg, #0b0d12, #3c6df0 55%, #c8a45d)"
  }
];

const testimonials = [
  ["Lucas Almeida", "São Paulo, SP", "Comprei a camiseta preta e o visual é exatamente o que eu queria: simples, forte e com cara de peça premium."],
  ["Rafael Martins", "Curitiba, PR", "A loja passa confiança logo de primeira. O carrinho é rápido e o catálogo ficou fácil de navegar."],
  ["Bruno Castro", "Belo Horizonte, MG", "As categorias ajudam muito. Em poucos cliques encontrei camiseta, calça e tênis para montar o look."],
  ["Mateus Rocha", "Rio de Janeiro, RJ", "Gostei da estética limpa. Parece marca de verdade, com acabamento visual bem acima do comum."],
  ["Diego Nunes", "Salvador, BA", "O checkout demonstrativo deixa claro que dá para plugar o pagamento depois sem refazer tudo."],
  ["André Lima", "Florianópolis, SC", "No celular ficou ótimo. Cards grandes, botão fácil de tocar e carrinho bem organizado."]
];

let cart = [];
let activeCategory = "todos";
let toastTimer;

const dom = {
  loader: document.querySelector("#loader"),
  header: document.querySelector("#site-header"),
  nav: document.querySelector("#nav"),
  menuButton: document.querySelector("#menu-button"),
  categoryCards: document.querySelector("#category-cards"),
  featuredProducts: document.querySelector("#featured-products"),
  productsGrid: document.querySelector("#products-grid"),
  filterButtons: document.querySelectorAll(".filter-button"),
  cartButton: document.querySelector("#cart-button"),
  cartPanel: document.querySelector("#cart-panel"),
  closeCart: document.querySelector("#close-cart"),
  overlay: document.querySelector("#overlay"),
  cartItems: document.querySelector("#cart-items"),
  emptyCart: document.querySelector("#empty-cart"),
  cartCount: document.querySelector("#cart-count"),
  cartSubtotal: document.querySelector("#cart-subtotal"),
  cartShipping: document.querySelector("#cart-shipping"),
  cartTotal: document.querySelector("#cart-total"),
  checkoutButton: document.querySelector("#checkout-button"),
  checkoutModal: document.querySelector("#checkout-modal"),
  closeCheckout: document.querySelector("#close-checkout"),
  checkoutForm: document.querySelector("#checkout-form"),
  checkoutTotal: document.querySelector("#checkout-total"),
  paymentMethod: document.querySelector("#payment-method"),
  paymentNote: document.querySelector("#payment-note"),
  successModal: document.querySelector("#success-modal"),
  closeSuccess: document.querySelector("#close-success"),
  successOk: document.querySelector("#success-ok"),
  testimonials: document.querySelector("#testimonials"),
  newsletterForm: document.querySelector("#newsletter-form"),
  contactForm: document.querySelector("#contact-form"),
  toast: document.querySelector("#toast")
};

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

function getProductsByCategory(category) {
  if (category === "todos") {
    return products;
  }

  return products.filter((product) => product.category === category);
}

function createProductCard(product, index = 0) {
  const card = document.createElement("article");
  card.className = `product-card reveal ${index % 2 === 0 ? "slide-left" : "slide-right"}`;
  card.style.setProperty("--product-bg", product.tone);
  card.innerHTML = `
    <div class="product-media" role="img" aria-label="Imagem placeholder elegante de ${product.name}">
      <span class="product-tag">${categoryMeta[product.category].label}</span>
      <span class="product-visual" aria-hidden="true"></span>
    </div>
    <div class="product-info">
      <div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
      <div class="product-bottom">
        <span class="price">${formatCurrency(product.price)}</span>
        <button class="add-to-cart" type="button" data-id="${product.id}" aria-label="Adicionar ${product.name} ao carrinho">Adicionar</button>
      </div>
    </div>
  `;

  return card;
}

function renderCategoryCards() {
  dom.categoryCards.innerHTML = Object.entries(categoryMeta)
    .map(([key, meta]) => `
      <button class="category-card reveal" type="button" data-category="${key}" style="--category-bg: ${meta.background}">
        <span>
          <h3>${meta.label}</h3>
          <p>${meta.description}</p>
        </span>
      </button>
    `)
    .join("");
}

function renderProducts() {
  const filteredProducts = getProductsByCategory(activeCategory);
  dom.productsGrid.innerHTML = "";

  filteredProducts.forEach((product, index) => {
    dom.productsGrid.appendChild(createProductCard(product, index));
  });

  observeReveals();
}

function renderFeaturedProducts() {
  const featuredIds = [9, 14, 20, 23, 28, 33];
  const fragment = document.createDocumentFragment();

  products
    .filter((product) => featuredIds.includes(product.id))
    .forEach((product, index) => fragment.appendChild(createProductCard(product, index)));

  dom.featuredProducts.appendChild(fragment);
}

function renderTestimonials() {
  dom.testimonials.innerHTML = testimonials
    .map(([name, location, text], index) => `
      <article class="testimonial-card reveal ${index % 2 ? "slide-right" : "slide-left"}">
        <p>“${text}”</p>
        <strong>${name}</strong>
        <span>${location}</span>
      </article>
    `)
    .join("");
}

function setActiveFilter(category) {
  activeCategory = category;

  dom.filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === category);
  });

  renderProducts();
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (!product) {
    return;
  }

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCart();
  openCart();
  showToast(`${product.name} foi adicionado ao carrinho.`);
  animateCartCount();
}

function updateCart() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + shippingFee;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  dom.cartCount.textContent = totalItems;
  dom.cartSubtotal.textContent = formatCurrency(subtotal);
  dom.cartShipping.textContent = formatCurrency(shippingFee);
  dom.cartTotal.textContent = formatCurrency(total);
  dom.checkoutTotal.textContent = formatCurrency(total);
  dom.checkoutButton.disabled = cart.length === 0;

  dom.cartItems.innerHTML = "";

  if (cart.length === 0) {
    dom.cartItems.appendChild(dom.emptyCart);
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("article");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <div class="cart-thumb" style="--product-bg: ${item.tone}" aria-hidden="true"></div>
      <div>
        <h3>${item.name}</h3>
        <p>${formatCurrency(item.price)} cada</p>
        <div class="qty-controls" aria-label="Quantidade de ${item.name}">
          <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Diminuir quantidade">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-action="increase" data-id="${item.id}" aria-label="Aumentar quantidade">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-action="remove" data-id="${item.id}" aria-label="Remover ${item.name}">×</button>
    `;
    dom.cartItems.appendChild(cartItem);
  });
}

function changeQuantity(productId, action) {
  const item = cart.find((cartItem) => cartItem.id === productId);

  if (!item) {
    return;
  }

  if (action === "increase") {
    item.quantity += 1;
  }

  if (action === "decrease") {
    item.quantity -= 1;
  }

  if (action === "remove" || item.quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.id !== productId);
  }

  updateCart();
  animateCartCount();
}

function openCart() {
  dom.cartPanel.classList.add("is-open");
  dom.cartPanel.setAttribute("aria-hidden", "false");
  dom.overlay.hidden = false;
  document.body.classList.add("is-locked");
}

function closeCartPanel() {
  dom.cartPanel.classList.remove("is-open");
  dom.cartPanel.setAttribute("aria-hidden", "true");
  dom.overlay.hidden = true;
  document.body.classList.remove("is-locked");
}

function animateCartCount() {
  dom.cartCount.classList.remove("bump");
  window.requestAnimationFrame(() => dom.cartCount.classList.add("bump"));
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    dom.toast.classList.remove("is-visible");
  }, 2400);
}

function observeReveals() {
  const reveals = document.querySelectorAll(".reveal:not(.is-observed)");

  reveals.forEach((element) => {
    element.classList.add("is-observed");
    revealObserver.observe(element);
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -40px"
  }
);

function handleHeaderState() {
  dom.header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function toggleMenu() {
  const isOpen = dom.nav.classList.toggle("is-open");
  dom.header.classList.toggle("is-open", isOpen);
  dom.menuButton.setAttribute("aria-expanded", String(isOpen));
}

function closeMenu() {
  dom.nav.classList.remove("is-open");
  dom.header.classList.remove("is-open");
  dom.menuButton.setAttribute("aria-expanded", "false");
}

function bindEvents() {
  window.addEventListener("scroll", handleHeaderState, { passive: true });

  dom.menuButton.addEventListener("click", toggleMenu);
  dom.nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      closeMenu();
    }
  });

  dom.categoryCards.addEventListener("click", (event) => {
    const card = event.target.closest("[data-category]");
    if (!card) {
      return;
    }

    setActiveFilter(card.dataset.category);
    document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
  });

  dom.filterButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveFilter(button.dataset.category));
  });

  document.body.addEventListener("click", (event) => {
    const addButton = event.target.closest(".add-to-cart");
    if (!addButton) {
      return;
    }

    addToCart(Number(addButton.dataset.id));
  });

  dom.cartButton.addEventListener("click", openCart);
  dom.closeCart.addEventListener("click", closeCartPanel);
  dom.overlay.addEventListener("click", closeCartPanel);

  dom.cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) {
      return;
    }

    changeQuantity(Number(button.dataset.id), button.dataset.action);
  });

  dom.checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
      return;
    }

    closeCartPanel();
    dom.checkoutModal.showModal();
  });

  dom.closeCheckout.addEventListener("click", () => dom.checkoutModal.close());
  dom.closeSuccess.addEventListener("click", () => dom.successModal.close());
  dom.successOk.addEventListener("click", () => dom.successModal.close());

  dom.paymentMethod.addEventListener("change", () => {
    const notes = {
      link: "No futuro, este botão poderá abrir um link de pagamento gerado pelo banco.",
      pix: "Estrutura preparada para receber chave, QR Code ou link PIX.",
      card: "Estrutura visual pronta para integrar um gateway de cartão.",
      "": "Nenhum pagamento real será processado nesta versão."
    };

    dom.paymentNote.textContent = notes[dom.paymentMethod.value];
  });

  dom.checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const order = {
      customer: {
        name: document.querySelector("#full-name").value,
        email: document.querySelector("#checkout-email").value,
        address: document.querySelector("#address").value
      },
      paymentMethod: dom.paymentMethod.value,
      items: cart,
      total: dom.checkoutTotal.textContent,
      createdAt: new Date().toISOString()
    };

    console.log("Pedido pronto para integração futura:", order);
    cart = [];
    updateCart();
    dom.checkoutForm.reset();
    dom.paymentNote.textContent = "Nenhum pagamento real será processado nesta versão.";
    dom.checkoutModal.close();
    dom.successModal.showModal();
  });

  dom.newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Cadastro realizado. Você receberá novidades da Wall Seventy.");
    dom.newsletterForm.reset();
  });

  dom.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Mensagem enviada. A equipe entrará em contato em breve.");
    dom.contactForm.reset();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCartPanel();
      closeMenu();
    }
  });
}

function init() {
  renderCategoryCards();
  renderFeaturedProducts();
  renderProducts();
  renderTestimonials();
  updateCart();
  bindEvents();
  handleHeaderState();
  observeReveals();

  window.setTimeout(() => {
    dom.loader.classList.add("is-hidden");
  }, 900);
}

document.addEventListener("DOMContentLoaded", init);





