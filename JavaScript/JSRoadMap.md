# JavaScript Roadmap: From Beginner to Advanced

## JavaScript Fundamentals

### Basic Syntax and Operations
- **Variables and Data Types:**
  - Learn about different data types: `String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol`.
  - Declaring variables using `var`, `let`, and `const`.
  - **Practice:**
    - **Task 1:** Create a program that stores your name, age, and whether you're a student in variables. Print out a sentence using these variables, e.g., "My name is John, I am 25 years old, and I am a student."
    - **Task 2:** Declare variables for `undefined` and `null` types. Log them to the console and check their types using the `typeof` operator.

- **Operators:**
  - Arithmetic (`+`, `-`, `*`, `/`, `%`).
  - Comparison (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`).
  - Logical (`&&`, `||`, `!`).
  - Assignment (`=`, `+=`, `-=`, etc.).
  - **Practice:**
    - **Task 3:** Write a program that takes two numbers as input and performs basic arithmetic operations (addition, subtraction, multiplication, division, modulus) on them. Output the results.
    - **Task 4:** Create a program that compares two numbers and prints whether they are equal or not, whether one is greater than the other, etc.
    - **Task 5:** Write a program that takes two boolean values and applies logical operators (`&&`, `||`, `!`) to them, then prints the results.
    - **Task 6:** Create a program where you declare a variable and then use various assignment operators (`+=`, `-=`, `*=`, `/=`) to modify its value. Print the value after each operation.

### Control Structures
- **Conditional Statements:**
  - `if`, `else if`, `else`.
  - Ternary operator.
  - **Practice:**
    - **Task 7:** Write a program that takes a user's age as input and prints whether they are a child, teenager, adult, or senior based on the age value using `if...else if...else`.
    - **Task 8:** Create a program that uses the ternary operator to check if a number is positive, negative, or zero and prints the result.

- **Switch Statement:**
  - Learn how to handle multiple conditions with `switch`.
  - **Practice:**
    - **Task 9:** Write a program that takes a day of the week as input (e.g., "Monday") and outputs whether it is a weekday or weekend using the `switch` statement.

- **Loops:**
  - `for`, `while`, `do...while` loops.
  - Learn how to iterate through arrays and strings.
  - **Practice:**
    - **Task 10:** Create a program that prints the numbers from 1 to 10 using a `for` loop.
    - **Task 11:** Write a program that calculates the sum of all numbers from 1 to 100 using a `while` loop.
    - **Task 12:** Develop a program that iterates through an array of names and prints each name using a `for` loop.
    - **Task 13:** Create a program that checks if a given string is a palindrome (reads the same backward as forward) using a `do...while` loop.

- **Practice:**
  - **Task 14:** Write a simple calculator program that allows users to input two numbers and an operator (+, -, *, /, %) and outputs the result of the operation.
  - **Task 15:** Create a program that checks whether a number entered by the user is even or odd using the modulus operator.
  - **Task 16:** Build a guessing game where the program selects a random number between 1 and 100, and the user has to guess the number. The program should give hints like "Too high" or "Too low" based on the user's input.
  - **Task 17:** Develop a program that generates the multiplication table for a number entered by the user using a `for` loop.
  - **Task 18:** Create a program that simulates a basic login system where the user gets three attempts to enter the correct password. Use a `while` loop to limit the attempts.

### Functions
- **Function Basics:**
  - Learn to declare functions using the `function` keyword.
  - Understand parameters, arguments, and return values.
  - **Practice:**
    - **Task 19:** Create a function that takes two numbers as arguments and returns their sum. Test the function with different inputs.
    - **Task 20:** Write a function that calculates the factorial of a number and returns the result.

- **Function Scope:**
  - Local vs. Global scope.
  - Hoisting.
  - **Practice:**
    - **Task 21:** Create two functions: one with a local variable and one with a global variable. Experiment with accessing these variables from different scopes to see how JavaScript handles them.
    - **Task 22:** Write a function that demonstrates hoisting by using a variable before it is declared.

- **Anonymous and Arrow Functions:**
  - Learn about anonymous functions.
  - Introduction to ES6 arrow functions.
  - **Practice:**
    - **Task 23:** Write a function expression (anonymous function) that takes an array of numbers and returns a new array with each number squared.
    - **Task 24:** Convert a regular function to an arrow function and test it with the same inputs.

### Arrays and Objects
- **Arrays:**
  - Understanding arrays, how to create them, and common methods (`push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`).
  - **Practice:**
    - **Task 25:** Create an array of numbers and use the `map` method to create a new array with each number doubled.
    - **Task 26:** Write a program that filters out all even numbers from an array using the `filter` method.

- **Objects:**
  - Understanding objects, key-value pairs, and how to create and manipulate them.
  - **Practice:**
    - **Task 27:** Create an object to represent a person with properties like `name`, `age`, and `job`. Write a function that prints out the person's information.
    - **Task 28:** Add a method to the person object that returns a greeting message using the object's properties.

### Debugging Basics
- **Using `console.log()`:**
  - Learn to use `console.log()` for output and debugging.
  - **Practice:**
    - **Task 29:** Write a program with intentional errors (e.g., undefined variables) and use `console.log()` to identify and fix them.

- **Understanding Errors:**
  - Learn to read and interpret common JavaScript errors.
  - **Practice:**
    - **Task 30:** Create a function that intentionally throws an error and use a `try...catch` block to handle the error and display a custom message.

- **Browser Developer Tools:**
  - Introduction to Chrome Developer Tools.
  - Practice debugging with breakpoints and inspecting elements.
  - **Practice:**
    - **Task 31:** Open an existing project in Chrome Developer Tools and practice setting breakpoints, stepping through code, and inspecting variables.

## Intermediate JavaScript Concepts

### Advanced Functions
- **Higher-Order Functions:**
  - Learn about functions that take other functions as arguments or return functions.
  - **Practice:**
    - **Task 32:** Create a higher-order function that takes an array and a function as arguments and applies the function to each element of the array.

- **Closures:**
  - Understand closures and how they help in maintaining state in functions.
  - **Practice:**
    - **Task 33:** Write a function that returns another function that increments a counter variable. Test the closure by calling the returned function multiple times.

- **Callback Functions:**
  - Learn how to use callbacks for handling asynchronous operations.
  - **Practice:**
    - **Task 34:** Write a simple program that simulates an asynchronous operation using `setTimeout` and a callback function.

### ES6+ and Modern JavaScript
- **Let, Const, and Block Scope:**
  - Difference between `let`, `const`, and `var`.
  - **Practice:**
    - **Task 35:** Write examples that demonstrate the differences between `var`, `let`, and `const`, focusing on scope and reassignment.

- **Template Literals:**
  - Use backticks (`) for multi-line strings and embedding expressions.
  - **Practice:**
    - **Task 36:** Create a multi-line string using template literals that includes variables and expressions. Output the string to the console.

