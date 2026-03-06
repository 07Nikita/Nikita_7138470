"use strict";
console.log("hii");
//!type inference
let o = 10;
o = 20;
//?you cannot give other data type
//!type annotation
let b = "hello"; //?variable declare 
let c = 10;
let d = true;
let e; //?we cannot assign values later
let f; //?we can assign values later
let g = 20;
g = "nikita"; //?can asign any data type
//!array and tuples
let arr = [20, 3, 45, 67,];
let arr2 = [20, 3, 45, 67,];
arr2.push(329);
console.log(arr2);
let arry = [23, "niki", true]; //?this is called tuples
let arry3 = [23, "niki", true, 213];
//*let arry3:[number,string,boolean,number]=[23,"niki",true,213] //?only defined data type can be stored
arry3.push(234);
console.log(arry3);
//!object
let stue = {
    name: "nikita",
    age: 23
};
//!functions
function greet(name, age = 23) {
    console.log(`${name} and ${age}`);
    //return 10 //not assignble
}
greet("nikita");
function add3(a, b) {
    return a + b;
}
console.log(add3(10, 30));
//!use arrow function
const greet1 = (name, age = 23) => {
    console.log(`${name} and ${age}`);
};
greet1("nikita");
const add1 = (n, m) => {
    return n + m;
};
console.log(add1(10, 30));
let arr5 = [234, "sdf"]; //?heterogenous array(kinda) //we can addreadonly if you dont wanna add anything to array
arr5.push(324);
//! read-only
let aa6 = [23, "nikita", true];
let obj = {
    id: 213,
    name: "NIKITA",
    age: 23
};
let mydog = {
    name: "sheru",
    age: 3,
    breed: "pitbull"
};
let myCar = {
    name: "toyota",
    color: "red",
    sunroof() {
        return "sunroof";
    }
};
