function isPalindrome(word) {
  // Write your algorithm here
  let plainWord = word.replace(/\W+|_/g, "").toLowerCase();
  let reversedWord = plainWord.split("").reverse().join("");
  
  if (plainWord==reversedWord){
    return true
  }
  else{ 
    return false; 
  }
}


//now we have the reversed string stored in the variable rword
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
