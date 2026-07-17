<div align="center">

# 👕 Wall Seventy

**Loja virtual de roupas premium urbana — front-end 100% estático, sem back-end.**
<img width="959" height="539" alt="image" src="https://github.com/user-attachments/assets/b15f16dc-b84f-4f55-9560-7f6144c9bb09" />


[![Demo](https://img.shields.io/badge/demo-online-black?style=for-the-badge)](https://wallace-2105.github.io/wall-saventy/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**[🔗 Ver demo ao vivo](https://wallace-2105.github.io/wall-saventy/)**

</div>

---

## 📸 Sobre o projeto
<img width="956" height="539" alt="image" src="https://github.com/user-attachments/assets/23977f2c-9489-468d-97f1-027d29c04884" />


Wall Seventy é uma loja virtual completa construída **apenas com HTML, CSS e JavaScript puro**, sem nenhum framework e sem back-end. O objetivo do projeto foi provar que dá para construir uma experiência de e-commerce completa — catálogo, filtros, carrinho, checkout e responsividade — usando só o essencial da web, e deixando a base pronta para evoluir com uma camada de pagamento real.

Este projeto foi criado para meu portfólio, com foco em:

- Organização de código e arquitetura simples de manter
- Boas práticas de UI/UX (responsividade, feedback visual, microinterações)
- Simulação realista de um fluxo de compra completo

## ✨ Funcionalidades

- 🛍️ **Catálogo de produtos** com categorias (camisetas, calças, jaquetas, tênis)
- 🛒 **Carrinho de compras** com painel lateral, contador e controle de quantidade
- 💳 **Checkout** com resumo de pedido e confirmação
- 📱 **Totalmente responsivo** (mobile, tablet e desktop)
- 🎨 **Interface moderna**, com animações e transições suaves
- ⭐ Seções de destaques, depoimentos e FAQ

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização, layout responsivo e animações |
| **JavaScript** | Lógica do carrinho, filtros, checkout e interações |
| **Git & GitHub** | Versionamento |
| **GitHub Pages** | Hospedagem e deploy |

Todos os produtos (nome, descrição, preço, categoria e imagem) ficam centralizados no `script.js`, o que torna a edição do catálogo simples e rápida — sem precisar mexer no HTML.

## 🚀 Como rodar localmente

Não é necessário instalar nada. Basta clonar o repositório e abrir o arquivo `index.html` no navegador:

```bash
git clone https://github.com/wallace-2105/wall-saventy.git
cd wall-saventy
```

Depois é só abrir o `index.html` direto no navegador, ou usar uma extensão como o **Live Server** (VS Code) para um ambiente com recarregamento automático.

## 🧭 Estrutura do projeto

```
wall-saventy/
├── index.html        # Estrutura das páginas e seções
├── style.css          # Estilos, layout e responsividade
├── script.js          # Catálogo de produtos, carrinho e checkout
└── imagens/           # Fotos dos produtos
```

## 💳 Sobre o checkout

O fluxo de compra (carrinho → checkout → confirmação) já está implementado de ponta a ponta na interface. Hoje o pedido é confirmado dentro do próprio site; o próximo passo natural do projeto é conectar esse fluxo a **links de pagamento** (Pix, cartão ou gateway como Mercado Pago/Stripe), o que é possível **sem precisar de um back-end próprio** — o botão de finalizar compra pode redirecionar direto para o link de pagamento gerado pelo provedor.

Essa é uma decisão de arquitetura consciente: manter o projeto 100% estático (fácil de hospedar de graça, sem servidor, sem custo de manutenção) enquanto ainda entrega um checkout funcional de verdade.

## 🗺️ Roadmap

- [ ] Integração com link de pagamento (Pix / cartão)
- [ ] Sistema de favoritos
- [ ] Login de usuário
- [ ] Página de detalhes do produto
- [ ] Filtro por preço e tamanho

## 👤 Autor

**Wallace Coimbra**

- GitHub: [@wallace-2105](https://github.com/wallace-2105)

---

<div align="center">

Se esse projeto te interessou, deixe uma ⭐ no repositório!

</div>
