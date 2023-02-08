describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('should fail this test', () => {
    expect(true).to.equal(false)
  })
})

export {} //I'm not sure why this was required