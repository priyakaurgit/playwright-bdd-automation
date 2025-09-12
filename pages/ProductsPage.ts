import { Page, Locator } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export class ProductsPage {
  readonly page: Page;
  readonly productList: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productList = page.locator('.product'); // adjust selector for all products
    this.addToCartButton = page.locator('.add-to-cart'); // adjust selector
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL! + '/products');
  }

  /**
   * Adds a specific product to the cart by name
   * @param productName Name of the product
   */
  async addProductToCart(productName: string) {
    const product = this.page.locator('.productinfo', { hasText: productName });
    await product.locator('.add-to-cart').click();

    // Optional: handle modal/pop-up after adding to cart
    const continueButton = this.page.locator('.continue-shopping'); // adjust selector if needed
    if (await continueButton.isVisible()) {
      await continueButton.click();
    }
  }
}
