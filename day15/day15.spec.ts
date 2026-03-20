import {test,expect} from '@playwright/test'
// test ("explicit-wait", async({page})=>{
//     await page.goto("https://www.amazon.com/")
// await page.getByRole('link', { name: 'MX Player' }).click();
// await page.getByTestId("nav_avod_desktop_topnav").waitFor({timeout:20000,state:"detached"}) //? state has priority0
//await page.waitForSelector("xpath/css",{timeout}))
//await page.locator("xpath").click()

// })

// test("", async({browser})=>{
//     let context= await browser.newContext()
//     let page=await context.newPage()
//     await page.goto('https://www.flipkart.com/')
//     await page.locator("//span[@class='b3wTlE']").click()
//     await page.locator('//input[@title="Search for Products, Brands and More"]').first().fill("shoes")
//     await page.getByRole('button',{ name: 'Search for Products, Brands'}).click()
//     // let [page2]=await Promise.all([page.waitForNavigation(),page.locator('//a[@rel="noopener noreferrer"]').first().click()])
//         let [page2]=await Promise.all([page.waitForNavigation(),page.locator('//img[@class="MZeksS"]').first().click()])
// console.log(await page.url());

// console.log(await page2.url());
//     // let price=await page2.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]').textContent()
//     // console.log(price);
    
// })
