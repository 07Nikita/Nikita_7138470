import {test,expect} from "@playwright/test"
import path from "path"
test ("uploading and downloading",async({page})=>{

    //?----------------mehtod1-----------------------
    //! single file for multiple give in an array
    // await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator("#singleFileInput").setInputFiles("C:/Users/nikit/Desktop/hike/IMG_5241.JPG")
    // await page.getByRole("button",{name:"Upload Single File"}).click()
    // await page.waitForTimeout(3000)

    //! multiple file
    // await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator("#multipleFilesInput").setInputFiles([("C:/Users/nikit/Desktop/daily/tests/upload file/demo2.xlsx"),("C:/Users/nikit/Desktop/daily/tests/upload file/demo3.html"),("C:/Users/nikit/Desktop/daily/tests/upload file/demo4.css")])
    // await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    // await page.waitForTimeout(3000)

     //?----------------mehtod2-----------------------
    // await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"upload file/demo2.xlsx")) // or ../demo
    // await page.getByRole("button",{name:"Upload Single File"}).click()
    // await page.waitForTimeout(3000)

 //! DOWNLOADING
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.locator('//textarea[@class="w-full h-40 p-2 border rounded-lg mb-4"]').fill('hellooo')
    await page.locator('#fileName').fill('hello.txt')
    let [page2]=await Promise.all([
    page.waitForEvent("download"),
    page.locator('#downloadButton').click()
])
 let downloadfolder="C:/Users/nikit/Desktop/daily/downloads"
 let filename= await page2.suggestedFilename()
//  path.join(downloadfolder,filename)
await page2.saveAs(path.join(downloadfolder,filename))
})