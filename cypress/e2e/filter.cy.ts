describe('Filter Test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://127.0.0.1:8000/api/v1/user/', {
      statusCode: 200,
      ok: true,
      fixture: 'users',
    })
    cy.intercept("GET", 'http://127.0.0.1:8000/api/v1/restaurant/', {
      statusCode: 200,
      ok: true,
      fixture: 'restaurants',
    })
    cy.visit('http://127.0.0.1:5173/demo')
    cy.get(':nth-child(1) > a > .img-fluid').click()
      .url().should('eq', 'http://127.0.0.1:5173/dashboard')
    cy.get('button').contains('Filter').should('exist').click({ force: true })

  })

  it('should find the filter header with a closing button and title', () => {
    cy.get('.offcanvas-header').contains('Filter')
    cy.get('.btn-close').should('exist')
  })

  it('should find the filter form', () => {
    cy.get('form').should('exist')
  })

  it('should find the Vibe buttons', () => {
    cy.get('[for="familyFriendly"]').should('exist')
    cy.get('[for="casual"]').should('exist')
    cy.get('[for="upscale"]').should('exist')
    cy.get('[for="quickEasy"]').should('exist')
    cy.get('[for="lively"]').should('exist')
    cy.get('[for="fun"]').should('exist')
    cy.get('[for="cozy"]').should('exist')
    cy.get('[for="relaxed"]').should('exist')
  })

  it.only('should find a toggle for alcohol and for happy hours', () => {
    cy.get(':nth-child(19) > .form-switch > #custom-switch').should('exist')
    cy.get(':nth-child(20) > .form-switch > #custom-switch').should('exist')
  })
})