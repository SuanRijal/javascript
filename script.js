// let marks=[97,72,78,80,67];
// // console.log(marks);
// // console.log(marks.length)

// // for(let i=0; i<marks.length;i++){
// //     console.log(marks[i])
// // };

// for(let mark of marks){  //print element of arrays using for of loop
//     console.log(mark)
// }

let cities=["kathmandu","butwal","dhading","pokhara"]
for(let city of cities){
    console.log(city)
};
 //for a given array with marks of students->85,97,44,37,76,60. find the average marks of an students

let marks=[85,97,44,37,76,60];
let sum=0;
for(let mark of marks){
sum=sum+mark
}

let avg=sum/marks.length
console.log(`average marks of student is ${avg}`);

let price=[250,645,300,900,50]

for(i=0; i<price.length;i++){
    let offerPrice=price[i]/10
     price[i]= price[i]-offerPrice
}
console.log(price);