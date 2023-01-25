/*************************************************
 *     Exercises XP Ninja
 * ------------------------------------
 * @author MELISSA KOUADIO <angemelisk@gmail.com>
 * @link <https://github.com/DiamondArt>
 * 
 * ***********************************************/

/**********************************************************
 * Exercise 1: Random Number
 * @description: Get a random number between 1 and 100.
 ************************************************************/
const nbre = Math.floor(Math.random()*101);
console.log(nbre);

/*******************************************************************
 * Exercise 2: Capitalized Letters
 * @function alternativeCase
 * @param string
 * @description: 
 * Create a function that takes a string as an argument.
 * Have the function return:
 * The string but all letters in even indexes should be capitalized.
 * The string but all letters in odd indexes should be capitalized.
 * @returns array
 **********************************************************************/
function alternativeCase(string){
    var outputPair = "";
    var outputImPair = "";

    for(var i = 0; i < string.length; i++){
        if (i % 2 != 0) {
            outputPair += string[i].toUpperCase();
        }
        else {
            outputPair += string[i].toLowerCase();
         } 
         
         if (i % 3 != 0) {
            outputImPair += string[i].toUpperCase();
        }
        else {
            outputImPair += string[i].toLowerCase();
         }  
    }
    return [outputPair,outputImPair];
}
console.log(alternativeCase("abcdef"))

/*******************************************************************
 * Exercise 3 : Is Palindrome
 * @function isPalindrome
 * @param string
 * @description: Write a JavaScript function that checks whether a string is a palindrome or not.
 **********************************************************************/

function isPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const string = prompt('Enter a string: ').trim();
isPalindrome(string);

/*******************************************************************
 * Exercise 4 : Biggest Number
 * @function biggestNumberInArray
 * @param array <number>
 * @description: 
 * Write a JS function that takes an array as a parameter and returns 
 * the biggest number.
 **********************************************************************/
function biggestNumberInArray(arrNumbers){
    if(arrNumbers.length > 0) {

        let biggestNumber = 0;
        for(let i of arrNumbers) {
            if(i > biggestNumber) {
                biggestNumber = i;
            }
        }
        return biggestNumber;
    }
    return 0;
}
console.log(biggestNumberInArray(['a', 3, 4, 2]));

/*******************************************************************
 * Exercise 5: Unique Elements
 * @function uniqueElement
 * @param array
 * @description: 
 * Write a JS function that takes an array and returns
 * a new array with only unique elements.
 **********************************************************************/
function uniqueElement(list){
    let uniqueElm = list.filter((x, i) => list.indexOf(x) === i);
    return uniqueElm;
}
console.log(uniqueElement([3,5,7,9,1,1]));