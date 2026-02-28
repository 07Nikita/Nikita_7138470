// //! OOPS

// //? class: blueprint , structure for objects

// // class demo{
// //     //?properties
// //     //?methods
// //     //?constructor--> special method (multiple constructors are not allowed)
// //     constructor(){

// //     }
// // }

// class Cars{
//     //private brand:string;
//     brand:string;
//     colour:string="blue";
//     display():void{
//         console.log("hello1");
        
//     }
//     constructor(brand:string,colour:string){
//         this.brand=brand;
//         this.colour=colour;
//         this.display()
//         this.display=function(){
//             console.log("helloo");
            
//         }
//         }

//     start():void{
//         console.log("this is my CAR")
//     }
// }
// let z=new Cars("maruti","red")
// // z.brand="maruti"
// console.log(z.display());
// console.log(z.brand);



// //! access modifier
// //public
// //private
// //protected

//! inheritance
//  class Animal{
//     eat(){
//         console.log("all animalas eat");
        
//     }
//  }
//  class Cat extends Animal{
//     sound(){
//         console.log("meow");
        
//     }
//  }

//  let cat=new Cat()
//  cat.eat()
//  cat.sound()

class Person{
    name:string="nikita"
}
 class teacher extends Person{
    company:string="capeg"
    display(){
        console.log(this.name);
        console.log(this.company);       
    }
 }
let t=new teacher("abc","xyz");
t.display()
console.log(t);

let obj={
    name:"sdfsd"
}
console.log();
