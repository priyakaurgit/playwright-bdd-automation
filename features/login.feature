@regression @login
Feature: Login functionality

@debug
  Scenario: Successful login
    Given I go to the login page
    When I enter valid credentials
    Then I should see the logout link

  Scenario: Invalid login with wrong password
    Given I go to the login page
    When I enter username "practice@example.com" and password "wrongPassword"
    Then I should see the error message for wrong details "Your email or password is incorrect!"

  Scenario: Invalid login with empty credentials
    Given I go to the login page
    When I enter username "" and password ""
    Then I should see the error message for empty field "Please fill out this field."

  Scenario: Logout after successful login
    Given I go to the login page
    When I enter valid credentials
    Then I should see the logout link
    When I click the logout button
    Then I should be redirected to the login page
