import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

// test("excel",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../testdata/readexcel.xlsx"))
//     let sheet=await book.getWorksheet("Sheet4")
//     if(!sheet){
//         sheet=await book.addWorksheet("Sheet4")
//     }
//     sheet.getRow(1).getCell(1).value="playwright";
//     await book.xlsx.writeFile(path.join(__dirname,"../testdata/readexcel.xlsx"))
// }
// )


test("amazon",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("laptop")
    let suggestions = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents()
    console.log(suggestions)
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../testdata/readexcel.xlsx"))
    let sheet=await book.getWorksheet("amazon")
    if(!sheet){
        sheet=await book.addWorksheet("amazon")
    }
   for (let i = 0; i < suggestions.length; i++) {
    sheet.getRow(i + 1).getCell(1).value = suggestions[i]

}
    await book.xlsx.writeFile(path.join(__dirname,"../testdata/readexcel.xlsx"))
}
)