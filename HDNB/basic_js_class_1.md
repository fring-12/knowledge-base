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

### JavaScript: From Web Interaction to a Vast Ecosystem

#### Early Days: JavaScript for Web Interactivity

JavaScript was first introduced in 1995 by Brendan Eich at Netscape as a lightweight scripting language called **Mocha** (later renamed to **JavaScript**). Its primary purpose was to **add interactivity to static web pages**, allowing web developers to make dynamic changes to HTML and CSS, such as:

-   **Validating forms** (e.g., checking if an email field is correctly filled).
-   **Animating elements** (e.g., creating image sliders).
-   **Responding to user actions** like clicks and key presses.

At the time, the web consisted of mostly static pages where the content was predefined in HTML. JavaScript made it possible for web pages to respond to user interactions without needing to reload the page, creating a more interactive and engaging user experience.

#### The Evolution: JavaScript Becomes a Full-Fledged Language

As the internet and technology progressed, so did JavaScript. Over the years, it has evolved significantly from being just a tool for front-end interactivity to becoming a versatile language capable of much more. Key milestones in this evolution include:

1.  **AJAX (Asynchronous JavaScript and XML)**:
    
    -   Introduced in the early 2000s, AJAX allowed JavaScript to fetch data from a server in the background without reloading the page. This led to the creation of modern web apps where users could interact with data dynamically, improving user experience dramatically. Applications like Gmail and Google Maps became possible due to AJAX.
2.  **JavaScript Engines and Performance Improvements**:
    
    -   In 2008, Google introduced the **V8 JavaScript engine** in its Chrome browser, significantly improving the execution speed of JavaScript. This opened up possibilities for JavaScript to handle more complex tasks.
3.  **Node.js (2009)**:
    
    -   A major breakthrough came with **Node.js**, which allowed JavaScript to run on the **server-side**. This transformed JavaScript from a purely browser-based language to a **full-stack** language capable of handling backend development.
    -   Now, developers could write both front-end and back-end code using the same language, reducing the need for context switching between languages and improving developer productivity.
4.  **Frameworks and Libraries**:
    
    -   **React, Angular, and Vue**: The introduction of these front-end frameworks and libraries revolutionized how developers build user interfaces. JavaScript became the backbone of highly interactive and scalable web applications, where the UI updates dynamically based on changes in data.
    -   **Express.js**: On the server side, Express.js made it easy to build web servers with Node.js, making JavaScript a popular choice for backend development.
5.  **NPM (Node Package Manager)**:
    
    -   The **NPM ecosystem** provided JavaScript developers with access to thousands of packages, further expanding its reach. With NPM, developers can easily share and reuse code, accelerating development time and promoting collaboration.

#### Present Day: JavaScript Everywhere

Today, JavaScript is no longer confined to the browser or even the web. It has grown into a language that powers almost every part of modern computing. Some key areas where JavaScript is used include:

-   **Web Development**: JavaScript remains the dominant language for creating interactive, dynamic websites and web apps.
-   **Server-Side Development**: Thanks to **Node.js**, JavaScript is widely used to build scalable server-side applications, including APIs and microservices.
-   **Mobile App Development**: Frameworks like **React Native** and **Ionic** enable developers to create cross-platform mobile apps using JavaScript.
-   **Desktop Application Development**: Tools like **Electron** allow developers to build desktop applications using JavaScript, HTML, and CSS (e.g., Slack and Visual Studio Code).
-   **Game Development**: JavaScript is used in browser-based games and game engines like **Phaser**.
-   **IoT (Internet of Things)**: JavaScript, through platforms like **Johnny-Five**, can be used to control hardware, making it a player in the IoT space.

### Popular Software Made with JavaScript and Its Frameworks

#### 1. **Desktop Applications (Electron)**

-   **Visual Studio Code (VS Code)**
-   **Slack**
-   **Discord**

#### 2. **Web Applications (React, Node.js)**

-   **Facebook and Instagram** – React (frontend), Node.js (backend)
-   **Netflix** – React (frontend), Node.js (backend)
-   **Uber** – React, Node.js
-   **Airbnb** – React

#### 3. **Mobile Applications (React Native)**

-   **Facebook** – React Native
-   **Instagram** – React Native
-   **Walmart** – React Native

#### 4. **Server-Side Applications (Node.js)**

-   **LinkedIn**
-   **PayPal**
-   **eBay**

#### 5. **Game Development (Phaser, Three.js)**

-   **2048** – Vanilla JavaScript
-   **HexGL** – Three.js
-   **Flappy Bird** – Phaser
-   **Angry Birds** – Phaser

#### 6. **AI and Machine Learning (TensorFlow.js, Brain.js)**

