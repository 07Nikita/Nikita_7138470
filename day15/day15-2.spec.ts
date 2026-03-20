import {test} from '@playwright/test'
test ("mouse-action", async({page})=>{

//! double click
// await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2')
// await page.locator('#btn_a').dblclick()
// await page.locator('#btn_a').click({button:"right"})
// await page.locator('#btn_b').click({button:"right",clickCount:2,force:true}

//! hover
    // await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
    // await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()

//! click (press and release)
    // await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
    // await page.locator("#circle").hover()
    // await page.mouse.down()
    // await page.mouse.up()

//! disabled button
    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
    // await page.locator("#submit").click({force:true})
    // await page.locator("#submit").dispatchEvent("click")

//! drag and drop
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    // await page.getByText('Mobile Charger').hover()
    // await page.mouse.down()
    // await page.getByText('Mobile Accessories').hover()
    // await page.mouse.up()
    // await page.getByText('Mobile Charger').dragTo(page.getByText('Mobile Accessories'))
    // await page.getByText('Laptop Charger').dragTo(page.getByText('Laptop Accessories'))
    // await page.getByText('Mobile Cover').dragTo(page.getByText('Mobile Accessories'))
    // await page.getByText('Laptop Cover').dragTo(page.getByText('Laptop Accessories'))

//! scroll
    // await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
    // await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    // await page.locator('//input[@type="checkbox"]').click() //?check or uncheck
    // await page.waitForTimeout(3000)
    // await page.mouse.move(100,100) //?if you know corrdinates

//! task
await page.goto('https://demoapps.qspiders.com/ui');
await page.locator('#name').click();
await page.keyboard.type('Nikita');
await page.keyboard.press('Tab');
await page.keyboard.insertText('nikita@gmail.com');
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
await page.keyboard.press('Tab');
await page.keyboard.press('Control+V');
await page.keyboard.down('Enter');
await page.keyboard.up('Enter');


})



