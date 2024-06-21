/*
Define a function called `validHexCode` that returns `true` if its string
parameter is a valid hex code.

A valid hex code must begin with a pound key `#` followed by 6 characters.
Each character must be a digit from 0-9 or an alphabetic character from A-F.
All alphabetic characters may be uppercase or lowercase.
*/

// Your code here 
/*
function validHexCode(str) {
  let checkStr = str.slice(1);
  let digits = "1234567890";
  let alphaChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hashValid;
  let charValid;

  for (i = 0; i < str.length; i++) {

    if (hashValid == true && charValid == true) {
      return true;
      console.log(true);
    } else if (hashValid == false || charValid == false) {
      return false;
      console.log(false);
    } else {
      if (str[0] === "#") {
        hashValid = true;
      }

      if (checkStr.includes(alphaChar)) {
        charValid = true;
      }
    }

  }

}
*/
function validHexCode(str) {
  //checks if the stirng is exactly 7 characters
  if (str.length !== 7) {
      return false;
  }
//checks if the first index is a hashtag
  if (str[0] !== "#") {
      return false;
  }
//removes the hashtag and returns the other 6 characters
  let hexChars = str.slice(1);
  let validChars = "0123456789abcdefABCDEF";

  for (let char of hexChars) {
    // if the valid characters don't have the current char character - return false
      if (!validChars.includes(char)) {
          return false;
      }
  }

  return true;
}

console.log(validHexCode("#123456"));  // true
console.log(validHexCode("!123456"));  // false
console.log(validHexCode("#123"));     // false
console.log(validHexCode("#1234567")); // false
console.log(validHexCode("1234567"));  // false
console.log(validHexCode("123456"));   // false
console.log(validHexCode("#ABCDEF"));  // true
console.log(validHexCode("#abcDEF"));  // true
console.log(validHexCode("#88ef29"));  // true
console.log(validHexCode("#222!E4"));  // false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
try {
  module.exports = validHexCode;
} catch {}
