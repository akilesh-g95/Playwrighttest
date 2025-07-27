import { test, expect } from '@playwright/test';

test('date picker', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.fill("#datepicker","07/10/2025");

    const year = "2026";
    const month = "August";
    const date = "28";

    await page.locator("#datepicker").click();

    while (true) {
        const yearpick = await page.locator(".ui-datepicker-year").textContent();
        const monthpick = await page.locator(".ui-datepicker-month").textContent();

        if (yearpick === year && monthpick === month) {
            break;
        }
        await page.click("//span[@class='ui-icon ui-icon-circle-triangle-e']");

    }
    const dates = await page.$$('//a[@class="ui-state-default"]');

    for (const dt of dates) {
        const text = await dt.textContent();

        if (text.trim() === date) {
            await dt.click();
            break;
        }
    }

    await page.waitForTimeout(4000);
})