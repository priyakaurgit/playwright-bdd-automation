import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config();

const { Given, When, Then } = createBdd();

let loginPage: LoginPage;

Given('I go to the login page', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('I enter valid credentials', async () => {
  await loginPage.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  //await loginPage.login("priya1@example.com", "test123");
});

When(
  'I enter username {string} and password {string}',
  async ({ page }, username: string, password: string) => {
    await loginPage.login(username, password);
  }
);

Then('I should see the logout link', async () => {
  await loginPage.verifySuccessfulLogin();
});

Then(
  'I should see the error message for empty field {string}',
  async ({}, expectedMessage: string) => {
    await loginPage.verifyErrorMessage(expectedMessage);
  }
);

Then(
  'I should see the error message for wrong details {string}',
  async ({}, expectedMessage: string) => {
    await loginPage.verifyErrorMessageForWrongDetails(expectedMessage);
  }
);

When('I click the logout button', async () => {
  await loginPage.logout(); // new method in LoginPage
});

Then('I should be redirected to the login page', async ({ page }) => {
  await expect(page).toHaveURL(/.*\/login/);
});
