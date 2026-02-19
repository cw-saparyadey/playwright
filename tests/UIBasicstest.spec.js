import { test } from '@playwright/test';
import { HyundaiVenuePage } from '../pages/HyundaiVenuePage';

test.describe('Hyundai Venue Tests', () => {

    test('Page', async ({ page }) => {

        const venue = new HyundaiVenuePage(page);
        await venue.navigate();
        await venue.pages();
        await venue.validateCarName();
        await venue.validatePrice();
        await venue.imagesdisplay();
        await venue.clickOnRoadPrice();
        await venue.validatesearch();
        await venue.validateFuel();

    });

});
