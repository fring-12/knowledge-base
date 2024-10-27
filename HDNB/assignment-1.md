### **Assignments 1: 

 **Temperature Conversion**:
    
    let celsius = 25; // Given value
    let fahrenheit;
    
    // Write your logic to convert Celsius to Fahrenheit here
    
    console.log(fahrenheit); // Output the result


    
**Swapping Variables**:

    
 

        let a = 5;
        let b = 10;
        
        // Write your logic to swap the values of a and b here
        
        console.log(a); // Should print 10
        console.log(b); // Should print 5 
    
**Simple Interest Calculation**:


    let principal = 1000; // Principal amount
    let rate = 5;         // Rate of interest
    let time = 2;         // Time in years
    let simpleInterest;
    
    // Write your logic to calculate simple interest here
    
    console.log(simpleInterest); // Output the result
    

    
 **Sum of Natural Numbers**:
    
    let n = 10; // Calculate sum up to this number
    let sum = 0;
    
    // Write your logic to calculate the sum of natural numbers here
    
    console.log(sum); // Output the result 
    
    
**Even Numbers**:
    
    `// Write your loop to print all even numbers between 1 and 100 here` 


**Student Object**:
    
    
    let student = {
      name: "John",
      age: 16,
      grade: 10
    };
    
    // Write a function that prints: "John is 16 years old and in grade 10"
    
**Updating Object Properties**:
    
    let car = {
      brand: "Toyota",
      model: "Corolla",
      year: 2018
    };
    
    // Write a function that updates the 'year' property of the car object
    // Output the updated object 
    
 **Product List**:
    
    let products = [
      { name: "Laptop", price: 1000, category: "Electronics" },
      { name: "Phone", price: 500, category: "Electronics" },
      { name: "Shoes", price: 100, category: "Fashion" }
    ];
    
    // Write a loop that prints the name and price of each product
    
 **Calculate Total Price**:
    
    `let products = [
      { name: "Laptop", price: 1000, category: "Electronics" },
      { name: "Phone", price: 500, category: "Electronics" },
      { name: "Shoes", price: 100, category: "Fashion" }
    ];
    let totalPrice = 0;
    
    // Write logic to calculate the total price of all products
    console.log(totalPrice); // Output the result`

### **Assignment 2 Instructions:**

In this assignment, you will implement the logic of a calculator using JavaScript. The calculator has buttons for addition, subtraction, multiplication, division, modulus, and exponentiation, and it displays the result after performing the chosen operation. You are provided with the **HTML template** (the structure of the webpage), and you will need to write the **JavaScript code** inside a separate file (`calculator.js`).

Below is a step-by-step guide to help you understand where to write the code and how to complete this assignment.

----------

### **What You Are Given:**

-   An **HTML file** (`index.html`), which includes the structure of a simple calculator. This file has input fields to enter two numbers, buttons to trigger different operations, and a section to display the result.
-   A **JavaScript file** (`calculator.js`), where you will write the logic for each button (i.e., the functions that calculate the result when the user clicks a button).

----------

### **Steps to Complete the Assignment:**

#### 1. **Setting Up Your Files**

-   You will work with two files: `index.html` and `calculator.js`.
-   **Do not modify the `index.html` file** except for linking the `calculator.js` file, which is already done for you.
-   You will write all the JavaScript code inside `calculator.js`.

#### 2. **Understanding the HTML File** (`index.html`):

-   The HTML file contains the structure of the calculator:
    -   Two text input fields for the user to enter numbers (`number1` and `number2`).
    -   Buttons to perform different operations (Add, Subtract, Multiply, etc.).
    -   A section to display the result (`id="result"`).
-   You don’t need to change anything here, just focus on how it interacts with your JavaScript code.

#### 3. **Writing the JavaScript Code** (`calculator.js`):

-   In the `calculator.js` file, you will write the logic for each operation (addition, subtraction, etc.). When a user clicks a button (e.g., "Add"), the corresponding function in `calculator.js` will run and update the result.

#### 4. **How to Write a Function**:

-   Each function has two main tasks:
    1.  **Get the numbers** entered by the user from the input fields (`number1` and `number2`).
    2.  **Perform the calculation** (e.g., adding or multiplying the numbers).
    3.  **Display the result** inside the `result` section of the HTML.

Here is the basic structure of how each function will look:



    function add() {
      // Get the numbers from the input fields
      const num1 = parseFloat(document.getElementById('number1').value);
      const num2 = parseFloat(document.getElementById('number2').value);
      
      // Check if the inputs are valid numbers
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Invalid input';
        return;
      }
      
      // Perform the calculation (e.g., addition in this case)
      const result = num1 + num2;
      
      // Display the result in the "result" section
      document.getElementById('result').textContent = result;
    }

-   **Get the numbers**: We use `document.getElementById('number1').value` to get the value from the first input field. We convert it to a number using `parseFloat()` because input values are treated as text by default.
-   **Check if the input is valid**: We use `isNaN()` to check if the user has entered a valid number. If the input is not valid, we show an error message (`'Invalid input'`).
-   **Perform the calculation**: For example, in the `add` function, we add `num1` and `num2`.
-   **Display the result**: We use `document.getElementById('result').textContent` to show the result in the webpage.

#### 5. **Implementing All Operations**:

-   You will need to write similar functions for each of the following operations:
    -   **Addition**: `add()`
    -   **Subtraction**: `subtract()`
    -   **Multiplication**: `multiply()`
    -   **Division**: `divide()`
    -   **Modulus** (remainder of division): `modulus()`
    -   **Exponentiation** (raising a number to a power): `exponent()`
    -   **Clear**: `clearFields()` to reset the inputs and result.

