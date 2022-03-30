const { faker } = require('@faker-js/faker');

let name = faker.music.genre();
let author = faker.name.firstName();

describe('save book function', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:4200/dashboard');
        cy.contains('Add').click();
        cy.get('#name').click()
        cy.get('#name').type(name);
        cy.get('#author').type(author);

        // Act
        cy.contains('Save').click();

    })

    //Assert
    it ('the book is saved', () => {
        cy.contains('10 / page').click();
        cy.get('[title="50 / page"]').click();
        cy.contains(name).should('exist')

    })

})