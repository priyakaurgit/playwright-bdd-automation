// Generated from: features\registration.feature
import { test } from "playwright-bdd";

test.describe('User Registration', () => {

  test('Successful registration with valid details', { tag: ['@regression', '@registration'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the registration page', null, { page }); 
    await When('I enter valid user details'); 
    await And('I submit the registration form'); 
    await Then('I should see the account created confirmation'); 
  });

  test('Registration with existing email', { tag: ['@regression', '@registration'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the registration page', null, { page }); 
    await When('I enter an existing email address'); 
    await And('I submit the signup details'); 
    await Then('I should see an error message about existing email'); 
  });

  test('Registration with empty fields', { tag: ['@regression', '@registration'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the registration page', null, { page }); 
    await When('I leave all fields empty'); 
    await And('I submit the signup details'); 
    await Then('I should see required field error messages'); 
  });

  test('Registration with invalid email format', { tag: ['@regression', '@registration'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the registration page', null, { page }); 
    await When('I enter invalid email format'); 
    await And('I submit the signup details'); 
    await Then('I should see an invalid email error'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\registration.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@regression","@registration"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the registration page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter valid user details","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I submit the registration form","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the account created confirmation","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":["@regression","@registration"],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I navigate to the registration page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I enter an existing email address","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I submit the signup details","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message about existing email","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":15,"tags":["@regression","@registration"],"steps":[{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I navigate to the registration page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I leave all fields empty","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I submit the signup details","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should see required field error messages","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":22,"tags":["@regression","@registration"],"steps":[{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given I navigate to the registration page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I enter invalid email format","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And I submit the signup details","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then I should see an invalid email error","stepMatchArguments":[]}]},
]; // bdd-data-end