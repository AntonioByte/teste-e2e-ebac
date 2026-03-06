/// <reference types="cypress" />

import pedidoPage from "../support/page_objects/pedido.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      
      pedidoPage.realizarPedido(produto, tamanho, cor, quantidade)
      

      pedidoPage.verificarCarrinho(produto, tamnho, cor, quantidade)
      cy.get('.page-title').should('have', 'PEDIDO RECEBIDO')
  });


})