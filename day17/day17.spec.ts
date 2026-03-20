import {test} from "@playwright/test"
test("frame", async({page})=>{
    // await page.goto("https://ui.vision/demo/webtest/frames/")
    // let frame=await page.frames()
    // console.log(frame.length);
    // // console.log(frame);
    
    // for(let i of frame){
    //     console.log(await i.title());
        
    // }
    // await page.title()
    //! -----------------------------------
    // let frame2=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2.html"})
    // await frame2?.locator('//input[@name="mytext2"]').fill("hello")
    // let frame1= await page.frameLocator('//frame[@src="frame_1.html"]')
    // // await frame1.locator('//input[@name="mytext1"]').fill('agshfakdgfakdg')
    // await frame1.fill('//input[@name="mytext1"]','sdkjfdjkf')    
    //await page.locator('//frame[@src="frame_1.html"]').contentFrame()

    //!taskk
//       const frame3 = page.frameLocator('//frame[@src="frame_3.html"]');
//   const googleForm = frame3.frameLocator('iframe');
//   await googleForm.locator('//div[@class="AB7Lab Id5V1"]').nth(1).click();
})

