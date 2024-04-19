describe('first suite', () => {

    it('Test1', ()=>{

        cy.visit('https://www.google.com')
        cy.title().should('eq','YouTube')

    })
}
)