# JavaScript Core Concepts - Class 2

## Table of Contents

1. [Syntax Parser, Execution Context, and Call Stack](#1-syntax-parser-execution-context-and-call-stack)

2. [Hoisting](#2-hoisting)

3. [Scopes](#5-scopes)

4. [Closures](#11-closures)

5. [Value Types and Reference Types](#3-value-types-and-reference-types)

6. [Implicit and Explicit Coercion](#4-implicit-and-explicit-coercion)

7. [IIFE](#6-iife-immediately-invoked-function-expression)

8. [Object.create and Object.assign](#7-objectcreate-and-objectassign)

9. [Array and String Methods](#8-array-and-string-methods)

10. [Pure Functions, Side Effects, and State Mutation](#9-pure-functions-side-effects-and-state-mutation)

11. [Higher Order Functions](#10-higher-order-functions)

## 1. Syntax Parser, Execution Context, and Call Stack

### Syntax Parser

The JavaScript engine reads your code character by character, checking if it follows proper syntax rules.

### Execution Context

 [TOOL](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gdGVudGgoKSB7IH0KCmZ1bmN0aW9uIG5pbnRoKCkgeyB0ZW50aCgpIH0KCmZ1bmN0aW9uIGVpZ3RoKCkgeyBuaW50aCgpIH0KCmZ1bmN0aW9uIHNldmVudGgoKSB7IGVpZ3RoKCkgfQoKZnVuY3Rpb24gc2l4dGgoKSB7IHNldmVudGgoKSB9CgpmdW5jdGlvbiBmaWZ0aCgpIHsgc2l4dGgoKSB9CgpmdW5jdGlvbiBmb3VydGgoKSB7IGZpZnRoKCkgfQoKZnVuY3Rpb24gdGhpcmQoKSB7IGZvdXJ0aCgpIH0KCmZ1bmN0aW9uIHNlY29uZCgpIHsgdGhpcmQoKSB9CgpmdW5jdGlvbiBmaXJzdCgpIHsgc2Vjb25kKCkgfQoKZmlyc3QoKTs=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4=)

The environment where JavaScript code is executed. Contains:

- Variable Environment

- Scope Chain

- `this` keyword

```javascript
// Global Execution Context

let globalVar = "I'm global";

function someFunction() {
  // Function Execution Context

  let localVar = "I'm local";

  console.log(globalVar); // Can access global
}
```

### Call Stack

The mechanism JavaScript uses to keep track of function calls.

```javascript
function firstFunction() {
  console.log("First");

  secondFunction();
}

function secondFunction() {
  console.log("Second");

  thirdFunction();
}

function thirdFunction() {
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

var myVar = "Hello";

// How JavaScript sees it

var myVar;

console.log(myVar);

myVar = "Hello";

// Function hoisting

sayHello(); // Works!

function sayHello() {
  console.log("Hello");
}

// Function expression - NOT hoisted

sayGoodbye(); // Error!

var sayGoodbye = function () {
  console.log("Goodbye");
};
```

## 3. Scopes

### Function Scope

```javascript
function functionScope() {
  var functionScoped = "I'm function scoped";

  console.log(functionScoped); // Works
}

// console.log(functionScoped); // Error!
```

### Block Scope

```javascript
{
  let blockScoped = "I'm block scoped";

  const alsoBlockScoped = "Me too";

  var notBlockScoped = "I'm function scoped";
}

// console.log(blockScoped); // Error!

// console.log(alsoBlockScoped); // Error!

console.log(notBlockScoped); // Works!
```

### Lexical Scope & Scope Chain

```javascript
const global = "Global";

function outer() {
  const outer = "Outer";

  function inner() {
    const inner = "Inner";

    console.log(global); // Can access global

    console.log(outer); // Can access outer

    console.log(inner); // Can access inner
  }

  inner();
}
```

## 4. Closures

```javascript
function createCounter() {
  let count = 0; // This variable is "closed over"

  return {
    increment: function () {
      count++;

      return count;
    },

    decrement: function () {
      count--;

      return count;
    },

    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1

console.log(counter.increment()); // 2

console.log(counter.decrement()); // 1
```

## 5. Value Types and Reference Types

### Value Types (Primitives)

```javascript
// Primitives are copied by value

let a = 5;

let b = a;

a = 10;

console.log(b); // Still 5

// Primitive types

let string = "Hello";

let number = 42;

let boolean = true;

let nullValue = null;

let undefinedValue = undefined;

let symbol = Symbol("description");
```

### Reference Types

```javascript
// Objects are copied by reference

let obj1 = { name: "John" };

let obj2 = obj1;

obj1.name = "Jane";

console.log(obj2.name); // "Jane"

// Arrays are reference types

let arr1 = [1, 2, 3];

let arr2 = arr1;

arr1.push(4);

console.log(arr2); // [1, 2, 3, 4]
```

## 6. Implicit and Explicit Coercion

### Implicit Coercion

```javascript
// JavaScript automatically converts types

console.log("5" + 2); // "52" (string)

console.log("5" - 2); // 3 (number)

console.log(true + 1); // 2

console.log(false + 1); // 1

console.log("5" == 5); // true
```

### Explicit Coercion

```javascript
// Deliberately converting types

let str = String(123); // "123"

let num = Number("123"); // 123

let bool = Boolean(1); // true

// Using parseInt/parseFloat

let integer = parseInt("123.45"); // 123

let float = parseFloat("123.45"); // 123.45
```

## 7. IIFE (Immediately Invoked Function Expression)

```javascript
// Standard IIFE

(function () {
  let private = "I'm private";

  console.log("IIFE executed!");
})();

// IIFE with parameters

(function (name) {
  console.log(`Hello, ${name}!`);
})("John");

// Module Pattern using IIFE

const counter = (function () {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
    },

    getCount: function () {
      return count;
    },
  };
})();
```

## 8. Object.create and Object.assign

### Object.create

```javascript
const personProto = {
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};

const john = Object.create(personProto);

john.name = "John";

console.log(john.greet()); // "Hello, I'm John"
```

### Object.assign

```javascript
const target = { a: 1, b: 2 };

const source1 = { b: 3, c: 4 };

const source2 = { c: 5, d: 6 };

const result = Object.assign(target, source1, source2);

console.log(result); // { a: 1, b: 3, c: 5, d: 6 }

// Shallow clone

const clone = Object.assign({}, target);
```

## 9. Array and String Methods

### Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// Map

const doubled = numbers.map((num) => num * 2);

// [2, 4, 6, 8, 10]

// Filter

const evenNumbers = numbers.filter((num) => num % 2 === 0);

// [2, 4]

// Reduce

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// 15

// Other useful methods

const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit) => console.log(fruit));

fruits.includes("apple"); // true

fruits.find((fruit) => fruit.length > 5); // 'banana'
```

### String Methods

```javascript
const str = "Hello, World!";

str.toLowerCase(); // "hello, world!"

str.toUpperCase(); // "HELLO, WORLD!"

str.split(", "); // ["Hello", "World!"]

str.includes("World"); // true

str.replace("World", "JavaScript"); // "Hello, JavaScript!"
```

## 10. Pure Functions, Side Effects, and State Mutation

### Pure Functions

```javascript
// Pure function - same input always gives same output

function add(a, b) {
  return a + b;
}

// Impure function - has side effects

let total = 0;

function addToTotal(value) {
  total += value; // Side effect: modifying external state

  return total;
}
```

### State Mutation

```javascript
// Avoiding state mutation

const originalArray = [1, 2, 3];

// Bad - mutates original

originalArray.push(4);

// Good - creates new array

const newArray = [...originalArray, 4];

// Object mutation

const original = { name: "John" };

// Bad

original.name = "Jane";

// Good

const modified = { ...original, name: "Jane" };
```

## 11. Higher Order Functions

```javascript
// Function that takes a function as argument

function operate(func, a, b) {
  return func(a, b);
}

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

console.log(operate(add, 5, 3)); // 8

console.log(operate(multiply, 5, 3)); // 15

// Function that returns a function

function multiply(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiply(2);

const triple = multiply(3);

console.log(double(5)); // 10

console.log(triple(5)); // 15
```