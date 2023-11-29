import { BasePage } from './basePage';

export class HomePage extends BasePage {

    getPopUps() { return cy.get('.glow-toaster-footer'); }

    getSearchTextBox() { return cy.get('#twotabsearchtextbox'); }

    getSearchBtn() { return cy.get('#nav-search-submit-button'); }

    getCustomerReview() { return cy.get('div[class="a-section a-spacing-none"]:nth-child(3)'); }

    getCustomerReviewFourAndUp() { return cy.get('#reviewsRefinements span[data-csa-c-type="element"]:first-child'); }

    getLanguageOption() { return cy.get('span[class="a-size-base a-color-base"]'); }

    DismissChangeDiliveryAddressPopUp() {
        this.getPopUps().click();
    }

    SelectFromMenuDropDown(menuOption: string) {
        this.getSearchTextBox()
            .click()
            .get('#searchDropdownBox')
            .select(menuOption, { force: true });
    }

    SearchByGivenValue(searchValue: string) {
        this.getSearchTextBox().type(searchValue);
        this.getSearchBtn()
            .click();
    }

    SelectCustomerReviewFourStarAndUp() {
        this.getCustomerReview()
            .scrollIntoView();
        this.getCustomerReviewFourAndUp()
            .click();
    }

    SelectLanguage(languageOption: string) {
        this.getCustomerReview()
            .scrollIntoView();
        this.getLanguageOption().contains(languageOption)
            .click();
    }

    getProductTitleElement(resultNumber: number) {
        return cy.get('div[data-index="' + (resultNumber + 2) + '"] h2 span');
    }

    SelectRecordFromTheSearchResult(resultNumber: number) {
        cy.get('div[data-index="' + (resultNumber + 2) + '"] div[class="puisg-row"] div[class$="puis-list-col-left"] a').click();
    }

}
