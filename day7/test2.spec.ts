import {test} from "@playwright/test"

//!using page
// test("title",async({page})=>{
//     //goto
//     await page.goto("https://www.amazon.in/")
//     //async and wait
//     await page.locator('input#twotabsearchtextbox').fill("dress")
// })


//!fixtures=it is a setup block of code  which is reuseble 
//?page, brower, browerName , context, request-->API

//!using brower
// test("title",async({browser})=>{
//    let context=await browser.newContext() //incognito mode
//    let page= await context.newPage()
//    await page.goto("https://www.amazon.in/")
//    await page.locator('input#twotabsearchtextbox').fill("dress")
// })

//!using context
// test("title",async({context})=>{
//    let page= await context.newPage()
//    await page.goto("https://www.amazon.in/")
//    await page.locator('input#twotabsearchtextbox').fill("dress")
// })

//!browerName ERROR
 test("title",async({browser,browserName})=>{
   let context=await browser.newContext() //incognito mode
   let page= await context.newPage()
   let page2= await context.newPage()

   await page.goto("https://www.amazon.in/")
   await page.locator('input#twotabsearchtextbox').fill("dress")
   console.log(browserName);
   await page.pause()
   await page2.goto("https://www.flipkart.com/")
   await page2.locator('input[fdprocessedid="nrkii6"]').fill("dress")
})


