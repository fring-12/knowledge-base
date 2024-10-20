# Class 1: JavaScript Basics

## Objective:
By the end of this class, students will understand JavaScript syntax, variables, data types, operators, conditionals, loops, functions, and basic DOM manipulation.

---

## Introduction: Opportunities in JavaScript

Before diving into the technical aspects, let's talk about why learning JavaScript is so important and the career opportunities it offers.

### Why JavaScript?

- **Universal Language**: JavaScript is the only programming language that can run in every web browser, making it essential for web development.
  
- **Versatile**: JavaScript is not limited to front-end development. It can be used for server-side development (Node.js), mobile apps (React Native), desktop applications (Electron), and even game development.

- **In-Demand Skill**: JavaScript is one of the most popular programming languages and is consistently ranked high in developer surveys. It’s used by startups and tech giants alike (Google, Facebook, Netflix).

- **Huge Ecosystem**: The JavaScript ecosystem is vast, with countless libraries and frameworks like React, Vue, Angular, and Express, allowing you to build anything from single-page apps to full-stack web applications.

- **Job Roles**: 
  - **Front-End Developer**: Building user interfaces with HTML, CSS, and JavaScript.
  - **Full-Stack Developer**: Developing both the front-end and back-end using technologies like Node.js.
  - **Mobile Developer**: Creating mobile apps using JavaScript frameworks like React Native.
  - **DevOps and Automation**: JavaScript is often used for task automation and build tools in DevOps pipelines.

### Example Companies Hiring JavaScript Developers:
- **Facebook**: Uses React for its front-end.
- **Netflix**: Uses JavaScript and Node.js for server-side rendering.
- **Google**: Uses Angular and many other JavaScript technologies in their web applications.

### Future of JavaScript:
JavaScript is continuously evolving, with regular updates (ES6, ESNext), and new features are constantly added. As more industries move towards digital, JavaScript's demand will only grow, making it a future-proof skill.

---

## History of JavaScript

JavaScript was developed by **Brendan Eich** in **1995** while he was working at **Netscape Communications Corporation**. Initially, it was called **Mocha**, then **LiveScript**, and finally, it was named **JavaScript**.

### Key Milestones:
- **1995**: JavaScript was created in just **10 days** to make web pages more interactive.
- **1996**: JavaScript was standardized by **ECMA International** and became known as **ECMAScript**.
- **1997**: The first edition of the ECMAScript specification was released.
- **2009**: The release of **Node.js** allowed JavaScript to be used for server-side programming, making it a full-stack language.
- **2015 (ES6/ECMAScript 2015)**: Introduced major updates like `let`, `const`, arrow functions, and classes, bringing modern features to the language.
- **Present Day**: JavaScript continues to evolve, with new features being added regularly, making it one of the most flexible and widely-used programming languages.

### Fun Fact:
Despite its name, JavaScript is **not related** to Java. The name "JavaScript" was part of a marketing strategy to ride on the popularity of Java at the time.

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
JavaScript supports several primitive data types and object types. Understanding these types is crucial as they define the kind of data you can store and manipulate in your programs.

### Primitive Data Types:

1. **String**: A sequence of characters used for text.
2. **Number**: Numeric values (integers or floats).
3. **Boolean**: Logical values representing `true` or `false`.
4. **Null**: Represents an intentional absence of any object value.
5. **Undefined**: A variable that has been declared but has not yet been assigned a value.
6. **BigInt**: Represents whole numbers larger than `Number.MAX_SAFE_INTEGER`.
7. **Symbol**: A unique and immutable primitive value often used as object property keys.

### Object Types:
- **Object**: A collection of properties, where each property consists of a key-value pair.
- **Array**: A special type of object used to store ordered collections of values.
- **Function**: A block of code designed to perform a particular task, also considered an object.

### Examples:


    // String
    let name = "Alice";               // A string literal
    let greeting = 'Hello, world!';    // Single quotes are also valid
    console.log(typeof name);          // "string"
    
    // Number
    let age = 25;                      // An integer
    let temperature = -5.3;            // A negative float
    let largeNumber = 123e5;           // Exponential notation
    console.log(typeof age);           // "number"
    
    // Boolean
    let isStudent = true;              // Boolean true
    let hasGraduated = false;          // Boolean false
    console.log(typeof isStudent);     // "boolean"
    
    // Null
    let car = null;                    // No value, explicitly set to null
    console.log(typeof car);           // "object" (this is a quirk in JavaScript)
    
    // Undefined
    let salary;                        // Variable declared but not defined
    console.log(typeof salary);        // "undefined"
    
    // BigInt
    let bigInteger = 1234567890123456789012345678901234567890n;
    console.log(typeof bigInteger);    // "bigint"
    
    // Symbol
    let uniqueID = Symbol('id');
    let anotherID = Symbol('id');
    console.log(uniqueID === anotherID); // false (each Symbol is unique)
    console.log(typeof uniqueID);        // "symbol"


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


