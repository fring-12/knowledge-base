**Assignment-3 (callback, Promise, Fetch)**

1. Create a function `getData` that simulates an API call. Use `setTimeout` to delay calling a callback function by 2 seconds with a message like "Data received."
2. Create a promise called `isUserLoggedIn` that resolves with `"User is logged in"` if the user enters "yes" and rejects with `"User is not logged in"` if they enter "no."
3. Create a function `getNumber` that returns a promise. This promise should resolve with a random number between 1 and 10 after 1 second. Chain `.then()` to square the number and log the result.
4. Create a function `delayedMessage` that takes a message and a delay time in seconds as arguments. Use `setTimeout` to log the message after the specified delay.
5. Write a countdown function that counts down from a given number to zero, logging each number to the console every second.
6. Write a function `realTimeClock` that logs the current time every second. Use `clearInterval` to stop the clock after 10 seconds.
7. Perform a CRUD operatioon using fetch. html, js file is provided here. Please notice that: end point given the the js file, use that and do the operation. 

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD Operations with Fetch (User Profiles)</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 20px auto;
    }
    .user {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px 0;
    }
    input, button {
      display: block;
      width: 100%;
      margin-bottom: 10px;
      padding: 8px;
      font-size: 1em;
    }
    #createButton, #updateUser, #deleteUser {
      cursor: pointer;
      background-color: #28a745;
      color: white;
      border: none;
      padding: 10px;
      font-size: 1em;
    }
  </style>
</head>
<body>

  <h2>CRUD Operations with Fetch (User Profiles)</h2>

  <!-- Form to create a new user -->
  <div>
    <input type="text" id="firstName" placeholder="First Name">
    <input type="text" id="lastName" placeholder="Last Name">
    <input type="text" id="email" placeholder="Email">
    <button id="createButton" onclick="createUser()">Create User</button>
  </div>

  <!-- Input to specify the user ID for updating or deleting -->
  <div>
    <input type="number" id="userId" placeholder="User ID to update/delete">
    <button id="updateUser" onclick="updateUser()">Update User</button>
    <button id="deleteUser" onclick="deleteUser()">Delete User</button>
  </div>

  <!-- Container to display user profiles -->
  <div id="usersContainer"></div>

  <script src="script.js"></script>
</body>
</html>
```

## script.js

    const apiUrl = 'https://reqres.in/api/users';
    const usersContainer = document.getElementById('usersContainer');
    
    // READ: Fetch and display users
    async function getUsers() {
      // write your code here
    }
    
    // CREATE: Add a new user
    async function createUser() {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
    
      
     //write your codde here and give user data in displayUser function
      displayUser(user);
    }
    
    // UPDATE: Update an existing user by ID
    async function updateUser() {
      const userId = document.getElementById('userId').value;
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
    
        //write your codde here 
    }
    
    // DELETE: Delete a user by ID
    async function deleteUser() {
      const userId = document.getElementById('userId').value;
    
      //write your codde here 
    }
    
    // Helper: Display a user in the UI
    function displayUser(user) {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.id = `user-${user.id}`;
    
      userDiv.innerHTML = `
        <div>
          <h3>Name: ${user.first_name} ${user.last_name}</h3>
          <p>Email: ${user.email}</p>
        </div>
      `;
    
      usersContainer.appendChild(userDiv);
    }
    
    // Initial call to display users

 

## Submit Instruction:
 Just submit the html and js file in a zip file. you can do task all the task including 1-6 and 7 in one js file.
