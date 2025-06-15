// let heading2=document.querySelector("h2")
// console.dir(heading2)

// heading2.innerText=heading2.innerText +" from apna collage";

// let section= document.querySelectorAll(".section")
// console.dir(section)

// section[0].innerText= section[0].innerText + " div1";
// section[1].innerText= section[1].innerText + " div2";
// section[2].innerText= section[2].innerText + " div3";

// let div= document.querySelectorAll("div");
// div.style.backgroundColor="yellow";


// dom create and add new element to document through js
let newBtn= document.createElement("button") //button created 
newBtn.innerText="click me" // text to btn given
newBtn.style.backgroundColor= "yellow";
console.log(newBtn)

let div1= document.querySelector("div") //access div element from document
div1.append(newBtn); // adds button elemtn inside first div element
// div1.prepend(newBtn)
// div1.before(newBtn)
// div1.after(newBtn)

// delete
// Node.remove
let para= document.querySelector("p")
para.remove();

let para1=document.querySelector("p")
para1.getAttribute("class");
para1.classList.add("class2")


