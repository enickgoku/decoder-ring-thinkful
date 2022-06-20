// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const engAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")


  function substitution(input, alphabet, encode = true) {

    const subCipher = []

    const checkForRepeats = Array.from(new Set(alphabet))

    if(!alphabet || alphabet.length < 26 || [...checkForRepeats].length < 26) return false

    const subAlphabet = alphabet.split("")

    if(encode){
      for(let letter of input.toLowerCase()){
        if(letter === " "){
          subCipher.push(" ")
          continue
        }
        const match = engAlphabet.indexOf(letter)
        subCipher.push(subAlphabet[match]) 
      }
      return subCipher.join("")
    } else {
      for(let letter of input.toLowerCase()){
        if(letter === " "){
          subCipher.push(" ")
          continue
        }
        const match = subAlphabet.indexOf(letter)
        subCipher.push(engAlphabet[match]) 
      }
      return subCipher.join("")
    }
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
