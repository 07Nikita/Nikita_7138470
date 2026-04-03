import { test,expect } from "@playwright/test"
import fs from "fs"
import path from "path"

let datafile = fs.readFileSync(path.join(__dirname,"../data/data.json"))
let data = JSON.parse(datafile)

let baseURL="https://restful-booker.herokuapp.com";

test("Generate Token", async ({ request }) => {

    //! AUTH
  let r1 = await request.post(`${baseURL}/auth`, {
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      username: data.username,
      password: data.password
    }
  });
    console.log(await r1.json())
    expect(r1.status()).toBe(200)
     let authRes = await r1.json()
    expect(authRes).toHaveProperty("token")
    expect(authRes.token).not.toBeNull()
    console.log("-------------------------------------------------------------------------------------------");

    //! POST
    let r2 = await request.post(`${baseURL}/booking`, {
    headers: {
      "Content-Type": "application/json"
    },
    data: {
    firstname: data.firstname,
    lastname: data.lastname,
    totalprice: data.totalprice,
    depositpaid: data.depositpaid,
    bookingdates: data.bookingdates,
    additionalneeds: data.additionalneeds
    }
  });
console.log(await r2.json())
let postRes = await r2.json()
    expect(postRes).toHaveProperty("bookingid")
    console.log("-------------------------------------------------------------------------------------------");
 
    //! GET
    let r3=await request.get(`${baseURL}/booking`)
console.log(await r3.json())
    console.log("-------------------------------------------------------------------------------------------");
  expect(r3.status()).toBe(200)

  
    //! GET by booking id
    let r4=await request.get(`${baseURL}/booking/${data.id}`)
console.log(await r4.json())
    console.log("-------------------------------------------------------------------------------------------");
 expect(r3.status()).toBe(200)
    
});