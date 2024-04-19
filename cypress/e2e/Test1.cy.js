describe('first suite', () => {

    it('Test1', ()=>{

        cy.visit('https://www.youtube.com')
        cy.title().should('eq','YouTube')
    })
}
)