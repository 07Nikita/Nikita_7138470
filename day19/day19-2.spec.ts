import {test} from "@playwright/test"
import fs from "fs"
import path from "path"

// in excel
// (path.join(__dirname,"../testdata/readexcel.xlsx"))

//? reading and coverting to javascript file before ,so out side the test block
let datafile=fs.readFileSync(path.join(__dirname,"../testdata/data.json"))
let data=JSON.parse(datafile)

// test("json data",async({page})=>{
//     data.forEach(d => {
//          console.log(d.greet);
//     });
//     for (let i = 0; i < data.length; i++){
//         console.log(data[i].greet);
//     }
// })

test("for application",async({page})=>{
    // await page.goto(data.url)
    // await page.locator("#username").fill(data.Username)
    // await page.locator("#password").fill(data.Password)
    for(let d of data){
        let url=d.url
        let user=d.Username
        let pass=d.Password

        await page.goto(url)
        console.log(page.title());
    
        await page.locator("#username").fill(user)
        await page.locator("#password").fill(pass)
        await page.locator("#submit").click()
    }
})
