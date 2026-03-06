/// <reference types="cypress" />

import pedidoPage from "../support/page_objects/pedido.page";
//const produtos = require("../fixtures/produtos.json");



context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações


        cy.fixture('produtos').then((produtos) => {
            produtos.forEach(prod => {
                //cy.contains('Comprar').click()
                cy.get('[name="s"]').eq(1).type(prod.nome)
                cy.get('.button-search').eq(1).click()
                cy.get('[title="'+ prod.tamanho +'"]').click()
                cy.contains(prod.cor).click()
                cy.get('.input-text').clear().type(prod.quantidade)

                //pedidoPage.realizarPedido(prod.nome, prod.tamanho, prod.cor, prod.quantidade)
                //pedidoPage.verificarCarrinho(prod.nome, prod.tamnho, prod.cor, prod.quantidade)
            })
        })



        //pedidoPage.concluirCompra()
        //cy.get('.page-title').should('have', 'PEDIDO RECEBIDO')
    });


})