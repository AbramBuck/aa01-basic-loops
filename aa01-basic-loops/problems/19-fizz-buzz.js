/*
Define a function fizzBuzz(max) that takes a number and prints every number from
0 to max (not inclusive) that is divisible by either 3 or 5, but not both.


1. need to print out every number from 0 to max(not inclusive)
2. numbers need to be divisible by 3 or 5 but not both
3. take in number
4. check if number is divisible by either 3 or 5
5. print it out if it is

*/
/*
function fizzBuzz(num) {
    let divThree = num * 3;
    let divFive = num * 5;

    if (Number.isInteger(timeThree)){
        console.log(num);
    }
}
*/
// Your code here 

function fizzBuzz(num) {

    for (i = 0; i < num; i++ )
        if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
            console.log(i);  
        }
}

fizzBuzz(20); // prints out:
/*
3
5
6
9
10
12
18
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fizzBuzz;
