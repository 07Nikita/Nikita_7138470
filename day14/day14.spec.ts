import {test,expect} from '@playwright/test'
// import {expect} from '@playwright/test'
 test("day14",async({page})=>{
//! type method do not update ,fill method update what is already written
    // await page.goto('https://practicetestautomation.com/practice-test-login/')
    // await page.locator('//input[@name="username"]').fill('student')
    // await page.locator('//input[@name="username"]').fill('student1')
    // await page.locator('//input[@name="password"]').type('Password123')
    // console.log(await page.getByLabel('Password').isVisible());

    //! how to locate from multilple element
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    // await page.locator('//input[@type="submit"]').click()
    await page.keyboard.press("Enter")
    console.log(await page.locator('//span[@class="a-price-whole"]').all());
    
})