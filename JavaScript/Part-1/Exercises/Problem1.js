/**
 Problem: Write a program that takes a number as input and checks if the number is positive, negative, or zero using if-else statements. Additionally, use a switch statement to print the grade ("A", "B", "C", etc.) based on a numerical score input (90-100: "A", 80-89: "B", etc.)
  */ 

 // Solution: Number Check and Grade System

// Number Check
let number = 5;

if (number > 0) {
  console.log('The number is positive.');
} else if (number < 0) {
  console.log('The number is negative.');
} else {
  console.log('The number is zero.');
}

// Grade System
let score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = 'A';
    break;
  case score >= 80:
    grade = 'B';
    break;
  case score >= 70:
    grade = 'C';
    break;
  case score >= 60:
    grade = 'D';
    break;
  default:
    grade = 'F';
}

console.log(`Grade: ${grade}`);
