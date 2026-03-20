//! END to end scinario
import { test } from "@playwright/test"
import  amazonp from "../PageObjectModel/day20.page"
import fs from "fs"
import path from "path"

let datafile = fs.readFileSync(path.join(__dirname,"../testdata/day20.json"))
let data = JSON.parse(datafile)

test("Amazon Phone Purchase Flow", async ({page}) => {
    const amazon = new amazonp(page)
    await page.goto(data.url)
    await amazon.searchProduct(data.searchItem)
    await amazon.applyRamFilter()
    await amazon.selectPhone(data.phoneIndex)

    let pages = page.context().pages()

    const newPage = pages[1]
    // await amazon.changeQuantity(data.quantity)
    await page.locator('(//input[@id="add-to-cart-button" and @title="Add to Shopping Cart"])[1]').click()

})
