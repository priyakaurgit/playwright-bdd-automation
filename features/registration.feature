@regression @registration
Feature: User Registration
  Scenario: Successful registration with valid details
    Given I navigate to the registration page
    When I enter valid user details
    And I submit the registration form
    Then I should see the account created confirmation

  Scenario: Registration with existing email
    Given I navigate to the registration page
    When I enter an existing email address
    And I submit the signup details
    Then I should see an error message about existing email

  Scenario: Registration with empty fields
    Given I navigate to the registration page
    When I leave all fields empty
    And I submit the signup details
    Then I should see required field error messages


  Scenario: Registration with invalid email format
    Given I navigate to the registration page
    When I enter invalid email format
    And I submit the signup details
    Then I should see an invalid email error
 
 

 