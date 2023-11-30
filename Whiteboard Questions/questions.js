"use strict"

//TODO:Reverse a String example hello
// function reverseString(str) {
//     let strArray = str.split('');
//     // let reversedArray = strArray.reverse();
//     // let reversedString = reversedArray.join('');
//     // return reversedString;
//     return strArray;
// }
// console.log(reverseString("hello"));

function reverseString (str) {
    let strArray = str.split(" ")
    let reversedArray = strArray.reverse()
    let reversedString = reversedArray.join(" ")
    return reversedString;
}
reverseString("hello")
console.log(reverseString("hello"));
console.log(reversedArray("hello"));

//TODO: Write a program that prints the numbers from 1-100. For multiples of three print Fizz, for multiples of 5 print Buzz for multiples of 3 and 5 print FizzBuzz.

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// //TODO: Write the FizzBuzz as a switch statement
// for (let j = 1; j <= 15; j++) {
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
//             console.log(j);
//     }
// }

//TODO: Palindrome Check: Write a function to determine if a given string is a palindrome -- Example radar

function isPalindrome(str) {
    // str = str.toLowerCase();
    let reversed = str.toLowerCase().split('').reverse().join('');
    return str === reversed;
}

// console.log(isPalindrome("radar"));

//Make a string case-insensitive split into an array, reverse the array and then join back into a string will print true or false based off the word

//TODO:Find the missing number: Given an array containing numbers from 1 to N with one number missing find the missing number


// The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator
function findMissingNumber(arr, N) {
    // Calculate the expected sum of numbers from one to N
    let expectedSum = (N * (N + 1)) / 2;
    // Calculate the actual sum of numbers in the array
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    // Find the missing number
    let missingNumber = expectedSum - actualSum;

    return missingNumber;
}

const inputArray = [1, 2, 3, 5, 6, 7, 8, 9, 10];
const N = 10; // Assuming the array contains numbers from 1 to N
const missingNumber = findMissingNumber(inputArray, N);
// console.log("The missing number is:", missingNumber); //  4

//TODO:•	Remove Duplicates from Array: write a function that removes duplicate elements from an array preserving the original order of elements: working with array loops and data structures
const originalArray = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
    const seen = {}; // Create an object to track seen elements
    const result = []; // Create an array to store unique elements in order

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (!seen[element]) {
            // If the element has not been seen before
            seen[element] = true; // Mark it as seen
            result.push(element); // Add it to the result array
        }
    }

    return result;
}
// console.log(removeDuplicates(originalArray));

//call back functions
console.log(`CallBack Function Example`);
console.log(`--------------`);

// function greet(name) {
//     console.log(`Hi ${name}`);
// }
// greet("Jay");
//
//
// function callMe() {
//     console.log(`Im a callback function`);
// }
// callMe();
//
// greet("Ben", callMe());

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    // console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

// Looping Array with For and forEach
// using array literal method
const cars = ["Saab", "Volvo", "BMW", "Chevy", "Mercedes"];
// console.log(cars[0]);
// console.log(cars[3]);
let car = cars[2];

cars[0] = "Dodge";
// console.log(cars);

cars.push("sunny")
// console.log(cars);

// objects and arrays
const person = {firstName:"John", lastName:"Doe", age:46, DOB: " Feb 7"};
// console.log(person.firstName);
// console.log(cars.length);
// console.log(cars.sort());


const fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);

}

console.log(`for of`);
for (let car of cars) {
    // console.log(car);
}

