const { base_url } = require('../support/globalConstants');

export class BasePage {

    goToHomePage() {
        cy.visit(base_url);
    }

    getNumberWithDecible(nunberValue:any, deciblePonits: number): any {
        return parseFloat(nunberValue.text().replace('$','')).toFixed(deciblePonits);
    }

    multiplyDecibleNumber(nunberValue:any, multiplyBy: number, deciblePonits: number): any {
        return (nunberValue * multiplyBy).toFixed(deciblePonits);
    }
}
