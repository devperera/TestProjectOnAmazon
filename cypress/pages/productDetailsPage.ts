import { BasePage } from './basePage';

export class ProductDetailsPage extends BasePage {

    getProductTitle() { return cy.get('#productTitle'); }

    getPrice() { return cy.get('#price'); }

    getQty() { return cy.get('#a-autoid-0-announce'); }

    getAddToCart() { return cy.get('#add-to-cart-button'); }

    getGoToCart() { return cy.get('a[class="a-button-text"]'); }

    verifyProductTitle(expectedText: string) {
        this.getProductTitle()
            .should('contain.text', expectedText);
    }

    getUnitPrice() : any {
        this.getPrice().then(($titleElement) => {
            return $titleElement.text();//$51.07
        });
    }

    selectQty(qty: number) {
        this.getQty().click();
        cy.get('#quantity_' + (qty - 1))
          .click();
    }

    selectAddToCart() {
        this.getAddToCart().click();
    }

    selectGoToCart() {
        this.getGoToCart().contains('Go to Cart')
            .click();
    }
}
