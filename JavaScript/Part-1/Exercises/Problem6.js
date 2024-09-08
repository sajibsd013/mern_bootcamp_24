/**
 
Problem: Write a function that takes two numbers as parameters and returns their sum. Then, write another function that takes an array of numbers and returns the largest number in the array. Implement both as regular functions and arrow functions.

 */

// Solution: Sum and Largest Number in Array

// Sum Function
function sum(a, b) {
    return a + b;
  }
  console.log(`Sum: ${sum(5, 7)}`);
  
  // Largest Number Function
  function largestNumber(arr) {
    return Math.max(...arr);
  }
  console.log(`Largest Number: ${largestNumber([3, 7, 2, 9, 1])}`);
  
  // Arrow Functions
  const sumArrow = (a, b) => a + b;
  const largestNumberArrow = arr => Math.max(...arr);
  
  console.log(`Sum (Arrow): ${sumArrow(5, 7)}`);
  console.log(`Largest Number (Arrow): ${largestNumberArrow([3, 7, 2, 9, 1])}`);
  