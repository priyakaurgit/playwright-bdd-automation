import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { ProductsPage } from '../pages/ProductsPage';

const { Given, When, Then } = createBdd();

let cartPage: CartPage;
let productsPage: ProductsPage;

Given('I am on the home page', async ({ page, $testInfo }) => {
  console.log('▶ Running Scenario: ' + $testInfo.title);
  cartPage = new CartPage(page);
  //await page.goto('https://automationexercise.com');
  await page.goto(process.env.BASE_URL!);
});

When('I add a product to the cart', async () => {
  await cartPage.addFirstProductToCart();
});

Then('the product should be visible in the cart', async () => {
  await cartPage.verifyProductInCart();
});

Given('I have a product in the cart', async ({ page }) => {
  cartPage = new CartPage(page);
  // await page.goto('https://automationexercise.com');
  await page.goto(process.env.BASE_URL!);
  await cartPage.addFirstProductToCart();
});

When('I remove the product from the cart', async () => {
  await cartPage.removeProductFromCart();
});

Then('the cart should be empty', async () => {
  await cartPage.verifyCartIsEmpty();
});

Given('I add {string} to the cart', async ({ page }, productName: string) => {
  productsPage = new ProductsPage(page);
  cartPage = new CartPage(page);
  await productsPage.goto();
  await productsPage.addProductToCart(productName);
  await cartPage.viewCartLink.click();
});

When('I increase the quantity to {int}', async ({ page }, quantity: number) => {
  await cartPage.updateProductQuantity(quantity);
});

Then('the cart should show quantity as {int}', async ({ page }, expectedQty: number) => {
  const actualQty = await cartPage.getProductQuantity();
  expect(actualQty).toBe(expectedQty);
});

Then('the total price should update correctly', async () => {
  const total = await cartPage.getTotalPrice();
  const unitPrice = await cartPage.getUnitPrice();
  const quantity = await cartPage.getProductQuantity();
  expect(total).toBe(unitPrice * quantity);
});
