describe('ShowRecipes Page', () => {

    // load test recipe
    let recipe = {
        name: 'Fig Pancakes',
        id: 1
    }

    it('shows all recipes', () => {

        cy.visit('/recipes')
        cy.contains('h2', 'Recipes')


        cy.get('[data-test="recipe-name"]').its('length').should('be.gte', 5)


        cy.contains('[data-test="recipe-name"]', recipe.name)


        cy.get('[data-test="recipe-name"]').contains(recipe.name).click();


        cy.contains('[data-test="recipe-name"]', recipe.name)
        cy.url().should('include', recipe.id)

    })

    it('shows the correct recipe pictures', () => {

        cy.visit('/recipes')

        cy.get('[data-test=recipe-image-' + recipe.id + ']')
            .should('have.attr', 'src')
            .should('include', recipe.id)
    })

})