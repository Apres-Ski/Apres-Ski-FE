describe('Landing Test', () => {
  beforeEach(() => {
    cy.visit('https://apres-ski-fe.vercel.app/')
  })

  it('should find the landing content', () => {
    cy.get('p')
      .should('exist')
  })

  it('should find the landing content', () => {
    cy.get('.btn')
      .should('exist')
  })

  it('should be able to click through to the users page', () => {
    cy.get('.btn')
      .click()
      .url()
      .should('eq', 'https://apres-ski-fe.vercel.app/demo')
  })

  it('should be able to use browser arrows to return to landing', () => {
    cy.get('.btn')
      .click()
      .url()
      .should('eq', 'https://apres-ski-fe.vercel.app/demo')
      .go('back')
      .url()
      .should('eq', 'https://apres-ski-fe.vercel.app/')
      .go('forward')
      .url()
      .should('eq', 'https://apres-ski-fe.vercel.app/demo')
  })
})
