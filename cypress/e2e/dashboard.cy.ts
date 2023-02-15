describe('Dashboard Test', () => {
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
    cy.intercept(
      'GET',
      'https://arcane-inlet-03546.herokuapp.com/api/v1/restaurant/',
      {
        statusCode: 200,
        ok: true,
        fixture: 'restaurants',
      }
    )
    cy.intercept(
      'GET',
      'https://arcane-inlet-03546.herokuapp.com/api/v1/lift/',
      {
        statusCode: 200,
        ok: true,
        fixture: 'lifts',
      }
    )
    cy.visit('https://apres-ski-fe.vercel.app/demo')
    cy.get(':nth-child(1) > .card > .card-img-top')
      .click({ force: true })
      .url()
      .should('eq', 'https://apres-ski-fe.vercel.app/dashboard')
  })

  it('should find a Nav bar with the selected Users name', () => {
    cy.get('.navbar')
      .should('exist')
    cy.get('.navbar-nav > :nth-child(1)')
      .contains('Lily White')
  })

  it('should click the app logo to return to start', () => {
    cy.get('.navbar-brand')
      .should('exist')
      .click()
      .url()
      .should('eq', 'https://apres-ski-fe.vercel.app/')
  })

  it('should find a Logout button which returns to the Landing page', () => {
    cy.get('.ms-4')
      .should('exist')
      .click()
      .url()
      .should('eq', 'https://apres-ski-fe.vercel.app/')
  })

  it('should find the Map', () => {
    cy.get(':nth-child(5) > .mapboxgl-canvas')
      .should('exist')
  })

  it('Should find a Filter button that opens menu when clicked', () => {
    cy.get('button')
      .contains('Filter')
      .should('exist')
      .click({ force: true })
    cy.get('.offcanvas-body')
      .should('exist')
  })

  it('should find 3 restaurant cards in order by distance', () => {
    cy.get('#card-2')
      .should('exist')
    cy.get('#card-2 > :nth-child(1) > .col-md-8 > .card-body > .row > :nth-child(1) > .card-text.small-text > span')
      .contains('0.01 miles')
    cy.get('#card-3')
      .should('exist')
    cy.get('#card-3 > :nth-child(1) > .col-md-8 > .card-body > .row > :nth-child(1) > .card-text.small-text > span')
      .contains('0.06 miles')
    cy.get('#card-1')
      .should('exist')
    cy.get('#card-1 > :nth-child(1) > .col-md-8 > .card-body > .row > :nth-child(1) > .card-text.small-text > span')
      .contains('0.27 miles')
  })

  it('should find the initial details for a restaurant on its card', () => {
    cy.get('#card-1')
      .contains('9600 Kitchen')
    cy.get('#card-1 > :nth-child(1) > .col-md-8 > .card-body > .row > :nth-child(1) > .card-text.small-text > span')
      .contains('0.27 miles')
    cy.get('#card-2 > :nth-child(1) > .col-md-4 > .card-img')
      .should('exist')
    cy.get('#card-1 > :nth-child(1) > .col-md-8 > .card-body > .row > .label-container > .blue')
      .should('exist')
    cy.get('#card-1 > :nth-child(1) > .col-md-8 > .card-body > .row > .label-container > .blue')
      .should('exist')
  })

  it('should find a button to click for more details', () => {
    cy.get('#card-1 > :nth-child(1) > .col-md-8 > .card-body > .btn')
      .should('exist')
      .click({ force: true })
    cy.get('.img-fluid')
      .should('exist')
    cy.get('[style="text-align: center;"] > .mb-3')
      .contains('9600 Kitchen')
    cy.get('[style="text-align: center;"] > :nth-child(2)')
      .contains('550 Village Rd Breckenridge, CO 80424')
    cy.get('.d-flex > :nth-child(1) > [style="letter-spacing: 0.3rem;"]')
      .contains('American')
    cy.get('[style="margin: 1rem;"] > .card-text > span')
      .contains('0.27 miles')
    cy.get('.modal-body > :nth-child(1) > :nth-child(4)')
      .should('exist')
    cy.get('[style="text-align: center;"] > .m-4')
      .contains('No Specials Available')
    cy.get('.modal-body > :nth-child(1) > :nth-child(9)')
      .should('exist')
    cy.get('.modal-footer > .btn')
      .should('exist')
  })

  it('should click the button to close the modal', () => {
    cy.get('#card-1 > :nth-child(1) > .col-md-8 > .card-body > .btn')
      .should('exist')
      .click({ force: true })
    cy.get('.modal-footer > .btn')
      .click()
  })
})