-   **TensorFlow.js** – Real-time object detection, model training in-browser
-   **Brain.js** – Neural networks for tasks like predictions and classification



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
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple JavaScript Example</title>
    </head>
    <body>
    
      <h1>Welcome to JavaScript!</h1>
    
      <p>Click the button below to see the magic:</p>
    
      <!-- Button to trigger JavaScript function -->
      <button onclick="displayMessage()">Click Me</button>
    
      <!-- Placeholder to show result -->
      <p id="message"></p>
    
      <script>
        // JavaScript function to display a message
        function displayMessage() {
          document.getElementById("message").innerHTML = "Hello, JavaScript is working!";
        }
      </script>
    
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
Operators in JavaScript are used to perform operations on values and variables. They can be grouped into several categories: arithmetic, assignment, comparison, logical, bitwise, and more.

### 1. Arithmetic Operators
These operators perform basic mathematical operations.

| Operator | Description              | Example        | Result |
|----------|--------------------------|----------------|--------|
| `+`      | Addition                 | `5 + 3`        | `8`    |
| `-`      | Subtraction              | `5 - 3`        | `2`    |
| `*`      | Multiplication           | `5 * 3`        | `15`   |
| `/`      | Division                 | `15 / 3`       | `5`    |
| `%`      | Modulus (remainder)      | `10 % 3`       | `1`    |
| `++`     | Increment (adds 1)       | `let a = 5; a++` | `6`    |
| `--`     | Decrement (subtracts 1)  | `let a = 5; a--` | `4`    |

#### Example:

    let x = 10;
    let y = 3;
    console.log(x + y);  // 13
    console.log(x - y);  // 7
    console.log(x * y);  // 30
    console.log(x / y);  // 3.3333
    console.log(x % y);  // 1

### 2. Assignment Operators
Assignment operators are used to assign values to variables.

| Operator | Description              | Example         | Result         |
|----------|--------------------------|-----------------|----------------|
| `=`      | Assign                   | `x = 5`         | `x = 5`        |
| `+=`     | Add and assign            | `x += 3`        | `x = x + 3` (8) |
| `-=`     | Subtract and assign       | `x -= 2`        | `x = x - 2` (3) |
| `*=`     | Multiply and assign       | `x *= 4`        | `x = x * 4` (20)|
| `/=`     | Divide and assign         | `x /= 2`        | `x = x / 2` (10)|
| `%=`     | Modulus and assign        | `x %= 2`        | `x = x % 2` (0) |

### 3. Comparison Operators
Comparison operators are used to compare two values and return a boolean (`true` or `false`).

| Operator | Description                 | Example           | Result   |
|----------|-----------------------------|-------------------|----------|
| `==`     | Equal to                    | `5 == '5'`        | `true`   |
| `===`    | Strict equal (value + type)  | `5 === '5'`       | `false`  |
| `!=`     | Not equal                   | `5 != '5'`        | `false`  |
| `!==`    | Strict not equal (value + type) | `5 !== '5'`    | `true`   |
| `>`      | Greater than                | `10 > 5`          | `true`   |
| `<`      | Less than                   | `10 < 5`          | `false`  |
| `>=`     | Greater than or equal to    | `10 >= 10`        | `true`   |
| `<=`     | Less than or equal to       | `5 <= 5`          | `true`   |


### 4. Logical Operators
Logical operators are used to combine multiple conditions and return a boolean value (`true` or `false`).

| Operator | Description        | Example          | Result   |
|----------|--------------------|------------------|----------|
| `&&`     | Logical AND         | `true && false`  | `false`  |
| `||`     | Logical OR          | `true || false`  | `true`   |
| `!`      | Logical NOT         | `!true`          | `false`  |

#### Example:

    let isAdult = true;
    let hasID = false;
    
    console.log(isAdult && hasID);  // false (both conditions must be true)
    console.log(isAdult || hasID);  // true (one condition is true)
    console.log(!isAdult);          // false (negates the value)

### 4. Logical Operators
Logical operators are used to combine multiple conditions and return a boolean value (`true` or `false`).

| Operator | Description        | Example          | Result   |
|----------|--------------------|------------------|----------|
| `&&`     | Logical AND         | `true && false`  | `false`  |
| `||`     | Logical OR          | `true || false`  | `true`   |
| `!`      | Logical NOT         | `!true`          | `false`  |

#### Example:

    let isAdult = true;
    let hasID = false;
    
    console.log(isAdult && hasID);  // false (both conditions must be true)
    console.log(isAdult || hasID);  // true (one condition is true)
    console.log(!isAdult);          // false (negates the value)

 
 ### 5. Bitwise Operators
Bitwise operators operate on binary numbers at the bit level.

| Operator | Description              | Example       | Result (Binary) |
|----------|--------------------------|---------------|-----------------|
| `&`      | AND                      | `5 & 1`       | `1`  (0101 & 0001 = 0001) |
| `|`      | OR                       | `5 | 1`       | `5`  (0101 | 0001 = 0101) |
| `^`      | XOR                      | `5 ^ 1`       | `4`  (0101 ^ 0001 = 0100) |
| `~`      | NOT                      | `~5`          | `-6` (~0101 = 1010) |
| `<<`     | Left shift               | `5 << 1`      | `10` (0101 << 1 = 1010) |
| `>>`     | Right shift              | `5 >> 1`      | `2`  (0101 >> 1 = 0010) |

