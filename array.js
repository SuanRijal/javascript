let price=[250,645,300,900,50]

for(i=0; i<price.length;i++){
    let offerPrice=price[i]/10
     price[i]= price[i]-offerPrice
}
console.log(price);

//arrays type push(),pop(), tostring(),concat(),unshift() and shift(),slice(stardidx,endidx),splice(stardidx,delcount,newelmts)

let fooditems=["tomato","potato","onion","chilli"]
console.log(fooditems);
console.log(fooditems.toString());

let femaleName=["anusha","hira","smriti","ritu"]
let maleHero=["ram","shyam","sujan","ayush"]

 let newHero=femaleName.concat(maleHero)
 console.log(newHero);

 femaleName.unshift("anu")//unshift add item to first index of array
  console.log(femaleName);

   let val= maleHero.shift() // value of first index deleted from array
   console.log(`deleted item is ${val} `) 
  

   let companies=["bloomberg","microsoft","uber","google","ibm","netflix"]

   // remove first company from array
   let removed= companies.splice(0,1)
   console.log(`removed=${removed}`)
   console.log(companies)

   //replace uber and add ola to it
   let replace= companies.splice(1,1,"ola")
   console.log(`replace=${replace}`)
   console.log(companies)

   let added= companies.push("amazon");
   console.log(companies);