import {test,request} from "@playwright/test"
let baseURL="https://petstore.swagger.io/v2";

//!POST
test("Add Pet",async({request})=>{
    let res=await request.post(`${baseURL}/pet`, {
        data:{
            id:101,
            name:"panda",
            status:"available"
        }
    });
    console.log(await res.json());
});


//! GET
test("Get Pet by ID",async({request})=>{
    let res=await request.get(`${baseURL}/pet/101`);
    let body=await res.json();
    console.log(body);
});


//! UPDATE (PUT)
test("Update Pet",async({request})=>{
    let res=await request.put(`${baseURL}/pet`, {
        data:{
            id: 101,
            name:"panda",
            status:"sold"
        }
    });
    console.log(await res.json());
});


//! DELETE
test("Delete Pet",async({request})=>{
    let res=await request.delete(`${baseURL}/pet/101`);
    console.log(res.status());
});