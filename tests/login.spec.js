import {test, expect} from '@playwright/test';

test('Login Test', async ({page}) => {
   await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('food');
    await page.locator('#nav-search-submit-button').click();
})