/*
Define a function logBetweenStepper that takes in 3 numbers as parameters. The
function should print out numbers between a minimum number and a maximum number
at defined intervals. The first parameter should represent the minimum number.
The second parameter should represent the maximum number. The third parameter
should represent the interval.

HINT: This function only needs to print using console.log it does not need to
return anything.
*/

// Your code here 
/*SUMMARY: define a function that takes 3 numbers. It should print out numbers between the minNum and maxNum in intervals of the third Num. intrvlNum
1. declare a function called "logBetweenStepper"
2. it needs to take 3 parameters, minNum, maxNum, and intrvlNum
3. it needs to print out the number range from minNum to maxNum in intervals of the intervlNum 
*/

function logBetweenStepper(minNum, maxNum, intrvlNum) {
    let index = minNum - 1;

    while (index <= maxNum - 1) {
        console.log(index + intrvlNum);
        index += intrvlNum;
    }
}

logBetweenStepper(5, 9, 1);
/* prints out:
5
6
7
8
9
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetweenStepper;
