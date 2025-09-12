@regression @checkout
Feature: Checkout process

  Scenario: Proceed to checkout as a logged in user
    Given I am logged in with valid credentials
    And I have a product in the cart for checkout
    When I proceed to checkout
    Then I should see the address details and order summary
 
  Scenario: Place an order successfully and download the invoice
    Given I am logged in with valid credentials
    And I have a product in the cart for checkout
    And I proceed to checkout
    And I place the order
    When I enter payment details "Priya Kaur" "4111111111111111" "123" "12" "2026"
    And I Pay and Confirm Order
    Then I should see an order confirmation message
    When I download the invoice
    Then the invoice file should be downloaded successfully

  Scenario: Checkout without login redirects to login page
    Given I have a product in the cart without login
    When I proceed to checkout
    Then I should be redirected to the login page

 


