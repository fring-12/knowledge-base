# JavaScript Core Concepts - Class 2

  

## Table of Contents

  

1. [Syntax Parser, Execution Context, and Call Stack](#1-syntax-parser-execution-context-and-call-stack)

  

2. [Hoisting](#2-hoisting)

  

3. [Value Types and Reference Types](#3-value-types-and-reference-types)

  

4. [Implicit and Explicit Coercion](#4-implicit-and-explicit-coercion)

  

5. [Scopes](#5-scopes)

  

6. [IIFE](#6-iife-immediately-invoked-function-expression)

  

7. [Object.create and Object.assign](#7-objectcreate-and-objectassign)

  

8. [Array and String Methods](#8-array-and-string-methods)

  

9. [Pure Functions, Side Effects, and State Mutation](#9-pure-functions-side-effects-and-state-mutation)

  

10. [Higher Order Functions](#10-higher-order-functions)

  

11. [Closures](#11-closures)

  

## 1. Syntax Parser, Execution Context, and Call Stack

  

### Syntax Parser

  

The JavaScript engine reads your code character by character, checking if it follows proper syntax rules.

  

### Execution Context


 [TOOL](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gdGVudGgoKSB7IH0KCmZ1bmN0aW9uIG5pbnRoKCkgeyB0ZW50aCgpIH0KCmZ1bmN0aW9uIGVpZ3RoKCkgeyBuaW50aCgpIH0KCmZ1bmN0aW9uIHNldmVudGgoKSB7IGVpZ3RoKCkgfQoKZnVuY3Rpb24gc2l4dGgoKSB7IHNldmVudGgoKSB9CgpmdW5jdGlvbiBmaWZ0aCgpIHsgc2l4dGgoKSB9CgpmdW5jdGlvbiBmb3VydGgoKSB7IGZpZnRoKCkgfQoKZnVuY3Rpb24gdGhpcmQoKSB7IGZvdXJ0aCgpIH0KCmZ1bmN0aW9uIHNlY29uZCgpIHsgdGhpcmQoKSB9CgpmdW5jdGlvbiBmaXJzdCgpIHsgc2Vjb25kKCkgfQoKZmlyc3QoKTs=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4=)

  

The environment where JavaScript code is executed. Contains:

  

- Variable Environment

  

- Scope Chain

  

-  `this` keyword

  

```javascript

// Global Execution Context

  

let  globalVar  =  "I'm global";

  

function  someFunction() {

// Function Execution Context

  

let  localVar  =  "I'm local";

  

console.log(globalVar); // Can access global

}

```

  

### Call Stack

  

The mechanism JavaScript uses to keep track of function calls.

  

```javascript

function  firstFunction() {

console.log("First");

  

secondFunction();

}

  

function  secondFunction() {

console.log("Second");

  

thirdFunction();

}

  

function  thirdFunction() {

console.log("Third");

}

  

firstFunction();

  

// Call stack order:

  

// 1. firstFunction

  

// 2. secondFunction

  

// 3. thirdFunction

  

// Then unwinds in reverse

```

  

## 2. Hoisting

  

Variables and function declarations are moved to the top of their scope during compilation.

  

```javascript

// What we write

  

console.log(myVar); // undefined

  

var  myVar  =  "Hello";

  

// How JavaScript sees it

  

var  myVar;

  

console.log(myVar);

  

myVar  =  "Hello";

  

// Function hoisting

  

sayHello(); // Works!

  

function  sayHello() {

console.log("Hello");

}

  

// Function expression - NOT hoisted

  

sayGoodbye(); // Error!

  

var  sayGoodbye  =  function () {

console.log("Goodbye");

};

```

  

## 3. Value Types and Reference Types

  

### Value Types (Primitives)

  

```javascript

// Primitives are copied by value

  

let  a  =  5;

  

let  b  =  a;

  

a  =  10;

  

console.log(b); // Still 5

  

// Primitive types

  

let  string  =  "Hello";

  

let  number  =  42;

  

let  boolean  =  true;

  

let  nullValue  =  null;

  

let  undefinedValue  =  undefined;

  

let  symbol  =  Symbol("description");

```

  

### Reference Types

  

```javascript

// Objects are copied by reference

  

let  obj1  = { name:  "John" };

  

let  obj2  =  obj1;

  

obj1.name  =  "Jane";

  

console.log(obj2.name); // "Jane"

  

// Arrays are reference types

  

let  arr1  =  [1,  2,  3];

  

let  arr2  =  arr1;

  

arr1.push(4);

  

console.log(arr2); // [1, 2, 3, 4]

```

  

## 4. Implicit and Explicit Coercion

  

### Implicit Coercion

  

```javascript

// JavaScript automatically converts types

  

console.log("5"  +  2); // "52" (string)

  

console.log("5"  -  2); // 3 (number)

  

console.log(true  +  1); // 2

  

console.log(false  +  1); // 1

  

console.log("5"  ==  5); // true

```

  

### Explicit Coercion

  

```javascript

// Deliberately converting types

  

let  str  =  String(123); // "123"

  

let  num  =  Number("123"); // 123

  

let  bool  =  Boolean(1); // true

  

// Using parseInt/parseFloat

  

let  integer  =  parseInt("123.45"); // 123

  

let  float  =  parseFloat("123.45"); // 123.45

```

  

## 5. Scopes

  

### Function Scope

  

```javascript

function  functionScope() {

var  functionScoped  =  "I'm function scoped";

  

console.log(functionScoped); // Works

}

  

// console.log(functionScoped); // Error!

```

  

### Block Scope

  

```javascript

{

let  blockScoped  =  "I'm block scoped";

  

const  alsoBlockScoped  =  "Me too";

  

var  notBlockScoped  =  "I'm function scoped";

}

  

// console.log(blockScoped); // Error!

  

// console.log(alsoBlockScoped); // Error!

  

console.log(notBlockScoped); // Works!

```

  

### Lexical Scope & Scope Chain

  

```javascript

const  global  =  "Global";

  

function  outer() {

const  outer  =  "Outer";

  

function  inner() {

const  inner  =  "Inner";

  

console.log(global); // Can access global

  

console.log(outer); // Can access outer

  

console.log(inner); // Can access inner

}

  

inner();

}

```

  

## 6. IIFE (Immediately Invoked Function Expression)

  

```javascript

// Standard IIFE

  

(function () {

let  private  =  "I'm private";

  

console.log("IIFE executed!");

})();

  

// IIFE with parameters

  

(function (name) {

console.log(`Hello, ${name}!`);

})("John");

  

// Module Pattern using IIFE

  

const  counter  =  (function () {

let  count  =  0; // Private variable

  

return {

increment:  function () {

count++;

},

  

getCount:  function () {

return  count;

},

};

})();

```

  

## 7. Object.create and Object.assign

  

### Object.create

  

```javascript

const  personProto  = {

greet() {

return  `Hello, I'm ${this.name}`;

},

};

  

const  john  =  Object.create(personProto);

  

john.name  =  "John";

  

console.log(john.greet()); // "Hello, I'm John"

```

  

### Object.assign

  

```javascript

const  target  = { a:  1, b:  2 };

  

const  source1  = { b:  3, c:  4 };

  

const  source2  = { c:  5, d:  6 };

  

const  result  =  Object.assign(target,  source1,  source2);

  

console.log(result); // { a: 1, b: 3, c: 5, d: 6 }

  

// Shallow clone

  

const  clone  =  Object.assign({},  target);

```

  

## 8. Array and String Methods

### 1. `push()`

**Purpose**: Adds one or more items to the end of an array.

**Example**:

    const fruits = ['apple', 'banana'];
    fruits.push('orange'); // Adds 'orange' to the end
    console.log(fruits); // Output: ['apple', 'banana', 'orange']

**Explanation**: The `push` method adds new items at the end of the array and returns the new length of the array.

----------

### 2. `pop()`

**Purpose**: Removes the last item from an array.

**Example**:

const fruits = ['apple', 'banana', 'orange'];
const lastFruit = fruits.pop(); // Removes 'orange'
console.log(fruits); // Output: ['apple', 'banana']
console.log(lastFruit); // Output: 'orange'

**Explanation**: The `pop` method removes the last item from the array and returns it. The array is now one item shorter.

----------

### 3. `unshift()`

**Purpose**: Adds one or more items to the beginning of an array.

**Example**:

    const fruits = ['banana', 'orange'];
    fruits.unshift('apple'); // Adds 'apple' to the beginning
    console.log(fruits); // Output: ['apple', 'banana', 'orange']

**Explanation**: `unshift` adds the specified item(s) at the start of the array, shifting existing items right.

----------

### 4. `shift()`

**Purpose**: Removes the first item from an array.

**Example**:

    const fruits = ['apple', 'banana', 'orange'];
    const firstFruit = fruits.shift(); // Removes 'apple'
    console.log(fruits); // Output: ['banana', 'orange']
    console.log(firstFruit); // Output: 'apple'

**Explanation**: The `shift` method removes the first item from the array and returns it, shifting all other items one position to the left.

----------

### 5. `splice()`

**Purpose**: Adds or removes items from any position in the array.

**Example**:

    const fruits = ['apple', 'banana', 'orange'];
    fruits.splice(1, 1, 'mango'); // Replaces 'banana' with 'mango'
    console.log(fruits); // Output: ['apple', 'mango', 'orange'] 

**Explanation**: The `splice` method takes three arguments: the index to start at, the number of items to remove, and the items to add. In this case, it removes one item at index 1 and adds 'mango'.

----------

### 6. `slice()`

**Purpose**: Returns a new array with a selected part of the array.

**Example**:

    const fruits = ['apple', 'banana', 'orange'];
    const someFruits = fruits.slice(1, 3); // Selects items from index 1 up to (but not including) index 3
    console.log(someFruits); // Output: ['banana', 'orange']
    console.log(fruits); // Original array is unchanged 

**Explanation**: `slice` takes two arguments: the start index and the end index. It creates a new array with the selected range without modifying the original array.

  

###  Others Important Array Methods

  

        // Array Cardio Day 1
    // Let's work with arrays and some powerful JavaScript methods!
    
    // Sample data we'll use
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    
    const people = [
      'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
      'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
      'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
      'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
      'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
      'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
      'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
      'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
      'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
      'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
    ];
    
    // 1. Filter the list of inventors for those who were born in the 1500's
    const bornIn1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    console.table(bornIn1500s); // Display the result in a table
    
    // 2. Map: Get an array of the inventors' first and last names
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames); // Display the array of names
    
    // 3. Sort the inventors by birthdate, from oldest to youngest
    const sortedByBirthdate = inventors.sort((a, b) => a.year - b.year);
    console.table(sortedByBirthdate); // Display sorted inventors
    
    // 4. Reduce: Calculate the total number of years all inventors lived
    const totalYearsLived = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
    console.log(totalYearsLived); // Display total years
    
    // 5. Sort inventors by years lived (from oldest to youngest)
    const sortedByYearsLived = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
    console.table(sortedByYearsLived); // Display sorted inventors by lifespan


  

### String Methods

  

```javascript

const  str  =  "Hello, World!";

  

str.toLowerCase(); // "hello, world!"

  

str.toUpperCase(); // "HELLO, WORLD!"

  

str.split(", "); // ["Hello", "World!"]

  

str.includes("World"); // true

  

str.replace("World",  "JavaScript"); // "Hello, JavaScript!"

```

  

## 9. Pure Functions, Side Effects, and State Mutation

  

### Pure Functions

  

```javascript

// Pure function - same input always gives same output

  

function  add(a,  b) {

return  a  +  b;

}

  

// Impure function - has side effects

  

let  total  =  0;

  

function  addToTotal(value) {

total  +=  value; // Side effect: modifying external state

  

return  total;

}

```

  

### State Mutation / Speard operators

  

```javascript

// Avoiding state mutation

  

const  originalArray  =  [1,  2,  3];

  

// Bad - mutates original

  

originalArray.push(4);

  

// Good - creates new array

  

const  newArray  =  [...originalArray,  4];

  

// Object mutation

  

const  original  = { name:  "John" };

  

// Bad

  

original.name  =  "Jane";

  

// Good

  

const  modified  = { ...original, name:  "Jane" };

```

  

## 10. Higher Order Functions

  

```javascript

// Function that takes a function as argument

  

function  operate(func,  a,  b) {

return  func(a,  b);

}

  

const  add  = (a,  b) =>  a  +  b;

  

const  multiply  = (a,  b) =>  a  *  b;

  

console.log(operate(add,  5,  3)); // 8

  

console.log(operate(multiply,  5,  3)); // 15

  

// Function that returns a function

  

function  multiply(factor) {

return  function (number) {

return  number  *  factor;

};

}

  

const  double  =  multiply(2);

  

const  triple  =  multiply(3);

  

console.log(double(5)); // 10

  

console.log(triple(5)); // 15

```

  

## 11. Closures

  

```javascript

function  createCounter() {

let  count  =  0; // This variable is "closed over"

  

return {

increment:  function () {

count++;

  

return  count;

},

  

decrement:  function () {

count--;

  

return  count;

},

  

getCount:  function () {

return  count;

},

};

}

  

const  counter  =  createCounter();

  

console.log(counter.increment()); // 1

  

console.log(counter.increment()); // 2

  

console.log(counter.decrement()); // 1

```
