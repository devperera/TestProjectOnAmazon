import { Given } from 'cypress-cucumber-preprocessor/steps';
import { HomePage } from '../../pages/homePage';

const homePage = new HomePage();

Given('I open the Amazon home page', () => {
    homePage.goToHomePage();
});
