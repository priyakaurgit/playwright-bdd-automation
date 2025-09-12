import { Page, Locator, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export class RegistrationPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly signupButton: Locator;
  readonly accountInfoForm: Locator;
  readonly passwordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedMessage: Locator;
  readonly emailAlreadyExistsMessage: Locator;
  readonly requiredFieldError: Locator;
  readonly invalidEmailError: Locator;
  readonly weakPasswordError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('[data-qa="signup-name"]');
    this.emailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.accountInfoForm = page.locator('#account-info'); // adjust if needed
    this.passwordInput = page.locator('[data-qa="password"]');
    this.firstNameInput = page.locator('[data-qa="first_name"]');
    this.lastNameInput = page.locator('[data-qa="last_name"]');
    this.addressInput = page.locator('[data-qa="address"]');
    this.stateInput = page.locator('[data-qa="state"]');
    this.cityInput = page.locator('[data-qa="city"]');
    this.zipcodeInput = page.locator('[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
    this.accountCreatedMessage = page.locator('h2:has-text("Account Created!")');
    this.emailAlreadyExistsMessage = page.locator('p:has-text("Email Address already exist!")');
    this.requiredFieldError = page.locator('input:invalid');
    this.invalidEmailError = page.locator('[data-qa="signup-email"]');
    this.weakPasswordError = page.locator("p:has-text('Password must be at least 6 characters')");
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL! + '/login');
    //await this.page.goto("https://www.automationexercise.com" + '/login');
  }

  async startSignup(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }

  async fillAccountInfo(
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    state: string,
    city: string,
    zipcode: string,
    mobile: string
  ) {
    await this.passwordInput.fill(password);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.addressInput.fill(address);
    await this.stateInput.fill(state);
    await this.cityInput.fill(city);
    await this.zipcodeInput.fill(zipcode);
    await this.mobileNumberInput.fill(mobile);
  }
  async submitSignup() {
    await this.signupButton.click();
  }

  async submitRegistration() {
    await this.createAccountButton.click();
  }

  async verifyAccountCreated() {
    await expect(this.accountCreatedMessage).toBeVisible();
  }

  async verifyEmailAlreadyExistsError() {
    await expect(this.emailAlreadyExistsMessage).toBeVisible();
  }

  async leaveFieldsEmpty() {
    //await this.signupButton.click();
  }

  async enterInvalidEmail() {
    await this.nameInput.fill('Priya');
    await this.emailInput.fill('invalid-email');
  }

  async enterWeakPassword(email: string) {
    await this.startSignup('Priya', email);
    await this.passwordInput.fill('123'); // too weak
  }

  async verifyRequiredFieldErrors() {
    await expect(this.requiredFieldError.first()).toBeVisible();
  }

  async verifyInvalidEmailError() {
    await expect(this.invalidEmailError).toHaveJSProperty(
      'validationMessage',
      "Please include an '@' in the email address. 'invalid-email' is missing an '@'."
    );
  }

  async verifyWeakPasswordError() {
    await expect(this.weakPasswordError).toBeVisible();
  }
}
