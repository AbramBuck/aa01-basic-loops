/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

/* SUMMARY: write a functin that takes in a string. The function should return the first half of characters in the string.
1. Make an empty string variable to append the results to
2. take the stirng and find out what the first half of the substring indicies are
3. append the substring indicies to the empty string. Return the empty string 
*/

function firstHalf(str) {
  newStr = "";
  findHalf = (Math.ceil((str.length) / 2));
  halfStr = str.substring(0,findHalf);
  return halfStr;
}


console.log (firstHalf("Sandwich")); // "Sand"
console.log(firstHalf('academy')); // 'acad'
console.log(firstHalf('planet'));  // 'pla'
console.log(firstHalf('sport'));   // 'spo'
















/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
