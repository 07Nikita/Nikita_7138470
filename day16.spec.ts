// let arr=[10,20,30,40,50]
// let obj={
//     key1:"value1",
//     key2:"value2"
// }
// //! for in
// for(let i in obj)
//     console.log(i);

// for(let i in arr)
//     console.log(i);

// for(let ch in obj){
//     console.log(ch);
//     console.log(obj[ch]);
    
    
// }

// //! for of

// // for(let i of obj) //?object is not irratiable
// //     console.log(i);
// for(let i of arr)
//     console.log(i);

//! standard
import {test,expect} from '@playwright/test'
//  test('standard-dropdown', async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//     await page.locator('#country_code').selectOption({value:'+14'})
//     await expect(page.locator('#country_code')).toHaveValue('+14')
//     //await page.locator('#country_code').selectOption({label:'+14'})
//  })
 //! multi
//   test('multi-select', async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//     await page.locator('#select-multiple-native').selectOption([{value:"Pierced Owl Rose Gold Plated Stainless Steel Double"},{value:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"},{value:"MBJ Women's Solid Short Sleeve Boat Neck V "}])
//     await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
//    })

//! custom
//  test('custom-select', async({page})=>{
//     await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
  
//     await page.locator('//span[@class="myntraweb-sprite sort-downArrow sprites-downArrow "]').click({force:true})
//     await page.waitForTimeout(3000)
//     let opt= await page.locator('//label[@class="sort-label "]').all()
//     for(let i of opt){
//       let text= await i.textContent()
//       console.log(text);
//       if(text.includes("What'")){
//          await i.click()
//          break;
//       }
   
//     }

//    })

//! multiple-tabs
//  test("multilple", async({browser})=>{
//    let context =await browser.newContext()
//    let page= await context.newPage()
//   //  await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")

//   //  let page2= await context.newPage()
//   //  await page2.goto("https://www.flipkart.com/")
//   await page.goto('https://www.flipkart.com/')
//  await page.locator("//span[@class='b3wTlE']").click()
//  await page.locator('//input[@title="Search for Products, Brands and More"]').first().fill("shoes")
//  await page.getByRole('button',{ name: 'Search for Products, Brands'}).click()
//  let [page2]=await Promise.all([
//  page.waitForEvent("popup"),
//  page.locator('//img[@class="MZeksS"]').first().click()])
//  console.log(page);
//  console.log(page2);
 
 
//  })

 //! task
 test("multilple", async({browser})=>{
   let context =await browser.newContext()
   let page= await context.newPage()
//    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=1')

//    let [page2]=await Promise.all([
//  page.waitForEvent("popup"), //? can use 
//  page.locator('//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"]').first().click()
// ])
//   await page2.locator('//button[@class="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-200"]').click()

await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
await page.locator('//textarea[@class="w-full h-40 p-2 border rounded-lg mb-4"]').fill('hellooo')
await page.locator('#fileName').fill('hello.txt')
let [page2]=await Promise.all([
page.waitForEvent("download"),
page.locator('#downloadButton').click()
])







})

  