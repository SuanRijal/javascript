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

function countVowels(str){
    let count=0;
    for(const char of str)
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
    count++;
        }
}

console.log(count); 


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