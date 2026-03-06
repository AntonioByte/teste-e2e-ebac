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
    realizarPedido(nome, tamanho, cor, quantidade){
        this.campoBuscar().clear().type(nome)
        this.botaoBuscar().click()
        this.tamanho(tamanho).click()
        this.cor(cor).click()
        this.campoQuantidade().clear().type(quantidade)
        this.botaoComprar.click()
    }

    verificarCarrinho(nome, tamanho, cor, quantidade){
        this.botaoVerCarrinho.click()
        cy.contains(nome + ' - ' + tamanho + ', ' + cor).should('exist')
        cy.contains(nome + ' - ' + tamanho + ', ' + cor).siblings('.qty').should('equal', quantidade)
    }

    concluirCompra(){
        this.botaoConcluirComprar().click()
        this.radioPagEntrega().check()
        this.checkTermos().check()
        this.botaoFinalizarCompra().click()

    }


}