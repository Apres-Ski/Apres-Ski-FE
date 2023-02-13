describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
    cy.visit('http://127.0.0.1:5173/sdojbsdv')
  })

  it('should load error content with bad path', () => {
    cy.get('.modal-header').should('exist')
    cy.get('.modal-body').should('exist')
    cy.get('.btn').should('exist')
  })

  it('should click the button to close and return to landing', () => {
    cy.get('.btn').click().url().should('eq', 'http://127.0.0.1:5173/')
  })
})