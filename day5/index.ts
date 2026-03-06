console.log("hii");
//!type inference
let o=10
o=20
//?you cannot give other data type

//!type annotation
let b:string="hello"//?variable declare 
let c:number=10
let d:boolean=true
let e:null //?we cannot assign values later
let f:undefined //?we can assign values later
let g:any=20
g="nikita" //?can asign any data type

//!array and tuples
let arr=[20,3,45,67,]
let arr2:number[]=[20,3,45,67,]
arr2.push(329)
console.log(arr2);

let arry=[23,"niki",true] //?this is called tuples
let arry3:any[]=[23,"niki",true,213]
//*let arry3:[number,string,boolean,number]=[23,"niki",true,213] //?only defined data type can be stored
arry3.push(234)
console.log(arry3);

//!object
let stue:{
    name:string,
    age:number //? age?:number(makes it optional, you dont have to define it)
    roll?:number
}={
    name:"nikita",
    age:23
}

//!functions
function greet(name:string,age:number=23):void{
    console.log(`${name} and ${age}`);
    //return 10 //not assignble
}
greet("nikita")

function add3(a:number,b:number):number//?return type 
{
    return a+b
}
console.log(add3(10,30));

//!use arrow function
const greet1 = (name: string, age: number = 23): void => {
  console.log(`${name} and ${age}`);
};

greet1("nikita");

const add1 = (n: number, m: number): number => {
  return n + m;
};

console.log(add1(10, 30));


let arr5:(string|number)[]=[234,"sdf"] //?heterogenous array(kinda) //we can addreadonly if you dont wanna add anything to array
arr5.push(324)

//! read-only
let aa6:readonly any[]=[23,"nikita",true]

//! interface
//todo syntax    interface <Interface-name>{
//todo                       property:type
//todo                                 }
 interface Person{
    readonly id:number,
    name:string,
    age:number,
    gender?:string
 }

 let obj:Person={
    id:213,
    name:"NIKITA",
    age:23
 }

 //!inheritance(extendes keyword)
 interface Animals{
    name:string,
    age:number
 }
 interface Dog extends Animals{
    breed:string
 }
 let mydog:Dog={
    name:"sheru",
    age:3,
    breed:"pitbull"
 }
 
 //!method
 interface Car{
    name:string,
    color:string,
    sunroof():string
 }
 let myCar:Car={
    name:"toyota",
    color:"red",
    sunroof(){
        return "sunroof"
    }
 }
 