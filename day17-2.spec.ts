import {test} from "@playwright/test"
test("dialouge", async({page})=>{
    page.on("dialog",async(d)=>{
      //  await d.accept()
      if(d.type()=="alert"){
        await d.accept()
      }
      else if(d.type()=="confirm"){
        await d.dismiss()
        console.log(await d.message())
      }
      else if(d.type()=="prompt"){
        // await d.accept("hello")
        // await d.defaultValue()
        if (d.defaultValue()=="Harry Potter"){
            console.log((await d.defaultValue()));
            await d.accept(d.defaultValue())
        }
        else{
            await d.accept("tom")
        }
      }
    })
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//button[@id="alertBtn"]').click()
    
    await page.locator('//button[@id="confirmBtn"]').click()
    // page.once("dialog",async(d)=>{
    //     await d.accept()
    // })
    await page.locator('//button[@id="promptBtn"]').click()
//? page.on("dialog",()=>{}) //for whole page
//? page.once("event",()=>{}) // fro particular dialouge

})