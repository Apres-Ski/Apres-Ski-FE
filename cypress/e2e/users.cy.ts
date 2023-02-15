describe('Users Test', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://arcane-inlet-03546.herokuapp.com/api/v1/user/',
      {
        statusCode: 200,
        ok: true,
        fixture: 'users',
      }
    )
    cy.visit('https://apres-ski-fe.vercel.app/demo')
  })

  it('should find the canned users', () => {
    cy.get(':nth-child(1) > .card').should('exist')
    cy.get(':nth-child(2) > .card').should('exist')
  })

  it('should be able to select a user to load the dashboard', () => {
    cy.get(':nth-child(1) > .card')
      .click({ force: true })
      .url()
      .should('eq', 'https://apres-ski-fe.vercel.app/dashboard')
  })
})
