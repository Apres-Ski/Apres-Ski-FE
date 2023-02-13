describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('should find the landing content', () => {
    cy.get('p').should('exist')
  })

  it('should find the landing content', () => {
    cy.get('.btn').should('exist')
  })

  it('should be able to click through to the users page', () => {
    cy.get('.btn').click().url().should('eq', 'http://127.0.0.1:5173/demo')
  })

  it('should be able to use browser arrows to return to landing', () => {
    cy.get('.btn').click()
      .url().should('eq', 'http://127.0.0.1:5173/demo')
      .go('back').url().should('eq', 'http://127.0.0.1:5173/')
      .go('forward').url().should('eq', 'http://127.0.0.1:5173/demo')
  })
})
