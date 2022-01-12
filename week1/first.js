//Easy
// 1.Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const sum = (...args) =>{
    let addition=0;
    for(let i=0;i<args.length;i++){
        addition=addition+args[i];
    }
    return addition;
}

console.log(sum(3,1,6,9,8));

// 2.Write a program to take a number input from user and determine whether the number is odd or even.

const evenOdd = num => 
num%2===0 ? "Even" : "Odd"

console.log(evenOdd(98))
 
// 3.Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const maxMin = (a,b) => {
    return a>b ? `${a} is greater and ${b} is smaller between ${a} and ${b}` : `${b} is greater and ${a} is smaller between ${a} and ${b}`
}

console.log(maxMin(129, 251))

// 4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const max = (a,b,c) => {
   if(a>b&&a>c){
       return a
   }
   else if(b>a&&b>c){
       return b;
   }
   else{
       return c;
   }
}

console.log(max(8,23,17))

// 5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const min = (a,b,c) => {
    if(a<b&&a<c){
        return a
    }
    else if(b<a&&b<c){
        return b;
    }
    else{
        return c;
    }
 }
 
 console.log(min(35,29,46))


// 6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.
const monthDays = month =>{
    if(month==="january"||month==="march"||month==="may"||month==="july"||month==="august"||month==="october"||month==="december"){
        return `Yes, ${month} has 31 days`;
    }
    else{
        return `No, ${month} doesn't have 31 days.`
    }
}
console.log(monthDays("april"))

//Intermediate
// 1. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

const fizzBuzz = () =>{
    
    for(let i=1;i<17;i++){
        if(i%3===0 && i%5===0){
            i="fizzbuzz"
            console.log(i)
            
        }
        if( i%3===0){
            i="fizz"
           console.log(i)
           
        }
        if( i%5===0){
            i="buzz"
            console.log(i)
            
        }
       
        console.log(i)
        
    }
}
fizzBuzz();
