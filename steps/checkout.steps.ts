import { createBdd } from 'playwright-bdd';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';
import fs from 'fs';

const { Given, When, Then } = createBdd();

let checkoutPage: CheckoutPage;
let cartPage: CartPage;
let loginPage: LoginPage;

Given('I am logged in with valid credentials', async ({ page }) => {
  loginPage = new LoginPage(page);
  //await page.goto('https://automationexercise.com/login');
  //await loginPage.login('priya1@example.com', 'test123');
  await page.goto(process.env.BASE_URL! + '/login');
  await loginPage.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
});

Given('I have a product in the cart for checkout', async ({ page }) => {
  cartPage = new CartPage(page);
  //await page.goto('https://automationexercise.com/products');
  await page.goto(process.env.BASE_URL! + '/products');
  await cartPage.addFirstProductToCart();
});

When('I proceed to checkout', async ({ page }) => {
  checkoutPage = new CheckoutPage(page);
  await checkoutPage.proceedToCheckout();
});

Then('I should see the address details and order summary', async () => {
  await checkoutPage.verifyAddressAndSummary();
});

When(
  'I enter payment details {string} {string} {string} {string} {string}',
  async ({}, name: string, number: string, cvc: string, month: string, year: string) => {
    await checkoutPage.enterPaymentDetails(name, number, cvc, month, year);
  }
);

When('I place the order', async () => {
  await checkoutPage.placeOrder();
});

When('I Pay and Confirm Order', async () => {
  await checkoutPage.payAndConfirmOrder();
});

Then('I should see an order confirmation message', async () => {
  await checkoutPage.verifyOrderConfirmation();
});

Given('I have a product in the cart without login', async ({ page }) => {
  cartPage = new CartPage(page);
  await page.goto('https://automationexercise.com/products');
  await cartPage.addFirstProductToCart();
});

When('I download the invoice', async () => {
  const filePath = await checkoutPage.downloadInvoice();
  // Ensure file exists
  if (!filePath || !fs.existsSync(filePath)) {
    throw new Error('Invoice was not downloaded');
  }
});

Then('the invoice file should be downloaded successfully', async () => {
  console.log('✅ Invoice file verified successfully.');
});
