const {expect, test}= require('@playwright/test')

test('handling checkboxes', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/' )

    await page.locator('//input[@type="checkbox" and @id="sunday"]').check()
   await expect( await page.locator('//input[@type="checkbox" and @id="sunday"]').isChecked()).toBeTruthy();

   await page.waitForTimeout(3000);
   await page.waitForTimeout(3000)

   //multiple checking the checkbox

   const checkboxelocator = [
    "//input[@type='checkbox' and @id='tuesday']",
     "//input[@type='checkbox' and @id='friday']",
      "//input[@type='checkbox' and @id='monday']"

   ];

   for(const ceckbox of checkboxelocator){

    await page.locator(ceckbox).check();
   }
   await page.waitForTimeout(2000);


   // unchecking the checkbox
   for(const uncheckbox of checkboxelocator){

    if(await page.locator(uncheckbox).isChecked()){
        await page.locator(uncheckbox).uncheck();
    }
   }
})