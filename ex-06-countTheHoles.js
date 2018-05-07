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
  var numberToString = someInteger.toString()

  for (var i = 0; i < numberToString.length; i++) {
    if( numberToString[i] === "0" || numberToString[i] === "4" || numberToString[i] === "6" || numberToString[i] === "9" ){
      totalHoles = totalHoles + 1
    }

    if ( numberToString[i] === "8" ) {
      totalHoles = totalHoles + 2
    }
  }

  console.log(totalHoles)
  return totalHoles
}




//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.assert(  countTheHoles(301923) === 2  )
console.assert(  countTheHoles(880216) === 6  )
console.assert(  countTheHoles(40442) === 4 )
console.assert(  countTheHoles(808) === 5  )
