describe('Home Page', () => {
    it('visits the homepage', () => {

        cy.visit('/')
        cy.contains('p');


    })
})