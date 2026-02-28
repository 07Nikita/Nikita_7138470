// const sym1 = Symbol.for("token");
// const sym2 = Symbol.for("mudit");

// console.log(sym1 === sym2); // true

let array=[10, 20, 30, 40, 50];

let arr1=[10,"dsa", true, null, undefined];
let stu=["mudit", 22,"JECRC","CS",true, 22];

console.log(array);
console.log(arr1);
console.log(stu[2]);
delete stu[2];
console.log(stu);

//objects

let student={
    name: "Nikita",
    age: 22,   
    college: "JECRC",
    branch: "CS",
 }
 console.log(student);
 console.log(student.name);
 student.name="Rahul";
 console.log(student.name);
 console.log(student);

 delete student.name;
 console.log(student);

 function add(){
    let a = 10;
    let b = 20;
    console.log(10+20);
 }
 add();

function sub(a, b=5){
    console.log(a-b);
    return a-b;
 }

console.log(sub(10));   
console.log(sub(10,10));

let a = function (){
    console.log("Hello World");
}
console.log(a());
a();

(function (){
    console.log("Hello World");
})();
 
let z=()=>{
    console.log("hii");
    return "hello"
    console.log("class");
}
z()
console.log(z());
