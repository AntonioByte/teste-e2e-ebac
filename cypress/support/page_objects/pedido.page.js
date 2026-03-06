/// <reference types="cypress"/>
class pedidoPage {

    //Seletores
    menuComprar() {cy.contains('Comprar')}
    campoBuscar() {cy.get('[name="s"]')}
    botaoBuscar() {cy.contains('Search')}
    tamanho(tamanho) {cy.contains(tamanho)}
    cor(cor) {cy.contains(cor)}
    campoQuantidade() {cy.get('.input-text')}
    botaoComprar() {cy.get('.input-text')}
    botaoVerCarrinho() {cy.contains('Ver Carrinho')}
    botaoConcluirComprar() {cy.contains('Concluir Compra')}
    radioTransferencia() {cy.get('#payment_method_bacs')}
    radioCheque() {cy.get('#payment_method_cheque')}
    radioPagEntrega() {cy.get('#payment_method_cod')}
    checkTermos() {cy.get('#terms')}
    botaoFinalizarCompra() {cy.get('#place_order')}
    

    //Métodos
    realizarPedido(produto, tamanho, cor, quantidade){
        this.campoBuscar().type(produto)
        this.botaoBuscar().click()
        this.tamanho(tamanho).click()
        this.cor(cor).click()
        this.campoQuantidade().type(quantidade)
        this.botaoComprar.click()
    }

    verificarCarrinho(produto, tamanho, cor, quantidade){
        this.botaoVerCarrinho.click()
        cy.contains(produto + ' - ' + tamanho + ', ' + cor).should('exist')
        cy.contains(produto + ' - ' + tamanho + ', ' + cor).siblings('.qty').should('equal', quantidade)
    }

    concluirCompra(){
        this.botaoConcluirComprar().click()
        this.radioPagEntrega().check()
        this.checkTermos().check()
        this.botaoFinalizarCompra().click()

    }


}