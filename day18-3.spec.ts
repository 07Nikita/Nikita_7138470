import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path" 

// test("single test data",async({page})=>{
//     let book=new excel.Workbook()
//      await book.xlsx.readFile(path.join(__dirname,"../testdata/readexcel.xlsx"))
//      let sheet=await book.getWorksheet("Sheet1")
//      let data=await sheet?.getRow(1).getCell(1).value
//      console.log(data);
// })

test("multiple test data",async({page})=>{
    let book=new excel.Workbook()
     await book.xlsx.readFile(path.join(__dirname,"../testdata/readexcel.xlsx"))
     let sheet=await book.getWorksheet("Sheet2")  
    for (let i=1;i<=sheet?.actualRowCount;i++) {
        for (let j=1;j<=sheet?.actualColumnCount;j++) {
            let data = await sheet?.getRow(i).getCell(j).toString()
            console.log(data)
        }
    }

})