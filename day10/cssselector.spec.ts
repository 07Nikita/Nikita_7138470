//! DAY 10
import {test} from "@playwright/test"

// test("css selector", async({page})=>{
//     await page.goto('https://practicetestautomation.com/practice-test-login/')
//     await page.locator("input#username").fill("student") //! [name="username"] ,input[name="username"] , #username[name="username"]
//     await page.locator("input#password").fill("Password123") 
//     await page.locator("button#submit").click() //! #submit.btn (id,class)
//     await page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click()
// })
 test("css selector",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("#name").fill("nikita")
    await page.locator("#phone").fill("8573903045")
    await page.locator("#female").click()

 })
