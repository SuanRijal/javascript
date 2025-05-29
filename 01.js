/*console.log(" welcome to javascript");
fullName = "Anusha Rijal";
age = 22;
price = 100;
x = null;
y = undefined;
isFollow = true;
notFollow = false;
console.log(fullName);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);
console.log(notFollow);


const student = {
    fullName: "Anusha Rijal",
    cgpa: 3.55,
    age: 23,
    location: "Sinamangal"
}

// we can update a variable which are within a constant object in this way: example to print a age after certain year
student["age"] = student["age"] + 1;
console.log(student["age"]);

student["fullName"] = "Sujan Thapa";
console.log(fullName);


console.log(student);
console.log(student.cgpa);// way to print key of object
console.log(student["age"]) // way to get key of objct

//   create a const objc called "product" and store following data
const product = {
    productName: "pen",
    productPrice: 270,
    productRating: 5,
    productOffer: 50,
};

console.log(product);
console.log(product["productName"]);
console.log(product["productPrice"]);

// Airthemetic operators

let a = 5;
let b = 5;
console.log("a+b=", a + b);
console.log("a-b=", b - a);
console.log("a*b=", a * b);
console.log("a**b=", a ** b); //2^5



// pre decreement and post decreement and same goes to pre increement and post increement

console.log("--a=", --a);
console.log(a);
console.log("a--=", a--);
console.log(a);



// Assignment operators

let c = 8;
let d = 4;

c += 6; // c= c+6
console.log(c);

c -= 8; // c=c-8
console.log(c);

c *= 3 // c=c*3
console.log(c);

c /= 9 // C= C power by 9
console.log(c);

c **= 9 // C= C divide by 9
console.log(c);

c %= 9 // comodulus operators
console.log(c);


//  logcal operators
console.log("value of c and d is equal=", c < d && c == d);
console.log("value of c and d is  equal", c > d || c == d);
console.log("8 is not less than 4", !(d > c));


//conditional statement
//if-else statement
if (age >= 18) {
    console.log("you are elgible for voting");
}
else {
    console.log("you are not eligble for voting");
}

// //if statement
//  let mode="dark";
// let color;
//  if (mode=="dark"){
//     color="black";
//  }
//  if(mode== "light"){
//     color="white";
//  }

//  console.log(color);

let z = 10;
if (10 % 2 == 0) {
    console.log("It is even number");
}
else {
    console.log("it is an odd number");
}


//else-if statement 
let name = "anusha"
let gender;
if (name == "anusha") {
    gender = "female"
}
else if (name == "hira") {
    gender = "female";
}
else {
    console.log("male",);
}
console.log("anusha is female");


// else if operators
let mode = "dark";
let color;

if (mode === "dark") {
    color == "black"
} else if (mode === "blue") {
    color == "blue"
} else if (mode == "pink") {
    color = "pink"
}
else {
    color = "white"
}

//switch

//practice question get user to input a number using a promt and check if the entered number is muliple of 5 or not.

let number = prompt("Enter a number");
if (number % 5 == 0) {
    console.log("it is a multiple of 5");
}
else {
    console.log("it is not a multiple of 5");
}

//write a code to give grades to student according to the marks they have scores

let score = 75;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A"
}
else if (score >= 70 && score <= 80) {
    grade = "B"
}
else if (score >= 60 && score <= 70) {
    grade = "C"
}
else if (score > 50 && socre <= 60) {
    grade = "D"
}
else {
    grade = "E"
}

console.log(grade);


// loops in js
// 1 for loop, while loop, do  while loop
//for loop
for (let i = 1; i <= 10; i++) {
    console.log("Anusha Rijal");
}

//while loop

let j = 1;
while (j <= 5) {
    console.log("j=", j)
    j++
};

//do while loop
let i = 4;
do {
    console.log("anusha rijal")
    i++
}
while (i <= 5);


//for-of loop

let str = "Anusha Rijal";
for (let i of str) {
    console.log("i=", i);
}


let size = 0;
for (let i of str) {
    console.log("i=", i);
    size++
}
console.log("size of Anusha Rijal is", size);*/



//for-in loop

let employee = {
    id: "anusharijal",
    location: "lalitpur",
    houseNumber: 123,
}

for (let key in employee) {


    
    console.log("key=", key, "value=", employee[key])
}

let num;
for (num = 0; num <= 100; num++) {
    if (num % 2 == 0) {
        console.log("even numbers are=", num);
    }

}

