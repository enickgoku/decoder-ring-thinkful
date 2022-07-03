// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusSquare = [
    ['a', 'f', 'l', 'q', 'v'],
    ['b', 'g', 'm', 'r', 'w'],
    ['c', 'h', 'n', 's', 'x'],
    ['d', 'i/j', 'o', 't', 'y'], 
    ['e', 'k', 'p', 'u', 'z']
  ]

  const encoder = (input, polybiusSquare) => {
    let resultArr = []

    for(let char of input.toLowerCase()){
      if(char === 'i' || char === 'j'){
        resultArr.push(4, 2)
      } else if (!char.match(/[a-z]/)){
        resultArr.push(char)
      } else {
        for(let positionY in polybiusSquare){
          for(let positionX in polybiusSquare[positionY]){
            if(char === polybiusSquare[positionY][positionX]){
              resultArr.push(+positionY + 1, +positionX + 1)
            }
          }
        }
      } 
    }
    return resultArr.join('')
  }

  const decoder = (input, polybiusSquare) => {
    let resultArrDecoder = []

    if(input.replace(" ", "").length % 2 !== 0) return false

    const inputArray = input.split("")

    while (inputArray.length > 0){
      const positionY = inputArray.shift()

      if(positionY === ' '){
        resultArrDecoder.push(' ')
        continue
      }

      const positionX = inputArray.shift()

      resultArrDecoder.push(polybiusSquare[+positionY - 1][+positionX - 1])
    }
    return resultArrDecoder.join("")
  }


  function polybius(input, encode = true) {
    if(encode){
      return encoder(input, polybiusSquare)
    } else {
      return decoder(input, polybiusSquare)
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };