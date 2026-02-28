import {test} from "@playwright/test"
test("brocon", async({browser})=>{
//    let size= await page.viewportSize()
//    console.log(size);
//    //? to chnage the size
    // await page.setViewportSize({width:500,height:500})
    // console.log(await page.viewportSize());
    // await page.setViewportSize({width:6000,height:8000}) //use deafult size
    // console.log(await page.viewportSize());
    // await page.pause()
    let context=await browser.newContext()
    let page= await context.newPage()
    //? fetch the title
    // await page.goto("https://www.amazon.com/")
    // let a= await page.title()
    // console.log(a);
    // console.log(await page.url());
    // await browser.close()
    //? screenshot
    await page.goto("https://www.amazon.com/")
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/${time}ss.png`})
    console.log(await context.cookies());
    


    
    
})