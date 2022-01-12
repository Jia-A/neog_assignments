// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);

const aloo=1;
if(aloo===1){
    const a=2;
    console.log(a);
}
console.log(aloo);
console.log("------------------------")

// var multiply = function(x, y) {
//     return x * y;
//   };

const multiply = (x,y) => x*y

console.log(multiply(2,3))
console.log("------------------------")

// var customer = {
//     name: "Bhaalo"
//   };
//   var card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
//   };
//   var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"

let customer = {
    name: "Bhaalo"
}
let card ={
    amount :20,
    product : "Aaalo",
    unitprice : 50
}
let message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`
console.log(message)
console.log("------------------------")

// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];

const [CEO,,Mentor] = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];

let message1 = `CEO of neoG is ${CEO} and mentor is ${Mentor}.`
console.log(message1)
console.log("------------------------")

// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0],
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

const [firstname, lastname] = ["MA", "TA", "PA", "CA"];

console.log(firstname+ " " + lastname)
console.log("------------------------")

// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//   Aaloo: Aaloo,
//   Bhaloo: Bhaloo
// };

const Aaloo = "Tasty";
const Bhaloo = "Cute";
const Obj = {
   Aaloo,
  Bhaloo
};
console.log(Obj);
console.log("------------------------")

// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

let a = 5;
let b = 10;
let result = `Fifteen is ${a+b} and not ${(2*a)+b}.`
console.log(result)
console.log("------------------------")

// var arithmeticsObj = {
//     sum: function sum(num1, num2) {
//       return num1 + num2;
//     },
//     multiply: function multiply(num1, num2) {
//       return num1 * num2;
//     }
//   };

let arithmeticsObj = {
     sum : (num1, num2) =>
         num1 + num2
    ,
    mult : (num1, num2) =>
         num1 * num2
    
}
console.log(arithmeticsObj.sum(2,2))
console.log(arithmeticsObj.mult(2,3))
console.log("------------------------")

// var avengers = {
//     operation: "Assemble",
//     members: [
//       {
//         ironMan: "Tony Stark"
//       },
//       {
//         captainAmerica: "Steve Rogers"
//       },
//       {
//         blackWidow: "Natasha Romanoff"
//       }
//     ]
//   };
//   var operation = avengers.operation,
//     members = avengers.members;

let {operation, members} = {
         operation: "Assemble",
         members: [
           {
            ironMan: "Tony Stark"
          },
          {
            captainAmerica: "Steve Rogers"
          },
          {
            blackWidow: "Natasha Romanoff"
          }
        ]
      };
console.log(operation)
console.log(members)
console.log("------------------------")

// const packIt = (...args) => console.log(args)

// packIt(1,2,3,5,5)

const packIt = function(...args){
    console.log(args);
}
packIt(1,2,3,4,5)
console.log("------------------------")


const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)
// output = Namaste Welcome
console.log("------------------------")

// const obj = {
//     aloo : 1,
//     bhallo : 2
// }

// const {c : aloo = [2,3,4].push(5)} = obj 

// console.log(aloo)

// let findMin = (...args)=>
//   Math.min(...args);

// let result1 = findMin(7,2,1,4,5)
// console.log(result1)