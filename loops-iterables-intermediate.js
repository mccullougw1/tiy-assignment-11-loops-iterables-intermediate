/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */
var sumOfArray = function (arrInput) {
   var imTheSum = 0

   for (var i = 0; i < arrInput.length; i++) {
      imTheSum = arrInput[i] + imTheSum
   }
   return imTheSum
}


console.assert(sumOfArray([3, 4]) === 7);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3, 4]) === 10);
console.assert(sumOfArray([10, 9, 8, 3, 4, 5, 6]) === 45);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.
var maxOfArray = function(arrInput) {
   var imTheHighestNumber = 0;

   for (var i = 0; i < arrInput.length; i++) {
      if (typeof(arrInput[i]) === 'string') {
         return null
      } else if (arrInput[i] > imTheHighestNumber) {
         console.log("this is the highest number", imTheHighestNumber);
         imTheHighestNumber = arrInput[i]
      }
   }
    return imTheHighestNumber
}
console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert( maxOfArray([1,8,'bucklemyshoe', 7]) === null )

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
//INPUT: character
var isVowel = function(str) {
    var vowelArray = ['a','e','i','o','u']

    if (typeof str !== 'string') {
         return false
      }

    for (var i = 0; i < 5; i++) {
        var str1 = str.toLowerCase()

        if (vowelArray[i] === str1){
          return true
      }
    }
    return false
}
//OUTPUT: boolean
console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
 var reverse = function(str) {
     var strArray = str.split('')
     var reversedArray = []
     var newStr = ''

    for (var i = 0; i < str.length; i++){
        reversedArray[i] = strArray.pop()
    }
     newStr = reversedArray.join('')

     return newStr
 }

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
 */

 var fizzbuzz = function(num){
    var finalFizzBuzz = ''
    var N = 1


    for (var i = 0; i < num; i++) {
        if (N % 3 === 0 && N % 5 === 0){
           finalFizzBuzz = finalFizzBuzz + 'FizZBuzZ'
        } else if (N % 3 !== 0 && N % 5 === 0) {
            finalFizzBuzz = finalFizzBuzz + 'buzz'
        } else if (N % 3 === 0 && N % 5 !== 0) {
            finalFizzBuzz = finalFizzBuzz + 'fizz'
        } else {
            finalFizzBuzz = finalFizzBuzz + '.'
        }
     	N = N + 1
    }
    return finalFizzBuzz
 }
console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

 var findLongestWord = function(str){
     var strArray = str.split(' ')
     var longestWord = ''

     for (var i = 0; i < strArray.length; i++) {
        	var noPunc = strArray[i].match(/[^_\W]+/g).join('')
         var currentWord = noPunc.length

         if (currentWord > longestWord.length){
             longestWord = noPunc
         }
     }
     return longestWord
 }

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 * -- ADVENTURE MODE --
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */



console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
