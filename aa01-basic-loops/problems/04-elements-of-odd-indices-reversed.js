/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

function elementsOfOddIndicesReversed(str) {
   
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i-- ) {
    if ( i % 2 !== 0 ) {
      newStr += str[i];
    }
  }
    return newStr;
} 

console.log(elementsOfOddIndicesReversed("JollieBee")); //eilo
console.log(elementsOfOddIndicesReversed("Hamburger Helper")); //rpe erba
console.log(elementsOfOddIndicesReversed("SoundWire")); //eidno
console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'

//test code with below
//node problems/04-elements-of-odd-indices-reversed.js
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
