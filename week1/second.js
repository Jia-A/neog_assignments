// Easy questions
// Given a and b, your function should return the value of ab

const power = (a,b) =>
     Math.pow(a,b)

console.log(power(3,3));

// Given length of a regular hexagon, your function should return area of the hexagon.
// formula for area of hexagon => Area = ((3*root of 3) /2)*length of the side square = ((3*1.732)/2)*l = 2.598*l*l

const areaOfHexagon = l => 2.598*l*l;
console.log(areaOfHexagon(10));

// Given a sentence, your functions should return the number of words in the sentence.

const noOfWords = (input) =>{
    let leng = input.split(" ").length
    return leng;
}
console.log(noOfWords("We are neoGrammers of 2022"))

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.


const min = (...args) =>{
    let mini=args[0];
    for(let i=0;i<args.length;i++){
        if(args[i]<mini){
            mini=args[i];
        }
    }
    return mini;
}
console.log(min(8,7,3,1,5))

// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

const max = (...args) =>{
    let maxx=args[0];
    for(let i=0;i<args.length;i++){
        if(args[i]>maxx){
            maxx=args[i];
        }
    }
    return maxx;
}
console.log(max(7,3,8,1,5))

// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.

const checkTriangle = (a,b,c) =>{
    a=Number(a);
    b=Number(b);
    c=Number(c);
    if(a+b+c===180){
    if(a===b===c){
        return "Equilateral Triangle"
    }
    else if(a===b||b===c||a===c){
        return "Isosceles Triangle"
    }
    else if(a!==b&&a!==c&&b!==c){
        return "Scalene Triangle"
    }}
    else{
        return "Not a triangle"
    }
}
console.log(checkTriangle(30,60,90));
console.log("------------------")

//Medium questions
// Given an array, your function should return the length of the array.
const lengthofArray = ([...args]) => args.length
console.log(lengthofArray([1,2,3,4,5,8,6]))

// Given an array and an item, your function should return the index at which the item is present.
const indexSearch = ([...args], a)=>{
    for(let i=0;i<args.length;i++){
        if(args[i]===a){
            return i;
        }
    }
    return "Number not found"
}
console.log(indexSearch([5,3,7,9,2], 7))

// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.

// const replaceNumber = ([...rest], a, b)=>{
//     rest.map((item)=>{
//         return item === a?b:item
//     })
// }
// console.log(replaceNumber([5,2,6,5,8,5],5,4))

// Given two arrays, your function should return single merged array.
const mergeArray = ([...args1], [...args2]) =>{
    return args1.concat(args2)
}
console.log(mergeArray([1,2,3,4], [5,6,7,8]))

// Given a string and an index, your function should return the character present at that index in the string.
const charSearch = (str, ind)=>{
    ind=Number(ind)
    // let s=str.split(",")
    //console.log(s)
    return str[ind];
   
}
console.log(charSearch("Jiya Agrawal", 6))

// Given an array find its length without using length property and use only for loops
const arrayLength = ([...args])=>{
    let counter = 0;
    for(let i=0;i<args[i]!==undefined;i++){
        counter++
    }
    return counter;
}
console.log(arrayLength([1,2,3,4,5,6]))
