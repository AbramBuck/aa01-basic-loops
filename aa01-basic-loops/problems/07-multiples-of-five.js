/*
Define a function multiplesOfFive that takes in a number parameter. It should
return a count of all numbers greater than or equal to 0 and less than the
number parameter that are multiples of 5.
*/

// Your code here 
/* SUMMARY:
1. Declare a function named "multiplesOfFive"
2. it needs to take a number parameter
3. create a loop with the below requierments
4. it needs to return each number in the range between 0 and the number parameter by multiples of 5  
 */

function multiplesOfFive(num) {
    let index = 0;

    while (index * 5 < num) {
        console.log(index * 5);
        index ++;
    }
    
}



console.log(multiplesOfFive(20)); // => 4    // 0, 5, 10, 15
console.log("---------------NEXT ENTRY---------------------");
console.log(multiplesOfFive(10)); // => 2    // 0, 5
console.log("---------------NEXT ENTRY---------------------");
console.log(multiplesOfFive(14)); // => 3    // 0, 5, 10
console.log("---------------NEXT ENTRY---------------------");
console.log(multiplesOfFive(21)); // => 5    // 0, 5, 10, 15, 20

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = multiplesOfFive;
