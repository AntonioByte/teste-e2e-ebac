/// <reference types="cypress"/>
class pedidoPage {

    //Seletores
    campoBuscar() {return cy.get('[name="s"]').eq(1)}
    botaoBuscar() {return cy.get('.button-search').eq(1)}
    tamanho(tamanho) {return cy.get('[title="'+ tamanho +'"]')}
    cor(cor) {return cy.get('[title="'+ cor +'"]')}
    campoQuantidade() {return cy.get('.input-text')}
    botaoComprar() {return cy.get('.single_add_to_cart_button')}
    botaoVerCarrinho() {return cy.contains('Ver carrinho')}
    //produtoCarrinho() {return cy.get('.product-name > a')}
    produtoCarrinho(nomeProduto) {return cy.contains('.product-name > a', nomeProduto)}
    botaoConcluirCompra() {return cy.get('.checkout-button')}
    radioTransferencia() {return cy.get('#payment_method_bacs')}
    radioCheque() {return cy.get('#payment_method_cheque')}
    radioPagEntrega() {return cy.get('#payment_method_cod')}
    checkTermos() {return cy.get('#terms')}
    botaoFinalizarCompra() {return cy.get('#place_order')}
    

    //Métodos
    realizarPedido(nome, tamanho, cor, quantidade){
        this.campoBuscar().clear().type(nome)
        this.botaoBuscar().click()
        this.tamanho(tamanho).click()
        this.cor(cor).click()
        this.campoQuantidade().clear().type(quantidade)
        this.botaoComprar().click()
    }

    verificarCarrinho(nome, tamanho, cor, quantidade){
        this.botaoVerCarrinho().click()
        this.produtoCarrinho(nome + ' - ' + tamanho + ', ' + cor).should('exist')
        this.produtoCarrinho(nome + ' - ' + tamanho + ', ' + cor).should('exist')
            .parent().siblings('.product-quantity').children('.quantity').children('.input-text')
            .should('have.value', quantidade)
    }

    concluirCompra(){
        this.botaoConcluirCompra().click()
        this.radioPagEntrega().check()
        this.checkTermos().check()
        this.botaoFinalizarCompra().click()

    }


}

export default new pedidoPage()