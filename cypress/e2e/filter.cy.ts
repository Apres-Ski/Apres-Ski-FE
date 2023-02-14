describe('Filter Test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://arcane-inlet-03546.herokuapp.com/api/v1/user/', {
      statusCode: 200,
      ok: true,
      fixture: 'users',
    })
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
    cy.get(':nth-child(1) > a > .img-fluid')
      .click()
      .url()
      .should('eq', 'https://apres-ski-fe.vercel.app/dashboard')
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

  it('should find a toggle for alcohol and for happy hours', () => {
    cy.get(':nth-child(19) > .form-switch > #custom-switch').should('exist')
    cy.get(':nth-child(20) > .form-switch > #custom-switch').should('exist')
  })

  it('should be able to select options and filter the list', () => {
    cy.get('[for="cozy"]').click()
    cy.get(':nth-child(19) > .form-switch > #custom-switch').check()
    cy.get('.btn-close').click({ force: false })
    cy.get(':nth-child(5) > div').should('exist')
    cy.get('#card-3 > :nth-child(1)').contains('Cabin Juice')
  })

  it('should be able to select other options and filter the list', () => {
    cy.get('[for="fun"]').click()
    cy.get(':nth-child(20) > .form-switch > #custom-switch').check()
    cy.get('.btn-close').click({ force: false })
    cy.get(':nth-child(5) > div').should('exist')
    cy.get('#card-2 > :nth-child(1)').contains('BoLD Restaurant and Bar')
  })

  it('should be able to reset the filters', () => {
    cy.get('[for="cozy"]').click()
    cy.get(':nth-child(19) > .form-switch > #custom-switch').check()
    cy.get('.btn-close').click({ force: false })

    cy.get(':nth-child(5) > div').should('exist')
    cy.get('#card-3 > :nth-child(1)').contains('Cabin Juice')
    cy.get('button').contains('Filter').should('exist').click({ force: true })
    cy.get('.btn-outline-success').click()
    cy.get('.btn-close').click({ force: false })

    cy.get(':nth-child(5) > :nth-child(1)').should('exist')
    cy.get('#card-1 > :nth-child(1)').contains('9600 Kitchen')
    cy.get(':nth-child(5) > :nth-child(2)').should('exist')
    cy.get('#card-2 > :nth-child(1)').contains('BoLD Restaurant and Bar')
    cy.get(':nth-child(5) > :nth-child(3)').should('exist')
    cy.get('#card-3 > :nth-child(1)').contains('Cabin Juice')
  })


  it('should find an error message on the dashboard when no results match', () => {
    cy.get('[for="cozy"]').click()
    cy.get('[for="quickEasy"]').click()
    cy.get('.btn-close').click({ force: false })
    cy.get('.fade-in > :nth-child(4) > div').should('exist')
    cy.get('.fade-in > :nth-child(4) > div').contains(
      'No matches for this criteria. Please refine your selections and try again.'
    )
 })

  it('should be able to use button to change filter options', () => {
    cy.get('[for="cozy"]').click()
    cy.get('[for="quickEasy"]').click()
    cy.get('.btn-close').click({ force: false })
    cy.get('.fade-in > :nth-child(4) > div > :nth-child(2)').click()
    cy.wait(250)
    cy.get('[for="cozy"]').click({ multiple: true })
    cy.get('[for="quickEasy"]').click({ multiple: true })
  })

  it('should be able to use the button to reset all filter options and re-render all cards', () => {
    cy.get('[for="cozy"]').click()
    cy.get('[for="quickEasy"]').click()
    cy.get('.btn-close').click({ force: false })
    cy.get('.fade-in > :nth-child(4) > div').contains(
      'No matches for this criteria. Please refine your selections and try again.'
    )
    cy.get(':nth-child(4) > div > :nth-child(3)').click()
    cy.get('#card-2 > :nth-child(1) > .col-md-8 > .card-body').should('exist')
    cy.get('#card-3 > :nth-child(1) > .col-md-8 > .card-body').should('exist')
    cy.get('#card-1 > :nth-child(1) > .col-md-8 > .card-body').should('exist')
  })
})