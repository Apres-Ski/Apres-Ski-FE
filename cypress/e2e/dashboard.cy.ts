describe('Dashboard Test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://127.0.0.1:8000/api/v1/user/', {
      statusCode: 200,
      ok: true,
      fixture: 'users',
    })
    cy.visit('http://127.0.0.1:5173/demo')
    cy.get(':nth-child(1) > a > .img-fluid').click()
      .url().should('eq', 'http://127.0.0.1:5173/dashboard')
  })

  it('should find a Nav bar with the selected User\s name', () => {
    cy.get('.navbar').should('exist')
    cy.get('.navbar-nav > :nth-child(1)').contains('Lily White')
  })
})
