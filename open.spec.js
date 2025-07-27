import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('facebook');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dfacebook%26sca_esv%3D95ea4c12a7d0ddd3%26source%3Dhp%26ei%3DSSRjaOvVGLahnesP6cqX-QE%26iflsig%3DAOw8s4IAAAAAaGMyWbgrFPZWn5rwYlhaV1CeJkmiAEDT%26ved%3D0ahUKEwirnsTDrJqOAxW2UGcHHWnlJR8Q4dUDCA8%26uact%3D5%26oq%3Dfacebook%26gs_lp%3DEgdnd3Mtd2l6IghmYWNlYm9vazIREC4YgAQYsQMY0QMYgwEYxwEyCBAAGIAEGLEDMgsQABiABBixAxiDATIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzILEAAYgAQYsQMYgwFIujVQ1wlYxCtwB3gAkAEAmAGHAaAB1Q2qAQQwLjE0uAEDyAEA-AEBmAIVoALqD6gCCsICChAAGAMY6gIYjwHCAg4QABiABBixAxiDARiKBcICBRAuGIAEwgIIEC4YgAQYsQPCAg4QLhiABBixAxjRAxjHAcICCxAuGIAEGLEDGIMBwgIFEAAYgATCAg4QLhiABBixAxiDARiKBcICCBAuGIAEGNQCwgILEAAYgAQYsQMYigWYAxfxBUHLHVRlCTCQkgcENy4xNKAH44sBsgcEMC4xNLgH_w7CBwYyLTIuMTnIB_cB%26sclient%3Dgws-wiz%26sei%3DVCRjaK2VEfuenesPir_ziAM&q=EgTLwPQoGNTIjMMGIjDq4qZL0JRnY_OaHEVrZEcK84QxcpU1jI1ji0ytZtsvE7xXfber90KzlME_Hjcd90wyAVJaAUM');
  await page.locator('iframe[name="a-kzhan5ymjsnq"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-kzhan5ymjsnq"]').contentFrame().getByRole('button', { name: 'Get a new challenge' }).click();
  await page.locator('iframe[name="c-kzhan5ymjsnq"]').contentFrame().locator('td:nth-child(3)').first().click();
  await page.locator('iframe[name="c-kzhan5ymjsnq"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
  await page.locator('iframe[name="c-kzhan5ymjsnq"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-kzhan5ymjsnq"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
});