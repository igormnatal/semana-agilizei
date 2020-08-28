/// <reference types="cypress"/>

let Chance = require ('chance');
let chance = new Chance();

When(/^informar meus dados$/, () => {
    cy.get('input[placeholder="First Name"]').type(chance.first());
    cy.get('input[ng-model="LastName"]').type(chance.last());
    cy.get('input[ng-model^=Email]').type(chance.email());
    cy.get('input[ng-model^=Phone]').type(chance.phone({formatted: false}));

    cy.get('input[value=Male]').check();
    cy.get('input[type=checkbox]').check('Cricket');
    cy.get('input[type=checkbox]').check('Hockey');

    cy.get('select#Skills').select('Android');
    cy.get('select#countries').select('Brazil');
    cy.get('select#country').select('Japan', {force:true});
    cy.get('select#yearbox').select('1984');
    cy.get('select[ng-model^=month]').select('June');
    cy.get('select#daybox').select('13');

    cy.get('input#firstpassword').type('Ab@caxi_1');
    cy.get('input#secondpassword').type('Ab@caxi_1');

    cy.get('input#imagesrc').attachFile('foto_perfil.png');
});

When(/^Salvar$/, () => {
    cy.get('button#submitbtn').click();
});

Then(/^devo ser cadastrado com sucesso$/, () => {
	cy.wait('@postNewTable').then((resNewTable) => {
        expect(resNewTable.status).to.eq(200);
    });
    cy.wait('@postUserTable').then((resUserTable) => {
        expect(resUserTable.status).to.eq(200);
    });
    cy.wait('@getNewTable').then((resNewTable) => {
        expect(resNewTable.status).to.eq(200);
    });
    cy.url().should('contain', 'WebTable');
});