#### Example:

    let a = 5; // Binary: 0101
    let b = 1; // Binary: 0001
    
    console.log(a & b);  // 1 (AND)
    console.log(a | b);  // 5 (OR)
    console.log(a ^ b);  // 4 (XOR)
    console.log(~a);     // -6 (NOT)
    console.log(a << 1); // 10 (Left shift)
    console.log(a >> 1); // 2  (Right shift)

### 6. Ternary (Conditional) Operator
The ternary operator is a shorthand for the `if...else` statement. It takes three operands: a condition, an expression to execute if the condition is `true`, and another expression to execute if the condition is `false`.

| Syntax    | Description                       | Example                     | Result   |
|-----------|-----------------------------------|-----------------------------|----------|
| `? :`     | If condition is true or false     | `age >= 18 ? 'Adult' : 'Child'` | `Adult`  |

#### Example:

    let age = 20;
    let status = (age >= 18) ? 'Adult' : 'Child';
    
    console.log(status); // Adult

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

Loops are used to execute a block of code repeatedly, based on a condition. There are three main types of loops in JavaScript: `for`, `while`, and `do...while`.

#### 1. For Loop
The `for` loop is used when you know in advance how many times you want to execute a statement or a block of statements.

**Syntax:**

        for (initialization; condition; increment/decrement) {
            // code block to be executed
        }
    
    // Example 1: Print numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    
    // Example 2: Sum of numbers from 1 to 10
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i; // equivalent to sum = sum + i
    }
    console.log("Sum from 1 to 10:", sum); // Output: 55
    
    // Example 3: Print even numbers from 0 to 20
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }

#### 2. While Loop

The `while` loop is used when you want to execute a block of code as long as a specified condition is true.

**Syntax:**

        while (condition) {
            // code block to be executed
        }
    
    // Example 1: Print numbers from 1 to 5
    let j = 1;
    while (j <= 5) {
        console.log(j);
        j++;
    }
    
    // Example 2: Sum of numbers from 1 to 10
    let total = 0;
    let k = 1;
    while (k <= 10) {
        total += k;
        k++;
    }
    console.log("Sum from 1 to 10:", total); // Output: 55
    
    // Example 3: Print odd numbers from 1 to 19
    let m = 1;
    while (m < 20) {
        console.log(m);
        m += 2;
    }

#### 3. Do...While Loop

The `do...while` loop is similar to the `while` loop, but it guarantees that the code block will be executed at least once, even if the condition is false.

**Syntax:**

        do {
            // code block to be executed
        } while (condition);
    
    // Example 1: Print numbers from 1 to 5
    let n = 1;
    do {
        console.log(n);
        n++;
    } while (n <= 5);
    
    // Example 2: Sum of numbers from 1 to 5
    let totalSum = 0;
    let p = 1;
    do {
        totalSum += p;
        p++;
    } while (p <= 5);
    console.log("Sum from 1 to 5:", totalSum); // Output: 15
    
    // Example 3: Prompt user until they enter a valid number
    let number;
    do {
        number = prompt("Enter a number greater than 0:");
    } while (number <= 0);
    console.log("You entered:", number);
### Exercise:

-   Create a `for` loop to print numbers from 1 to 10.
-   Create a `while` loop to count down from 5 to 1.

----------

## 10. Functions

### 9. Functions
Functions are reusable blocks of code that perform a specific task. They can take inputs, known as **parameters** or **arguments**, and can return a value. 

#### Components of a Function:
1. **Function Name**: A unique identifier for the function.
2. **Parameters**: Variables that act as placeholders for the values you pass into the function.
3. **Arguments**: The actual values you provide when calling the function.
4. **Return Statement**: Used to return a value from the function.

**Syntax:**

    function functionName(parameter1, parameter2, ...) {
        // code to be executed
        return value; // optional
    }

#### Example 1: Basic Function

        // Function to greet a user
        function greet(name) {
            return "Hello, " + name + "!";
        }
    
    // Calling the function
    console.log(greet("Alice")); // Output: Hello, Alice!
-   **Function Name**: `greet`
-   **Parameter**: `name`
-   **Argument**: `"Alice"`
-   **Return**: Returns a greeting string.

#### Example 2: Function with Multiple Parameters

    // Function to calculate the sum of two numbers
    function add(a, b) {
        return a + b;
    }
    
    // Calling the function
    console.log(add(5, 3)); // Output: 8

  

  #### Arrow function to subtract two numbers
    const subtract = (x, y) => {
        return x - y;
    };
    
    // Calling the function
    console.log(subtract(10, 3)); // Output: 7


### Exercise:

-   Write a function that takes two numbers as parameters and returns their multiplication.


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


