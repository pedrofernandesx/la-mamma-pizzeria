# 🍕 La Mamma Pizzeria 🍕

> Uma experiência de pedido online imersiva e interativa.

Este é um projeto fictício de uma landing page para pizzaria, focado em conversão e experiência do usuário (UX). O diferencial é o sistema de **Montagem de Pedido** via modal, simulando a funcionalidade de aplicativos de delivery.

## 🎯 Funcionalidades Principais
- **Pizza Builder Interativo:**
  - Escolha de tamanho (4, 8, 12 ou 16 fatias).
  - Lógica de limite de sabores (ex: Pizza média aceita até 2 sabores).
  - Feedback visual de seleção.
  
- **Checkout Simulado:**
  - Alternância entre "Entrega" e "Retirada" (esconde campos de endereço).
  - Seleção de método de pagamento.
  - Cálculo automático do valor total em tempo real.

- **Design Responsivo:**
  - Layout *Mobile-First*.
  - Hero Section imersiva (100vh).
  - Cards de produtos modernos.

## 🛠️ Tecnologias Utilizadas
- **HTML5 Semântico:** Estrutura limpa e acessível.
- **CSS3 Moderno:** Flexbox, Grid Layout, Variáveis CSS e Animações.
- **JavaScript (Vanilla):** Manipulação de DOM e lógica de estado sem frameworks.

## 🧠 Desafios & Aprendizados
O maior desafio foi criar a lógica do modal sem usar frameworks como React ou Vue. 
- Utilizei **Arrays** para gerenciar os sabores selecionados.
- Implementei validações condicionais (`if/else`) para impedir que o usuário selecione mais sabores do que o tamanho permite.
- Manipulação de classes CSS (`classList.add/remove`) para dar feedback instantâneo ao usuário.

## 📌 Próximos Passos

- [ ] Integrar com API do WhatsApp para enviar o pedido real.
- [ ] Adicionar modo Dark/Light.
- [ ] Criar animações de entrada (Fade-in) ao rolar a página.

---

Desenvolvido por **Pedro Fernandes** para fins de estudo e portfólio. 🚀
