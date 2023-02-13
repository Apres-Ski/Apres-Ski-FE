describe('Dashboard Test', () => {
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
  })

  it('should find a Nav bar with the selected User\s name', () => {
    cy.get('.navbar').should('exist')
    cy.get('.navbar-nav > :nth-child(1)').contains('Lily White')
  })

  it('should click the app logo to return to start', () => {
    cy.get('.navbar-brand').should('exist').click()
      .url().should('eq', 'http://127.0.0.1:5173/')
  })

  it('should find a Logout button which returns to the Landing page', () => {
    cy.get('.ms-4').should('exist').click()
      .url().should('eq', 'http://127.0.0.1:5173/')
  })

  it('should find the Map', () => {
    cy.get(':nth-child(9) > .mapboxgl-canvas').should('exist')
  })

  it('Should find a Filter button that opens menu when clicked', () => {
    cy.get('button').contains('Filter').should('exist').click({ force: true })
    cy.get('.offcanvas-body').should('exist')
  })

  it('should find 3 restaurant cards', () => {
    cy.get(':nth-child(1) > :nth-child(5) > :nth-child(1)').should('exist')
    cy.get(':nth-child(1) > :nth-child(5) > :nth-child(2)').should('exist')
    cy.get(':nth-child(1) > :nth-child(5) > :nth-child(3)').should('exist')
  })

  it('should find the initial details for a restaurant on its card', () => {
    cy.get(':nth-child(1) > :nth-child(5) > :nth-child(1) > :nth-child(1)').contains('9600 Kitchen')
    cy.get(':nth-child(1) > :nth-child(5) > :nth-child(1) > :nth-child(2)').contains('casual, upscale')
    cy.get(':nth-child(1) > :nth-child(5) > :nth-child(1) > :nth-child(3)').contains('.25m')
    cy.get(':nth-child(1) > img').should('exist')
    cy.get(':nth-child(1) > :nth-child(5) > :nth-child(1) > :nth-child(5)').contains('PLACEHOLDER FOR VIBE BADGES')
  })
  
  it('should find a button to click for more details', () => {
    cy.get(':nth-child(5) > :nth-child(1) > .btn').should('exist')
      .click({ force: true })
    cy.get('.img-fluid').should('exist')
    cy.get('.modal-body > :nth-child(1) > :nth-child(2)').contains(
      '9600 Kitchen'
    )
    cy.get('.modal-body > :nth-child(1) > :nth-child(3)')
      .contains('550 Village Rd Breckenridge, CO 80424')
    cy.get('.modal-body > :nth-child(1) > :nth-child(4)')
      .contains('American')
    cy.get('.modal-body > :nth-child(1) > :nth-child(5)')
      .contains('Logic Placeholder')
    cy.get('.modal-body > :nth-child(1) > :nth-child(4)').should('exist')
    cy.get('[style="display: flex; justify-content: space-around;"] > :nth-child(2)')
      .contains('No Specials Available')
    cy.get('.modal-body > :nth-child(1) > :nth-child(9)').should('exist')
    cy.get('.modal-footer > .btn').should('exist')
  })

  it.only('should click the button to close the modal', () => {
    cy.get(':nth-child(5) > :nth-child(1) > .btn').should('exist')
      .click({ force: true })
    cy.get('.modal-footer > .btn').click()
  })
})
