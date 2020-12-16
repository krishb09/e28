describe('Recipe Page', () => {

    // Test product
    let recipe = {
        name: 'Fig Pancakes',
        id: 1
    }

    it('shows a recipe', () => {
        cy.visit('/recipes/' + recipe.id);
        cy.contains('[data-test="recipe-name"]', recipe.name);
    })

})