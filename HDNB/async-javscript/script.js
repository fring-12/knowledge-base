// Synchronous function - blocks the main thread
// function syncFunction() {
// 	console.log("Starting synchronous task...");
// 	// Simulate heavy computation
// 	const startTime = new Date().getTime();
// 	while (new Date().getTime() - startTime < 2000) {} // Blocks for 2 seconds
// 	console.log("Synchronous task complete.");
// }

// // Asynchronous function with Promise
// function asyncTaskWithPromise() {
// 	return new Promise((resolve) => {
// 		console.log("Starting asynchronous task with promise...");
// 		setTimeout(() => {
// 			console.log("Async operation completed");
// 			resolve("Asynchronous task complete.");
// 		}, 2000); // 2 second delay
// 	});
// }

// // Demonstrating synchronous behavior
// console.log("1. Calling synchronous function:");
// syncFunction();
// console.log("2. Synchronous function finished, moving to next line.\n");

// // Demonstrating asynchronous behavior
// console.log("3. Calling asynchronous function:");
// asyncTaskWithPromise().then((result) => console.log("4.", result));
// console.log(
// 	"5. This line runs immediately while async function is still processing."
// );

// ############################################################

// // setTimeOut and time interval
// console.log("Starting...");

// setTimeout(() => {
// 	console.log("This message is delayed by 2 seconds.");
// }, 2000);

// console.log("Ending...");

// function greet(name, message) {
// 	console.log(`${message}, ${name}!`);
// }

// // Using setTimeout
// setTimeout(greet, 3000, "Alice", "Hello");

// // Using setInterval
// setInterval(greet, 1000, "Bob", "How are you?");

// ############################################################

// callbacks
// synchronous callbacks
// function syncGreet(name, callback) {
// 	console.log(`Hello, ${name}`);
// 	callback(); // Runs the callback immediately
// }

// function sayGoodbye() {
// 	console.log("Goodbye!");
// }

// syncGreet("Alice", sayGoodbye);
// console.log("This line runs after the synchronous callback.");

// // async callbacks

// function asyncGreet(name, callback) {
// 	console.log(`Hello, ${name}`);
// 	setTimeout(callback, 2000); // Runs the callback after 2 seconds
// }

// function sayGoodbyeAsync() {
// 	console.log("Goodbye!");
// }

// asyncGreet("Bob", sayGoodbyeAsync);
// console.log("This line runs before the asynchronous callback.");

// ############################################################

// callback hell

// function fetchUser(userId, callback) {
// 	setTimeout(() => {
// 		console.log("Fetched user");
// 		callback(userId);
// 	}, 1000);
// }

// function fetchPosts(userId, callback) {
// 	setTimeout(() => {
// 		console.log("Fetched posts for user " + userId);
// 		callback(userId);
// 	}, 1000);
// }

// function fetchComments(postId, callback) {
// 	setTimeout(() => {
// 		console.log("Fetched comments for post " + postId);
// 		callback();
// 	}, 1000);
// }

// // Callback Hell Example
// fetchUser(1, (userId) => {
// 	fetchPosts(userId, (postId) => {
// 		fetchComments(postId, () => {
// 			console.log("Fetched all comments");
// 		});
// 	});
// });

// ############################################################

// promises

// // Promise to get tacos
// function getTacos() {
// 	return new Promise((resolve, reject) => {
// 		console.log("Roommate goes to get tacos...");

// 		setTimeout(() => {
// 			const foodTruckAvailable = true; // Simulate food truck availability

// 			if (foodTruckAvailable) {
// 				resolve("Tacos are on the way!");
// 			} else {
// 				reject("Food truck is out of tacos. Let's cook pasta.");
// 			}
// 		}, 3000); // Simulate 3 seconds wait
// 	});
// }

// // Start preparing soup
// console.log("Preparing soup...");

// function prepareTable() {
// 	console.log("Setting up the dining table...");
// }

// function preparePasta() {
// 	console.log("Cooking pasta instead.");
// }

// // Handle taco Promise
// getTacos()
// 	.then((message) => {
// 		console.log(message); // If tacos are on the way, prepare the table
// 		prepareTable();
// 	})
// 	.catch((error) => {
// 		console.log(error); // If food truck is out of tacos, start cooking pasta
// 		preparePasta();
// 	});

// console.log("Soup preparation ongoing...");

// ############################################################

// chainig promises

// function getIngredients() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			console.log("Ingredients gathered.");
// 			resolve("Ingredients ready");
// 		}, 1000);
// 	});
// }

// function prepareMeal(ingredients) {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			console.log("Meal prepared using", ingredients);
// 			resolve("Meal is ready to serve");
// 		}, 1000);
// 	});
// }

// function serveMeal(meal) {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			console.log(meal);
// 			console.log("Meal is served!");
// 			resolve();
// 		}, 1000);
// 	});
// }

// // Chaining promises
// getIngredients()
// 	.then((ingredients) => prepareMeal(ingredients))
// 	.then((meal) => serveMeal(meal))
// 	.catch((error) => console.error("Error:", error));

