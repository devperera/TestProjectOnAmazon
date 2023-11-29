const { base_url } = require('../support/globalConstants');

export class BasePage {

    goToHomePage() {
        cy.visit(base_url);
    }

}
