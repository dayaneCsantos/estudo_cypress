describe('Checkout com sucesso', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('Deve redicionar para a tela de pagamento', ( ) => {
    cy.get('[data-testid=common-ui-button]')
      .contains('Seguir para o pagamento')
      .should('exist')
      .click()

      cy.get('[data-testid=common-ui-button]')
      .contains('Finalizar pedido').should('exist')
  })

  it('Deve finalizar pedido', () =>{
    cy.get('[data-testid=common-ui-button]')
      .contains('Seguir para o pagamento')
      .should('exist')
      .click()

    cy.get('[data-testid=common-ui-input-label]')
      .contains('Número')
      .click()
      .type('5269 8271 6780 4732')

    cy.get('[data-testid=common-ui-input-label]')
      .contains('Nome do titular do cartão')
      .click()
      .type('teste vamos lá')

    cy.get('[data-testid=common-ui-input-label]')
      .contains('Data de validade')
      .click()
      .type('1225')

    cy.get('[data-testid=common-ui-input-label]')
      .contains('Código CVV')
      .click()
      .type('123')

      cy.get('[data-testid=common-ui-button]')
        .contains('Finalizar pedido')
        .should('be.enabled')
        .click()

      cy.get('[data-testid=common-ui-card]')
        .contains('Compra efetuada com sucesso')
  })
})

describe('checkout - Validações ', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.get('[data-testid=common-ui-button]')
      .contains('Seguir para o pagamento')
      .should('exist')
      .click()
  })

  it('Não deverá habilita o botão de finalizar sem o preenchimento dos dados obrigatórios', () => {
    cy.get('[data-testid=common-ui-button]').should('not.be.enabled')
  })
})