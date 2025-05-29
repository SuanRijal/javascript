
/* special string
 let obj={
    item:"pen",
    price:10,
 }
 let output=`the cost of a ${obj.item} is ${obj.price} rupees`; //the cost of a pen is 10 rupees(output)
 console.log(output);

 //question of guessing a game number
//  let gameNum=25;
// let userNum= prompt("guess the game number");
// while( userNum!=gameNum){
//  userNum= prompt("you enter a wrong number. Guess again");

// }
// if(userNum==gameNum){
//     console.log("congratulation you entered a correct game number");
//  }


 // string in js
// str.toUpperCase(), str.toLowerCase(), str.trim()

let str="anusha Rijal";
let newStr= str.toUpperCase();
console.log(newStr);

//toLowerCase
let girl="ANusha Rijal";
let newGirl= girl.toLowerCase();
console.log(newGirl);

//string method in js
// str.slice(start,end?)
//str.concat(str2) joins string 2 with string 1
// str.replace (search val, new val)
// str.charAT(idx)

//str.slice(start,end?)
let string="hello";
console.log(string.slice(0,4));

let str1="Sujan"; //str.concat(str2) joins string 2 with string 1
let str2="Thapa";
console.log(str1.concat(str2));

let str3="Anusha" // str.replace (search val, new val)
console.log(str3.replace("A","S"));

// let marks=[88,94,53,77,90];
// console.log(marks.length); // length is a property of array
// marks[2]=94;
// console.log(marks);


//looping in arrays
let heroes=["abc","def","ghi","jkl","mno"]
for(i=0;i<heroes.length;i++){
   console.log(heroes[i])
}

// let marks=[85,97,4437,76,60]
// let sum=0;
// for(i=85;i<=marks.length;i++){
//    sum=sum+marks;
// }
// console.log(sum);

// let prices = [250, 645, 300, 900, 50];
// let discountedPrices = prices.map(price => price * 0.9);

// console.log(discountedPrices);*/

 



let prices = [250, 645, 300, 900, 50];
let offer = 10 / 100;
let offerPrices = [];

for (let val of prices) {
   let offerPrice = val * (1 - offer); // Calculate the discounted price for each item
   offerPrices.push(offerPrice); // Add the discounted price to the new array
}

console.log("Final prices are =", offerPrices);


//arrays methods
companies=["bloolberg","microsoft","uber", "google","IBM","Nrtflix"];
console.log(companies);
//shift method to delete item from start
companies.shift();
console.log(companies);

//use of splice  array method to change the original array
companies.splice(2,1,"ola");
console.log(companies);

//use of push method to add items at the end of array
companies.push("Amazon");
console.log(companies);

// functions
function addNumber(x,y){
   console.log("enter any two munbers")
   let sum= x+y;
   console.log(`sum is ${sum}`);
}
addNumber(4,6);













