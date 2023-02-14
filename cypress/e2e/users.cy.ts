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
    cy.visit('http://127.0.0.1:5173/demo')
  })

  it('should find the canned users', () => {
    cy.get(':nth-child(1) > a > .img-fluid').should('exist')
    cy.get(':nth-child(2) > a > .img-fluid').should('exist')
  })

  it('should be able to select a user to load the dashboard', () => {
    cy.get(':nth-child(1) > a > .img-fluid').click()
      .url().should('eq', 'http://127.0.0.1:5173/dashboard')
  })
})