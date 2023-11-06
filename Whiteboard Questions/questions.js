"use strict"

//TODO:Reverse a String example hello
function reverseString(str) {
    let strArray = str.split('');
    let reversedArray = strArray.reverse();
    let reversedString = reversedArray.join('');
    return reversedString;
}
console.log(reverseString("hello"));

//TODO: Write a program that prints the numbers from 1-100. For multiples of three print Fizz, for multiples of 5 print Buzz for multiples pf 3 and 5 print FizzBuzz.

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         // console.log(i);
//     }
// }

// //TODO: Write the FizzBuzz as a switch statement
// for (let j = 1; j <= 60; j++) {
//     switch (true) {
//         case j % 3 === 0 && j % 5 === 0:
//             console.log("FizzBuzz");
//             break;
//         case j % 3 === 0:
//             console.log("Fizz");
//             break;
//         case j % 5 === 0:
//             console.log("Buzz");
//             break;
//         default:
//             // console.log(j);
//     }
// }

//TODO: Palindrome Check: Write a function to determine if a given string is a palindrome -- Example radar

function isPalindrome(str) {
    // str = str.toLowerCase();
    let reversed = str.toLowerCase().split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("radar"));

//Make a string case-insensitive split into an array, reverse the array and then join back into a string will print true or false based off the word

//TODO:Find the missing number: Given an array containing numbers from 1 to N with one number missing find the missing number