// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test('Successful login', { tag: ['@regression', '@login', '@debug'] }, async ({ Given, When, Then, page }) => { 
    await Given('I go to the login page', null, { page }); 
    await When('I enter valid credentials'); 
    await Then('I should see the logout link'); 
  });

  test('Invalid login with wrong password', { tag: ['@regression', '@login'] }, async ({ Given, When, Then, page }) => { 
    await Given('I go to the login page', null, { page }); 
    await When('I enter username "practice@example.com" and password "wrongPassword"', null, { page }); 
    await Then('I should see the error message for wrong details "Your email or password is incorrect!"'); 
  });

  test('Invalid login with empty credentials', { tag: ['@regression', '@login'] }, async ({ Given, When, Then, page }) => { 
    await Given('I go to the login page', null, { page }); 
    await When('I enter username "" and password ""', null, { page }); 
    await Then('I should see the error message for empty field "Please fill out this field."'); 
  });

  test('Logout after successful login', { tag: ['@regression', '@login'] }, async ({ Given, When, Then, page }) => { 
    await Given('I go to the login page', null, { page }); 
    await When('I enter valid credentials'); 
    await Then('I should see the logout link'); 
    await When('I click the logout button'); 
    await Then('I should be redirected to the login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@regression","@login","@debug"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I go to the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I enter valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the logout link","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@regression","@login"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I go to the login page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I enter username \"practice@example.com\" and password \"wrongPassword\"","stepMatchArguments":[{"group":{"start":17,"value":"\"practice@example.com\"","children":[{"start":18,"value":"practice@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"wrongPassword\"","children":[{"start":54,"value":"wrongPassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message for wrong details \"Your email or password is incorrect!\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Your email or password is incorrect!\"","children":[{"start":50,"value":"Your email or password is incorrect!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":["@regression","@login"],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I go to the login page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I enter username \"\" and password \"\"","stepMatchArguments":[{"group":{"start":17,"value":"\"\"","children":[{"start":18,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"\"","children":[{"start":34,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message for empty field \"Please fill out this field.\"","stepMatchArguments":[{"group":{"start":47,"value":"\"Please fill out this field.\"","children":[{"start":48,"value":"Please fill out this field.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":["@regression","@login"],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I go to the login page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I enter valid credentials","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I should see the logout link","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I click the logout button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the login page","stepMatchArguments":[]}]},
]; // bdd-data-end