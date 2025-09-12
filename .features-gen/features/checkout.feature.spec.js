// Generated from: features\checkout.feature
import { test } from "playwright-bdd";

test.describe('Checkout process', () => {

  test('Proceed to checkout as a logged in user', { tag: ['@regression', '@checkout'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am logged in with valid credentials', null, { page }); 
    await And('I have a product in the cart for checkout', null, { page }); 
    await When('I proceed to checkout', null, { page }); 
    await Then('I should see the address details and order summary'); 
  });

  test('Place an order successfully and download the invoice', { tag: ['@regression', '@checkout'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am logged in with valid credentials', null, { page }); 
    await And('I have a product in the cart for checkout', null, { page }); 
    await And('I proceed to checkout', null, { page }); 
    await And('I place the order'); 
    await When('I enter payment details "Priya Kaur" "4111111111111111" "123" "12" "2026"'); 
    await And('I Pay and Confirm Order'); 
    await Then('I should see an order confirmation message'); 
    await When('I download the invoice'); 
    await Then('the invoice file should be downloaded successfully'); 
  });

  test('Checkout without login redirects to login page', { tag: ['@regression', '@checkout'] }, async ({ Given, When, Then, page }) => { 
    await Given('I have a product in the cart without login', null, { page }); 
    await When('I proceed to checkout', null, { page }); 
    await Then('I should be redirected to the login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@regression","@checkout"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in with valid credentials","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I have a product in the cart for checkout","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the address details and order summary","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":10,"tags":["@regression","@checkout"],"steps":[{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am logged in with valid credentials","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I have a product in the cart for checkout","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"And I place the order","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I enter payment details \"Priya Kaur\" \"4111111111111111\" \"123\" \"12\" \"2026\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Priya Kaur\"","children":[{"start":25,"value":"Priya Kaur","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":37,"value":"\"4111111111111111\"","children":[{"start":38,"value":"4111111111111111","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"123\"","children":[{"start":57,"value":"123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":62,"value":"\"12\"","children":[{"start":63,"value":"12","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":67,"value":"\"2026\"","children":[{"start":68,"value":"2026","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I Pay and Confirm Order","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see an order confirmation message","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I download the invoice","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the invoice file should be downloaded successfully","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":21,"tags":["@regression","@checkout"],"steps":[{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given I have a product in the cart without login","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the login page","stepMatchArguments":[]}]},
]; // bdd-data-end