import { expect, Page, Locator } from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config();
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly logoutButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="email"][data-qa="login-email"]');
    this.passwordInput = page.locator('input[name="password"][data-qa="login-password"]');
    this.submitButton = page.locator('button[type="submit"][data-qa="login-button"]');
    this.logoutButton = page.locator('a[href="/logout"]');
    this.errorMessage = page.locator('has-text("Your email or password is incorrect!")');
  }

  async goto() {
    // console.log('BASE_URL:', process.env.BASE_URL);
    await this.page.goto(process.env.BASE_URL! + '/login');
    //await this.page.goto("https://www.automationexercise.com" + '/login');
    await expect(this.page).toHaveURL(/.*login/);
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async verifySuccessfulLogin() {
    await expect(this.logoutButton).toBeVisible();
  }

  async verifyErrorMessage(expectedMessage: string) {
    await expect(this.usernameInput).toHaveJSProperty('validationMessage', expectedMessage);
  }

  async verifyErrorMessageForWrongDetails(expectedMessage: string) {
    await expect(this.errorMessage).toBeVisible;
  }

  async logout() {
    await this.logoutButton.click();
  }
}
