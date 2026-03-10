import {test,expect} from "@playwright/test"
// test.use({actionTimeout:10930}) //! set timeout for whole file
test('asserstions', async({page})=>{
    // await page.setDefaultTimeout(10000) //! set timeout for whole test block

    // test.fail()
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    // await expect(page).toHaveScreenshot('image.png');
    // const locator = page.locator('//input[@name="userne"]');
        // await expect.soft(page.locator('//input[@name="userne"]')).toBeEmpty()
       // await page.locator('//input[@name="password"]').fill("he")
        await page.locator('//input[@name="pasord"]').fill("he",{timeout:10000}) //! to give time out to a particular method
//! hardcoded timeout will wait till the whole time is completed
//! await page.waitForTimeout(23445)
    // await expect(locator).toBeEmpty();
    // await expect(page.locator('')).toBeAttached()
//     const numbers = [10,20,30,40];

// expect(numbers).toContain(20);
// expect(numbers).toContain(50); // will fail
// expect(numbers).not.toContain(50); // will pass
//? hard asserstions- fails after the fail occurs
//? soft- fails after running the whole test block


})