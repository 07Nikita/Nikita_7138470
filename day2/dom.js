// console.log("hello");
// window.console.log("hello")
// console.log(window);

// console.log(document);
// console.log(document.body);
// console.log(document.head);
//  dom-document object model
//  its a tree like structre which contains nodes(tags)
// console.log(document.body.childNodes);
// console.log(document.body.children);
// let div1=document.body.children[3];
// console.log(div1.firstElementChild);
// console.log(div1.lastElementChild);
// console.log(div1.nextElementSibling);
// let head1=div1.lastElementChild
// console.log(head1.nextElementSibling);
// console.log(head1.previousSibling);
// console.log(head1.previousElementSibling);
// let h1=document.getElementById("head1")
// console.log(h1);
// get elements by id 
// get elemnet by class
// let h2=document.getElementsByClassName("h44")
// console.log(h2);
// let a1=Array.from(h2)
// console.log(a1);
// a1.map((ele)=>{
//     ele.style.color="blue"
//     ele.style.backgroundColor="pink"
//     ele.style.fontSize="30px"

// })
// let btn=document.getElementById("btn")
// console.log(btn);

// let hhd=document.getElementsByName("b1")
// console.log(hhd);

// let h21=document.getElementsByTagName("h1")
// console.log(h21);

// //query selector
// let jd=document.querySelector(".h44")
// console.log(jd);

// let hd=document.querySelectorAll(".h44")
// console.log(hd);

// let img1=document.createElement("img")
// console.log(img1);
// img1.setAttribute("src","bg.jpg")
// img1.setAttribute("alt","brokem")
// document.body.append(img1)

// let h1= document.createElement("h1")
// h1.innerHTML="javaa"
// document.body.append(h1)
// console.log(h1);

// let p= document.createElement("p")
// p.textContent="sdfkds aslikdj dhfj jdhfj jdfhd ;aslla; naosid ahwegdhabnasddk ajsda headw "
// p.setAttribute("id","p1")
// document.body.append(p)
// console.log(p);
// p.removeAttribute(id)
// console.log(p);
// document.body.removeChild("id");
// console.log(document.body);




//event handling
//inline handling
//written in html

// let btn1=document.getElementById("btn1")
// function demo () {
//     alert("button clicked")
// }



//not written inn html
// let btn1=document.getElementById("btn1")
// btn1.onclick=function demo(){
//     alert("clicked")
// }


//most famous
//addeventlistener
//element.addeventlistener("event",callback)
//  let btn1=document.getElementById("btn1")
//  btn1.addEventListener("click",()=>{
//     document.body.style.backgroundColor="pink"
//     let img1=document.createElement("img")
//     img1.setAttribute("src","bg.jpg")
//     document.body.append(img1)
//  })
 
 //themechanging dark mode 
 //make a counter + - reset

//  let btn1 = document.getElementById("btn1");
// let dark = false
// btn1.addEventListener("click",()=>{
//     if(!dark){
//         document.body.style.backgroundColor="black";
//         document.body.style.color="white";
//         dark=true;
//     } else {
//         document.body.style.backgroundColor="white";
//         document.body.style.color="black";
//         dark=false;
//     }
// })
// let count = 0;

// let countDisplay = document.getElementById("count");
// let plusBtn = document.getElementById("plus");
// let minusBtn = document.getElementById("minus");
// let resetBtn = document.getElementById("reset");

// plusBtn.addEventListener("click", () => {
//   count++;
//   countDisplay.textContent = count;
// });


// minusBtn.addEventListener("click", () => {
//   count--;
//   countDisplay.textContent = count;
// });

// resetBtn.addEventListener("click", () => {
//   count = 0;
//   countDisplay.textContent = count;
// });
// create table
const table = document.createElement("table");
table.border = "1";
// table.style.borderCollapse = "collapse";

const r1 = document.createElement("tr");
r1.appendChild(createCell("1"));
r1.appendChild(createCell("2"));
r1.appendChild(createCell("3"));
r1.appendChild(createCell("4"));
r1.appendChild(createCell("5"));
table.appendChild(r1);

const r2 = document.createElement("tr");
r2.appendChild(createCell("6"));
r2.appendChild(createCell("7"));
r2.appendChild(createCell("8"));
r2.appendChild(createCell("9"));
r2.appendChild(createCell("10"));
table.appendChild(r2);


const r3 = document.createElement("tr");
r3.appendChild(createCell("11"));
r3.appendChild(createCell("12"));
r3.appendChild(createCell("13"));
r3.appendChild(createCell("14"));
r3.appendChild(createCell("15"));
table.appendChild(r3);

const r4 = document.createElement("tr");
r4.appendChild(createCell("16"));
r4.appendChild(createCell("17"));
r4.appendChild(createCell("18"));
r4.appendChild(createCell("19"));
r4.appendChild(createCell("20"));
table.appendChild(r4);


const r5 = document.createElement("tr");
r5.appendChild(createCell("21"));
r5.appendChild(createCell("22"));
r5.appendChild(createCell("23"));
r5.appendChild(createCell("24"));
r5.appendChild(createCell("25"));
table.appendChild(r5);

document.body.appendChild(table);


function createCell(text) {
  const td = document.createElement("td");
  td.innerText = text;
  td.style.padding = "10px";
  return td;
}