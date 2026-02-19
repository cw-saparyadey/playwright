import { expect } from "@playwright/test";

export class HyundaiVenuePage {
  constructor(page) {
    this.page = page;
    this.title = page.locator(".o-j6.o-jm.o-js.o-jH");
    this.price = page.locator("span:has-text('Rs. 6.70 - 11.51 Lakh')");
    this.roadPriceBtn = page.locator("a:has-text('Venue On Road Price')");
    this.images = page.locator("[data-lang-id='images_widget_body'] img");
    this.search = page.getByPlaceholder("Search", { exact: true });
    this.fuelSection = page.locator("[data-testing-id='fuel-type-tick-0-checkbox-label']");
  }
  async navigate() {
    await this.page.goto("https://stg.carwale.com/hyundai-cars/venue/");
  }

  async pages() {
    await expect(this.page).toHaveTitle(
      "Hyundai Venue Price in India - February 2026 Venue Price, Images, Mileage & Colours - CarWale",
    );
  }
  async validateCarName() {
    await expect(this.title).toHaveText("Hyundai Venue");
  }

  async validatePrice() {
    await expect(this.price).toBeVisible();
  }

  async imagesdisplay() {
    await expect(this.images.nth(2)).toBeVisible({ timeout: 10000 });
  }
 
  async validatesearch() {
    await this.search.fill("Hyundai Creta");
    await expect(this.search).toHaveValue("Hyundai Creta");
  }               

  async validateFuel() {
  await this.fuelSection.click();

  await expect(this.page.locator('[data-testing-id*="-selected-"]'))
    .toBeVisible();
}
 async clickOnRoadPrice() {
    await this.roadPriceBtn.click();
  }
  async validateOnRoadNavigation() {
  await expect(this.page).toHaveURL(/price-in/);
}


}
