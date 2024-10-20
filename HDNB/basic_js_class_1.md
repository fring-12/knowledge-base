# Class 1: JavaScript Basics

## Objective:
By the end of this class, students will understand JavaScript syntax, variables, data types, operators, conditionals, loops, functions, and basic DOM manipulation.

---

## 1. Introduction to JavaScript
JavaScript is a scripting language used to make web pages interactive. It runs in the browser alongside HTML and CSS.

### Example:

    <!DOCTYPE html>
    <html>
    <body>
      <h2>JavaScript Example</h2>
      <button onclick="document.getElementById('demo').innerHTML='Hello from JavaScript!'">
        Click Me
      </button>
      <p id="demo"></p>
    </body>
    </html>

### Exercise:

-   Ask students to change the text after clicking the button.

## 2. JavaScript Syntax

JavaScript statements are commands that the browser executes. JavaScript is case-sensitive, and each statement usually ends with a semicolon.

**Example:**

    let a = 10;
    let b = 20;
    console.log(a + b); // Outputs 30
    
### Exercise:
-   Ask students to write two numbers and log their sum to the console.

## 3. Comments

JavaScript supports single-line and multi-line comments to improve code readability.

    // This is a single-line comment 
    /* This is a multi-line comment */

### Exercise:

-   Ask students to add comments explaining their code.

## 4. Embedding JavaScript

JavaScript can be embedded directly into an HTML file or referenced externally via a `.js` file.

Example (Internal):

    <!DOCTYPE html>
     <html> 
     <body> 
	     <h2>Internal JavaScript</h2>
	      <script> document.write("Hello from JavaScript!"); 
	      </script> 
	  </body> 
      </html>

### Exercise:

-   Use `document.write()` to print a sentence on the webpage.


## 5. Data Types

JavaScript supports several primitive data types including strings, numbers, booleans, and more.

Example:

    let name = "Alice";   // String
    let age = 22;         // Number
    let isStudent = true; // Boolean
    
    console.log(typeof name); // "string"

### Exercise:

-   Ask students to declare a string, a number, and a boolean, then log their types using `typeof`.

## 6. Variables and Constants

JavaScript uses `let`, `const`, and `var` to declare variables. `let` and `const` are block-scoped, while `var` is function-scoped.

Example:

    let x = 5;
    const y = 10;
    x = 15; // Works fine
    y = 20; // Error: Assignment to constant variable

### Exercise:

-   Ask students to declare variables with `let` and `const` and try reassigning values to them.

## 7. Operators

JavaScript supports arithmetic, assignment, and comparison operators.

### Example:

    let num1 = 8;
    let num2 = 5;
    
    console.log(num1 + num2);   // 13
    console.log(num1 === num2); // false

 

### Exercise:

-   Create two variables and compare them using comparison operators.

----------

## 8. Conditionals

Conditional statements (`if`, `else if`, `else`, `switch`) control program flow based on different conditions.

### Example (if/else):

    let hour = 10;
    
    if (hour < 12) {
      console.log("Good morning!");
    } else {
      console.log("Good afternoon!");
    }

### Example (switch):

    let day = 3;
    switch (day) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      default:
        console.log("Unknown day");
    }

### Exercise:

-   Write an `if` condition that outputs whether a number is positive, negative, or zero.

----------

## 9. Loops

Loops repeat code blocks. Use `for` for a fixed number of iterations, and `while` when the condition is unknown.

### Example (for loop):

    for (let i = 0; i < 5; i++) {
      console.log("Iteration " + i);
    }

### Example (while loop):

    let i = 0;
    while (i < 5) {
      console.log("While Iteration " + i);
      i++;
    }

### Exercise:

-   Create a `for` loop to print numbers from 1 to 10.
-   Create a `while` loop to count down from 5 to 1.

----------

## 10. Functions

Functions encapsulate reusable blocks of code.

### Example:

    function greet(name) {
      return "Hello, " + name;
    }
    console.log(greet("Alice"));

### Exercise:

-   Write a function that takes two numbers as parameters and returns their sum.

----------

## 11. Arrays

Arrays are used to store multiple values in a single variable.

### Example:

    let fruits = ["apple", "banana", "orange"];
    console.log(fruits[0]); // "apple"
    console.log(fruits.length); // 3

### Exercise:

-   Create an array of favorite foods and log each food using a loop.

----------

## 12. Basic DOM Manipulation

The Document Object Model (DOM) allows JavaScript to interact with HTML.

### Example:

    <!DOCTYPE html>
    <html>
      <body>
        <p id="demo">Original Text</p>
        <button onclick="changeText()">Click Me</button>
    
        <script> function changeText() {
            document.getElementById("demo").innerHTML = "Text Changed!";
          } </script>
      </body>
    </html>

### Exercise:

-   Create a button that changes the text of a paragraph when clicked.

----------

## 13. String Methods

Strings have built-in methods like `length`, `toUpperCase()`, `toLowerCase()`, `slice()`, and `indexOf()`.

### Example:

    let text = "JavaScript is fun!";
    console.log(text.length);        // 18
    console.log(text.toUpperCase()); // "JAVASCRIPT IS FUN!"
    console.log(text.slice(0, 10));  // "JavaScript"

### Exercise:

-   Create a string variable and use different string methods on it.


