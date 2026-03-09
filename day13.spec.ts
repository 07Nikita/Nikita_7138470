//! getby methods
/**
 * get by text()
 * get by alttext()
 * get by label()
 * get by title()
 * get by placeholder()
 * get by role()
 * get by testid()
*/
import {test} from '@playwright/test'
test("get by methods", async({page, browserName})=>{
    // await page.goto('https://www.amazon.in/')
    // await page.locator('//input[@id="twotabsearchtextbox"]').fill('phone')
    // await page.locator('//input[@type="submit"]').click()
    // let text=await page.locator('//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]/child::span|//span[@class="a-price-whole"]').nth(19).allTextContents()
    // console.log(text);
    // await page.goto('https://practicetestautomation.com/practice-test-login/')
    // await page.getByLabel('Username',{exact:true}).fill('student') //? only work if it gets the exact value // await page.getByLabel('User').fill('student')
    // await page.getByLabel('Password').fill('Password123') //? await page.getByLabel('Pass').fill('Password123')
    // await page.getByText('Submit').first().click()


    // await page.getByRole("textbox",{name:"Username", exact:true}).fill("STUDENT")
    // await page.getByPlaceholder("placeholder_name")
    await page.goto('https://www.saucedemo.com/')
    await page.getByTestId('data-test="username').fill('hello')
    

    
})

