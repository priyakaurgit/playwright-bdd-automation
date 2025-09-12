
@smoke @cart
Feature: Cart functionality

    Scenario: Add product to cart
        Given I am on the home page
        When I add a product to the cart
        Then the product should be visible in the cart

    Scenario: Remove product from cart
        Given I have a product in the cart
        When I remove the product from the cart
        Then the cart should be empty