/*
Write a function hasDoubleLetter(str) that accepts a string. The function should
return a boolean indicating whether the string contains two of the same
character consecutively. If the value passed into the function is not a string,
return null.
*/

// Your code here 
/*SUMMARY:
1. return null if the value is not a string
2. boolean for if string has two of the same characters consecutively
3. return true if it has 2 consecutive words return false if it does not
*/
/* Failed attempt
function hasDoubleLetter (str) {
    
    let frontHalf = str.slice(0, str.length / 2);
    let backHalf = str.slice(str.length / 2, str.length -1);
    let boolCheck = frontHalf.includes(backHalf) || backHalf.includes(frontHalf);

    if (typeof str !== "string") {
        return null;
    } else if (boolCheck == true) {
        return true;
    } else {
        return false;
    }
}
*/

function hasDoubleLetter(str) {
    if (typeof str !== "string") {
        return null;
    }
    
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            return true;
        }
    }
    
    return false;
}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasDoubleLetter;
