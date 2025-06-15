function sum(a,b){ // function params are local variables of functions and has block scope
   sum= a+b;
   console.log("sum of a and b is",sum)
}
sum(9,9);

//arrow function
const arrowmul=(a,b)=>{  //arroe fucntion should be stored in variable,right side part is arrow function

    console.log(a*b)
}
arrowmul(5,6);



function greet(){
    console.log("hello")
};

const sayhello= greet;
sayhello();


const parent={
    greet:function(){console.log("hi,i am function from parent object")}
}
const child= Object.create(parent);
child.greet(); //inherits and uses greet from parent



 


// let names=["anusha","sharmi","rooji"]
// let count=0;
// for(const word of names){ //nested loop is used in this
//     for(const char of word){

//         if(
//             char==="a"|| char==="e"|| char==="i"|| char==="o"||char==="u"
//         ){
//             count++

//         }
//     }
// }

// console.log(count)


// function countVow (char)=>{
//    let count=0;
//    for(const char of countVow){
//     if(
//         char==="a"|| char==="e"|| char==="i"|| char==="o"||char==="u"
//     ){
//      count++
//     }
//    }
// }
// countVow()
// console.log(count);

//foreach method to create a loop, parameters call back function is pass
//for a given array of number, print square of each number using for each loop

let numbers=[1,2,3,4,5]
let calculateSquare= (num)=>{//call back function
    console.log(num*num);
 
}

numbers.forEach(calculateSquare)   

let nums=[4,7,8,9]

// nums.map((val)=>{
// console.log(val);  arr.map method  with call back function
// });



let newArray=nums.map((val)=>{
 return val;
})
 console.log(newArray);