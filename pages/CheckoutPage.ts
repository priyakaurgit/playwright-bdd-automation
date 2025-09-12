import { Page, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export class CheckoutPage {
  readonly page: Page;
  readonly proceedToCheckoutBtn;
  readonly placeOrderBtn;
  readonly addressDetails;
  readonly orderSummary;
  readonly nameOnCard;
  readonly cardNumber;
  readonly cvc;
  readonly expiryMonth;
  readonly expiryYear;
  readonly payAndConfirmBtn;
  readonly confirmationMessage;

  readonly downloadInvoiceBtn;
  readonly continueBtn;
  readonly registerLoginLink;

  constructor(page: Page) {
    this.page = page;
    this.proceedToCheckoutBtn = page.locator('a:has-text("Proceed To Checkout")');
    this.addressDetails = page.locator('#address_delivery'); // delivery address section
    this.orderSummary = page.locator('#cart_info'); // order summary table
    this.nameOnCard = page.locator('[data-qa="name-on-card"][name="name_on_card"]');
    this.cardNumber = page.locator('[name="card_number"]');
    this.cvc = page.locator('[name="cvc"]');
    this.expiryMonth = page.locator('[name="expiry_month"]');
    this.expiryYear = page.locator('[name="expiry_year"]');
    this.registerLoginLink = page.locator('a:has-text("Register / Login")');
    this.placeOrderBtn = page.locator('a:has-text("Place Order")');
    this.payAndConfirmBtn = page.locator('button:has-text("Pay and Confirm Order")');
    this.confirmationMessage = page.locator(
      'p:has-text("Congratulations! Your order has been confirmed!")'
    );
    this.downloadInvoiceBtn = page.locator('a:has-text("Download Invoice")');
    this.continueBtn = page.locator('a:has-text("Continue")');
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutBtn.click();
    if (await this.registerLoginLink.isVisible()) {
      await this.registerLoginLink.click();
    }
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }

  async verifyAddressAndSummary() {
    await expect(this.addressDetails).toBeVisible();
    await expect(this.orderSummary).toBeVisible();
  }

  async payAndConfirmOrder() {
    await this.payAndConfirmBtn.click();
  }
  async enterPaymentDetails(
    name: string,
    number: string,
    cvc: string,
    month: string,
    year: string
  ) {
    await this.nameOnCard.fill(name);
    await this.cardNumber.fill(number);
    await this.cvc.fill(cvc);
    await this.expiryMonth.fill(month);
    await this.expiryYear.fill(year);
  }

  async verifyOrderConfirmation() {
    await expect(this.confirmationMessage).toBeVisible();
  }
  async downloadInvoice() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.downloadInvoiceBtn.click(),
    ]);

    // Save to a temp path
    const path = await download.path();
    console.log(`Invoice downloaded at: ${path}`);
    return path;
  }

  async continueAfterInvoice() {
    await this.continueBtn.click();
  }
}
