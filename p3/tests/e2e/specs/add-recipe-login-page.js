describe('Add Recipe', () => {

    // new recipe
    let recipe = {
        name: 'Test Recipe',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m',
        ingredients: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m',
        directions: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m',

    }

    it('add new recipe', () => {

        // First we have to login, because only auth'd users can add products
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();


        cy.get('[data-test=recipeName]').clear().type(recipe.name);
        cy.get('[data-test=recipeDescription]').clear().type(recipe.description);
        cy.get('[data-test=recipeIngredients]').clear().type(recipe.ingredients);
        cy.get('[data-test=recipeDirections]').clear().type(recipe.directions);
    });


});

describe('Login/register Page', () => {

    let user = {
        name: 'Jill Harvard',
        email: 'jill@harvard.edu',
        password: 'asdfasdf'
    }

    it('shows an error if login is invalid', () => {
        cy.visit('/recipes/new');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type('this-password-should-not-work');
        cy.get('[data-test=login-button]').click();
        cy.contains('These credentials do not match our records');
    })

    it('lets a user log in and log out', () => {
        cy.visit('/recipes/new');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();

        cy.get('[data-test=logout-button]').click();

        // We know logout works if we see the login button again
        cy.get('[data-test="login-button"]').should('exist');

    })

})