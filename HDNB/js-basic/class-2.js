// 1. syntax parser, execution context,  lexical enviuronment

// syntax parser
// A program that reads your code and determinds its valid

// lexixal environment
// where something sets phycically in the code you write

// execution context
// a wrapper that to help manage the code where it is running

// global context = this

// function b() {
// 	console.log("called b!");
// }

// b();

// console.log(a);

// var a = "hello world!";

// console.log(a);

// stack

// function b() {}

// function a() {
// 	b();
// }

// variable env

// function b() {
// 	var myvar;
// 	console.log(myvar);
// }

// function a() {
// 	var myvar = 2;
// 	console.log(myvar);
// 	b();
// }

// var myvar = 1;
// console.log(myvar);
// a();
// console.log(myvar);

// scope chain
// function b() {
// 	console.log(myvar);
// }

// function a() {
// 	var myvar = 2;
// 	b();
// }

// var myvar = 1;

// a();

// a();

// let name = "john";

// function first() {
// 	let a = "hello!";
// 	second();
// 	let x = a + name;
// }

// function second() {
// 	let b = "hi!";
// 	third();
// 	let z = b + name;
// }

// function third() {
// 	let c = "hi!";
// 	let z = c + name;
// }

// console.log(first("fring"));

let x = "apple";
let y = x;

x = "dim";

console.log("y =>", y);

let a = { title: "apple" };
let b = a;

a.title = "orange";

console.log("b =>", b);
