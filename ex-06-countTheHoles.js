/**
 * countTheHoles()
 *
 * Write a `countTheHoles` function that takes an intenteger and counts the
 * number of holes for each number.
 *
 * For example: the number 8042 would have 4 holes:
 *  - 2 holes in the 8
 *  - 1 hole in the 0, 4, 6, 9
 *
 *
**/

function countTheHoles(someInteger){
  var totalHoles = 0
  var oneHole = 1
  var twoHoles = 2
  var numberToDigits = []
  sSomeInteger = someInteger.string()

  console.log(sSomeInteger)

  // for (var i = 0; i < sSomeInteger.length; i++) {
  //   numberToDigits.push(SomeInteger[i])
  //   console.log(numberToDigits)
  // }
  return totalHoles
}


var countTheHoles = function(){}


//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.assert(  countTheHoles(301923) === 2  )
console.assert(  countTheHoles(880216) === 6  )
console.assert(  countTheHoles(40442) === 4 )
console.assert(  countTheHoles(808) === 5  )
