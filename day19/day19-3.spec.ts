// import {test} from "@playwright/test"
// import example from "../PageObjectModel/example.page.ts"
// test("",async({page})=>{
//     let examplepage=new example(page)
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await examplepage.usernameTF.fill("student")
//     await examplepage.passwordTF.fill("Password123")
//     await examplepage.SubmitBtn.click()
// })

import {test} from "@playwright/test"
import fs from "fs"
import path from "path"
import Example from "../PageObjectModel/example.page"

let datafile = fs.readFileSync(path.join(__dirname,"../testdata/data.json"))
let data = JSON.parse(datafile)

test("json + pom",async({page})=>{
    const examplePage = new Example(page)
   
        await examplePage.usernameTF.fill(d.Username)
        await examplePage.passwordTF.fill(d.Password)
        await examplePage.submitBtn.click()


})