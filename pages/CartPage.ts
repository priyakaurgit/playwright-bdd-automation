import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly firstProductAddBtn;
  readonly viewCartLink;
  readonly cartProduct;
  readonly cartItem;
  readonly removeButton;
  readonly emptyCartMessage;
  readonly quantityInput;
  readonly totalPrice;
  readonly unitPrice;

  constructor(page: Page) {
    this.page = page;
    this.firstProductAddBtn = page.locator('a[data-product-id="1"]').first(); // first product's Add to cart
    this.viewCartLink = page.locator('u:has-text("View Cart")');
    this.cartProduct = page.locator('#cart_info_table tbody tr');
    this.cartItem = page.locator('.cart_info');
    this.removeButton = page.locator('.cart_quantity_delete');
    this.emptyCartMessage = page.locator('#empty_cart');
    this.quantityInput = page.locator('.cart_quantity'); // adjust selector
    this.totalPrice = page.locator('.cart_total_price'); // adjust selector
    this.unitPrice = page.locator('.cart_unit_price'); // adjust selector
  }

  async addFirstProductToCart() {
    await this.firstProductAddBtn.click();
    await this.viewCartLink.click();
  }

  async verifyProductInCart() {
    await expect(this.cartProduct).toBeVisible();
  }

  async removeProductFromCart() {
    await this.removeButton.click();
  }

  async verifyCartIsEmpty() {
    await expect(this.emptyCartMessage).toBeVisible();
  }

  async updateProductQuantity(quantity: number) {
    await this.quantityInput.fill(quantity.toString());
  }

  async getProductQuantity(): Promise<number> {
    return parseInt(await this.quantityInput.inputValue());
  }

  async getTotalPrice(): Promise<number> {
    const text = await this.totalPrice.textContent();
    return parseFloat(text?.replace('$', '') || '0');
  }

  async getUnitPrice(): Promise<number> {
    const text = await this.unitPrice.textContent();
    return parseFloat(text?.replace('$', '') || '0');
  }
}
