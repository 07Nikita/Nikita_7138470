import {test} from "@playwright/test"
 //!annotations
//?we are adding some extra label
 /**
  *skip
  *only
  *fixme
  *fail
  *describe
  *slow
  *settimeout 
  */

  test("test",async()=>{
    console.log("hello1");
    
  })

   test("test2",async()=>{
    console.log("hello2");
    
  })

   test("test3",async()=>{
    test.slow()
    console.log("hello3");
    
  })

   test.skip("test4",async()=>{
    console.log("hello4");
    
  })

   test.describe("test6",async()=>{
    console.log("hello6");
    test("xs",({page})=>{})
    test("saf",()=>{})
    test("fsa",()=>{})
    test("fa",()=>{})
  })

  //? npx playwright test -g "test" (command to test a perticlar test block by the name) headed
  //? npx playwright test tests/test2.spec.ts --debug (to open the debug console) already shows result without headed comand
  //? npx playwright test --project=chromium (to run on a specific browser) headed
  //? npx playwright show-report (error)