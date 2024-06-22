/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as
arguments. The functions should return the smallest number that is divisible by
both num1 and num2.
*/

// Your code here 

function gcd(num1, num2) { 
    for (let temp = num2; num2 !== 0;) { 
        num2 = num1 % num2; 
        num1 = temp; 
        temp = num2; 
    } 
    return num1; 
} 
  
function leastCommonMultiple(num1, num2) { 
    let gcdValue = gcd(num1, num2); 
    return (num1 * num2) / gcdValue; 
} 
  

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = leastCommonMultiple;