Each function will follow the same structure as the `add` function shown above. The only difference will be in the calculation part (e.g., subtraction, multiplication, etc.).

#### 6. **Clearing the Fields**:

-   You also need to implement a `clearFields()` function that will reset both input fields and the result back to zero. Here’s how you do it:

    function clearFields() {
              document.getElementById('number1').value = '';
              document.getElementById('number2').value = '';
              document.getElementById('result').textContent = '0';
            }

#### 7. **Linking the HTML and JavaScript**:

-   When a user clicks a button in the HTML (e.g., "Add"), it will trigger the corresponding function in the JavaScript file. For example, clicking the "Add" button calls the `add()` function.
-   This connection between the button and the function is already done in the HTML file using `onclick="add()"`, `onclick="subtract()"`, etc.

----------

### **Assignment Submission**:

1.  Write the logic for all the operations (add, subtract, multiply, divide, modulus, exponent) inside the `calculator.js` file.
2.  Ensure the input validation is working, and test your calculator to handle different scenarios (e.g., invalid input, division by zero).
3.  Submit both the `index.html` and `calculator.js` files after you have completed the assignment.

----------

### **Example of How It Works**:

-   **Addition**: When you enter `5` in the first input field, `3` in the second, and click "Add," the result should display `8`.
-   **Subtraction**: When you enter `10` in the first input field, `7` in the second, and click "Subtract," the result should display `3`.

You will follow the same steps for other operations as well.

Here in the index.html file:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calculator Assignment</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 50px;
        }
        .calculator {
          border: 1px solid #ccc;
          padding: 20px;
          max-width: 300px;
          margin: auto;
        }
        .calculator input {
          width: 100%;
          height: 40px;
          margin-bottom: 10px;
          font-size: 18px;
          text-align: right;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .buttons button {
          width: 48%;
          height: 40px;
          font-size: 18px;
        }
      </style>
    </head>
    <body>
    
      <h1>JavaScript Calculator</h1>
      
      <div class="calculator">
        <input type="text" id="number1" placeholder="Enter first number">
        <input type="text" id="number2" placeholder="Enter second number">
        
        <div class="buttons">
          <button onclick="add()">Add</button>
          <button onclick="subtract()">Subtract</button>
        </div>
        <div class="buttons">
          <button onclick="multiply()">Multiply</button>
          <button onclick="divide()">Divide</button>
        </div>
        <div class="buttons">
          <button onclick="modulus()">Modulus</button>
          <button onclick="exponent()">Exponent</button>
        </div>
        <div class="buttons">
          <button onclick="clearFields()">Clear</button>
        </div>
        
        <h3>Result: <span id="result">0</span></h3>
      </div>
    
      <!-- Link to the external JavaScript file -->
      <script src="calculator.js"></script>
    
    </body>
    </html>

Here is the javascript file calculator.js:

    // Function to perform addition
    function add() {
      const num1 = parseFloat(document.getElementById('number1').value);
      const num2 = parseFloat(document.getElementById('number2').value);
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Invalid input';
        return;
      }
      // Write your code here
      const result = num1 + num2; // Example of addition
      document.getElementById('result').textContent = result;
    }
    
    // Function to perform subtraction
    function subtract() {
      const num1 = parseFloat(document.getElementById('number1').value);
      const num2 = parseFloat(document.getElementById('number2').value);
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Invalid input';
        return;
      }
      // Write your code here
  
      document.getElementById('result').textContent = result;
    }
    
    // Function to perform multiplication
    function multiply() {
      const num1 = parseFloat(document.getElementById('number1').value);
      const num2 = parseFloat(document.getElementById('number2').value);
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Invalid input';
        return;
      }
      // Write your code here
      
      document.getElementById('result').textContent = result;
    }
    
    // Function to perform division
    function divide() {
      const num1 = parseFloat(document.getElementById('number1').value);
      const num2 = parseFloat(document.getElementById('number2').value);
      if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        document.getElementById('result').textContent = 'Invalid input or Division by 0';
        return;
      }
      // Write your code here
      
      document.getElementById('result').textContent = result;
    }
    
    // Function to perform modulus
    function modulus() {
      const num1 = parseFloat(document.getElementById('number1').value);
      const num2 = parseFloat(document.getElementById('number2').value);
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Invalid input';
        return;
      }
      // Write your code here
      
      document.getElementById('result').textContent = result;
    }
    
    // Function to perform exponentiation
    function exponent() {
      const num1 = parseFloat(document.getElementById('number1').value);
      const num2 = parseFloat(document.getElementById('number2').value);
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Invalid input';
        return;
      }
      // Write your code here
      
      document.getElementById('result').textContent = result;
    }
    
    // Function to clear the input fields and result
    function clearFields() {
      document.getElementById('number1').value = '';
      document.getElementById('number2').value = '';
      document.getElementById('result').textContent = '0';
    }


### **Submission Guidelines**

For this assignment, you will need to submit **3 files**:

1.  **index.html** - This file should contain the structure of your calculator and include the necessary HTML elements (input fields, buttons, etc.).
2.  **calculator.js** - This file will contain the logic for the calculator functions (addition, subtraction, multiplication, etc.).
3.  **script.js** - This file will contain the solutions to the small assignments (variables, loops, objects).

### **Important Note:**

I understand that ChatGPT and other tools can generate the code for you, but for your own growth, **please try to implement the solutions yourself**. Use ChatGPT to help you understand concepts, but avoid using it for completing the assignments directly. This practice is important for your learning and will help you become more confident in writing JavaScript on your own.