// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  function caesar(input, shift, encode = true) {
    if(!shift || shift < -25 || shift > 25) return false 

    const inputArr = input.toLowerCase().split("")
    const resultArr = []

    shift *= encode ? 1 : -1; 

    for(let i = 0; i < inputArr.length; i++){
      
      const letter = inputArr[i]
      
      if(alphabet.includes(letter)){  
        
        let indexOfAlphabet = alphabet.indexOf(letter)
        
        let indexPlusShift = indexOfAlphabet + shift
        
        if(indexPlusShift > 25){
          indexOfAlphabet -= 26
        } else if(indexPlusShift < 0) {
          indexOfAlphabet += 26
        }
        resultArr.push(alphabet[indexOfAlphabet + shift])
      } else {
        resultArr.push(letter)
      }  
    }
    return resultArr.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
