// Generated from: features\cart.feature
import { test } from "playwright-bdd";

test.describe('Cart functionality', () => {

  test('Add product to cart', { tag: ['@smoke', '@cart'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am on the home page', null, { page }); 
    await When('I add a product to the cart'); 
    await Then('the product should be visible in the cart'); 
  });

  test('Remove product from cart', { tag: ['@smoke', '@cart'] }, async ({ Given, When, Then, page }) => { 
    await Given('I have a product in the cart', null, { page }); 
    await When('I remove the product from the cart'); 
    await Then('the cart should be empty'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@smoke","@cart"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I add a product to the cart","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the product should be visible in the cart","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@smoke","@cart"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I have a product in the cart","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I remove the product from the cart","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the cart should be empty","stepMatchArguments":[]}]},
]; // bdd-data-end