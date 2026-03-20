import {test} from "@playwright/test"

//? before all
//? before eaach
//? after all
//? after each

test.beforeAll("",async()=>{
    console.log("before all");
})
test.beforeEach("",async()=>{
    console.log("before each");
})
test.afterAll("",async()=>{
    console.log("after all");
})
test.afterEach("",async()=>{
    console.log("after each");
})


test("test1",async()=>{
    console.log("test1");
    
})

test("test2",async()=>{
    console.log("test2");
    
})