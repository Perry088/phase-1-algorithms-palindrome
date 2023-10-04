// write a function that wil ltell you whether or not a word is an palindrome

function isPalindrome(word) {
  // Write your algorithm here
  if (word === word.split('').reverse().join('')){
    return true
  }else{
    return false
  }

}

/* 
  Add your pseudocode here
   check if string is a palindrome

   return true or false
*/

/*
  Add written explanation of your solution here
  function takes a word, splits it up and reverses it, and then compares it to the original word to check if it is the same
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

