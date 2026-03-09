//! gives us all the item which contains the visible text
//? //span[contains(@class,"visible text")]
//? //span[contains(text(),"visible text")]
import {test} from "@playwright/test"
test("contains", async({page,browserName})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones")
    await page.locator('//input[@type="submit"]').click()
    await page.locator('//a[@aria-label="Apply the filter Android 11.0 to narrow results"]/child::div/child::label').click()
    await page.screenshot({path:`screenshot/task${browserName}.png`})


    

})
//span[contains(text(),"Tue")]
//? //section[..]/child::div/child::h1 (too long)
//! //section[..]/descendant::h1[..]
//? //div[@id="overflow-container"]/descendant::input[@name="username"]
//? //div[@id="form"]/descendant::input[@id="username"]/preceding-sibling::label/following-sibling::input
//? //div[@class="RG5Slk"]/parent::div/following-sibling::div/child::div/child::div/child::div[@class="hZ3P6w DeU9vF" and .="₹27,999"]
//? //div[@class="RG5Slk"]/parent::div/following-sibling::div/descendant::div[@class="hZ3P6w DeU9vF" and .="₹27,999"]
//! child--> parent
//? //input[@id="username"]/parent::div/parent::div
//? //input[@id="username"]/../parent::div
//? //input[@id="username"]/ancestor::div[@id="form"]
//? //input[@type="password"]/../parent::div/child::div/following-sibling::div

//! path
//? //*[name()="path" and contains(@an,"av")]
//? (//*[name()="path" and contains(@d,"m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203")])[1]
//? //*[local-name()="svg"]