- **Destructuring:**
  - Extract values from arrays and objects easily using destructuring.
  - **Practice:**
    - **Task 37:** Write a program that destructures an object with properties like `name`, `age`, and `job` into separate variables and prints them.

- **Spread and Rest Operators:**
  - Spread operator for copying and merging arrays/objects.
  - Rest operator for handling function arguments.
  - **Practice:**
    - **Task 38:** Use the spread operator to create a copy of an array and add a new element to the copy.
    - **Task 39:** Write a function that uses the rest operator to accept multiple arguments and returns their sum.

### DOM Manipulation

- **Introduction to the DOM:**
  - Understanding the structure of an HTML document as a tree of nodes.
  - **Practice:** 
    - **Task 40:** Open a simple HTML document in the browser and use the Developer Tools to inspect the DOM structure. Try selecting different elements and exploring their properties.
  
- **Selecting Elements:**
  - Use methods like `getElementById`, `querySelector`, and `querySelectorAll` to select elements.
  - **Practice:** 
    - **Task 41:** Create a small HTML page with various elements. Write JavaScript to select and log different elements by ID, class, and tag name.

- **Modifying Elements:**
  - Learn to change the content and style of elements using JavaScript.
  - **Practice:** 
    - **Task 42:** Create a simple webpage and use JavaScript to dynamically change the text, HTML content, and CSS styles of different elements. For example, create a button that changes the background color of a `div` when clicked.

- **Event Handling:**
  - Add event listeners to elements to make them interactive.
  - **Practice:** 
    - **Task 43:** Build a basic to-do list app where items can be added, marked as completed, and removed. Use event listeners to handle clicks and other user interactions.

### Web APIs

- **Introduction to APIs:**
  - What are Web APIs, and how do they interact with JavaScript?
  - **Practice:** 
    - **Task 44:** Research and list a few popular Web APIs. Explore their documentation and understand how they can be used with JavaScript.

- **Fetch API:**
  - Learn how to make HTTP requests to APIs using the Fetch API.
  - **Practice:** 
    - **Task 45:** Write a script that fetches data from a public API (e.g., JSONPlaceholder) and logs the results to the console. Try fetching different types of data like posts, comments, or users.

- **Working with JSON:**
  - Parse and manipulate JSON data in JavaScript.
  - **Practice:** 
    - **Task 46:** Fetch JSON data from an API, parse it, and display the results on a webpage. For example, create a simple web page that displays a list of posts from a blog API.

- **Practice:**
  - **Task 47:** Build a small app that fetches and displays data from a public API, like a weather app or a movie database search. Use the Fetch API to retrieve the data, parse the JSON, and dynamically update the DOM to show the results.