// ############################################################

// Promise.all

// async function fetchData() {
// 	console.log("Starting data fetch...");

// 	// This await will "pause" fetchData, but not the whole program
// 	await new Promise((resolve) => setTimeout(resolve, 2000));

// 	console.log("Data fetch complete.");
// }

// console.log("Before fetching data");
// fetchData();
// console.log("After starting data fetch, but not waiting for it to complete.");

// // Example async functions
// function fetchUser() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve("User data"), 1000);
// 	});
// }

// function fetchPosts() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve("Posts data"), 2000);
// 	});
// }

// function fetchComments() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve("Comments data"), 1500);
// 	});
// }

// // Using Promise.all to wait for all promises to resolve
// Promise.all([fetchUser(), fetchPosts(), fetchComments()])
// 	.then((results) => {
// 		console.log("All data fetched:");
// 		console.log("User:", results[0]);
// 		console.log("Posts:", results[1]);
// 		console.log("Comments:", results[2]);
// 	})
// 	.catch((error) => {
// 		console.error("Error fetching data:", error);
// 	});

// ############################################################

// async await
// async function fetchData() {
// 	console.log("Starting data fetch...");

// 	// This await will "pause" fetchData, but not the whole program
// 	await new Promise((resolve) => setTimeout(resolve, 2000));

// 	console.log("Data fetch complete.");
// }

// console.log("Before fetching data");
// fetchData();
// console.log("After starting data fetch, but not waiting for it to complete.");

// ############################################################

// async await with fetch

// GET example

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// 	.then((response) => response.json())
// 	.then((data) => console.log("Read:", data))
// 	.catch((error) => console.error("Error:", error));

// POST example
// fetch("https://jsonplaceholder.typicode.com/posts", {
// 	method: "POST",
// 	headers: { "Content-Type": "application/json" },
// 	body: JSON.stringify({ title: "foo hdnb", body: "bar hdnb", userId: 1 })
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log("Created:", data))
// 	.catch((error) => console.error("Error:", error));

// // PUT example (Update item with id 1)
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
// 	method: "PUT",
// 	headers: { "Content-Type": "application/json" },
// 	body: JSON.stringify({
// 		title: "updated title",
// 		body: "updated body",
// 		userId: 1
// 	})
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log("Updated:", data))
// 	.catch((error) => console.error("Error:", error));

// // DELETE example (Delete item with id 1)
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
// 	method: "DELETE"
// })
// 	.then(() => console.log("Deleted"))
// 	.catch((error) => console.error("Error:", error));

// ############################################################

// async function createPost() {
// 	const title = document.getElementById("title").value;
// 	const body = document.getElementById("body").value;
// 	const userId = document.getElementById("userId").value;

// 	try {
// 		const response = await fetch(
// 			"https://jsonplaceholder.typicode.com/posts",
// 			{
// 				method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify({ title, body, userId })
// 			}
// 		);
// 		const data = await response.json();
// 		displayPosts([data]);
// 	} catch (error) {
// 		console.error("Error:", error);
// 	}
// }

// async function readPost() {
// 	const postId = document.getElementById("postId").value;
// 	const url = postId
// 		? `https://jsonplaceholder.typicode.com/posts/${postId}`
// 		: "https://jsonplaceholder.typicode.com/posts";

// 	try {
// 		const response = await fetch(url);
// 		const data = await response.json();
// 		displayPosts(Array.isArray(data) ? data : [data]);
// 	} catch (error) {
// 		console.error("Error:", error);
// 	}
// }

// async function updatePost() {
// 	const postId = document.getElementById("postId").value;
// 	const title = document.getElementById("title").value;
// 	const body = document.getElementById("body").value;
// 	const userId = document.getElementById("userId").value;

// 	if (!postId) {
// 		alert("Please enter a Post ID to update");
// 		return;
// 	}

// 	try {
// 		const response = await fetch(
// 			`https://jsonplaceholder.typicode.com/posts/${postId}`,
// 			{
// 				method: "PUT",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify({ title, body, userId })
// 			}
// 		);
// 		const data = await response.json();
// 		displayPosts([data]);
// 	} catch (error) {
// 		console.error("Error:", error);
// 	}
// }

// async function deletePost() {
// 	const postId = document.getElementById("postId").value;

// 	if (!postId) {
// 		alert("Please enter a Post ID to delete");
// 		return;
// 	}

// 	try {
// 		await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
// 			method: "DELETE"
// 		});
// 		document.getElementById("posts").innerHTML =
// 			"<p>Post deleted successfully!</p>";
// 	} catch (error) {
// 		console.error("Error:", error);
// 	}
// }

// function displayPosts(posts) {
// 	const postsDiv = document.getElementById("posts");
// 	postsDiv.innerHTML = posts
// 		.map(
// 			(post) => `
//         <div class="post-item">
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
//             <small>Post ID: ${post.id}, User ID: ${post.userId}</small>
//         </div>
//     `
// 		)
// 		.join("");
// }
