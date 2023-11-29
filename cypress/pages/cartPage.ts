import { BasePage } from './basePage';

export class CartPage extends BasePage {

    getProductTitle() { return cy.get('.a-truncate-cut'); }

    getTotalAmount() { return cy.get('#sc-subtotal-amount-activecart span'); }

    getQtyLabel() { return cy.get('sc-subtotal-label-activecart'); }

    getQtyDDL() { return cy.get('a-dropdown-prompt'); }

    getDeleteCartOption() { return cy.get('input[value="Delete"]'); }

    verifyProductTitle(expectedText: string) {
        this.getProductTitle().should('contain.text', expectedText);
    }

    verifyTotalAmount(expectedAmount: string) {
        this.getTotalAmount().should('contain.text', expectedAmount);
    }

    verifyQtyFormLabel(expectedQty: number) {
        this.getQtyLabel().should('contain.text', expectedQty);

    }

    verifyQtyFormDDL(expectedQty: number) {
        this.getQtyDDL().should('contain.text', expectedQty);
    }

    deleteCartDetail() {
        this.getDeleteCartOption().click();
    }
}
