Feature: Amazon shopping cart feature

  This contains the Amazon shopping cart Feature

  Background: User navigate to Amazon home page
      Given I open the Amazon home page

    @Regression
    Scenario: Verify shoping cart Feature of cleared
      When I select 'Books' from the catergory list
       And I search by entering term of 'Automation'
       And I select Customer Reviews as 4 Stars & Up
       And I select Language as 'English'
       And I select '4' item from the list
      Then I verify the project details on product details page
      When I select quantity as '2'
       And I select add to cart
       And I click on go to cart 
      Then I verify the cart details
      When I clear the cart 
      Then I verify the clear cart details 
