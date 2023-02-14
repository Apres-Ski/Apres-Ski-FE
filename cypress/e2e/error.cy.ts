describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://apres-ski-fe.vercel.app/')
    cy.visit('https://apres-ski-fe.vercel.app/sdojbsdv')
  })

  it('should load error content with bad path', () => {
    cy.get('.modal-header').should('exist')
    cy.get('.modal-body').should('exist')
    cy.get('.btn').should('exist')
  })

  it('should click the button to close and return to landing', () => {
    cy.get('.btn')
      .click()
      .url()
      .should('eq', 'https://apres-ski-fe.vercel.app/')
  })
})