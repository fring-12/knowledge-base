# Mastering DOM Manipulation

## 1. Introduction to the DOM
- **Definition**: The DOM (Document Object Model) is a tree-like structure representing the content of a webpage. It allows JavaScript to interact with and manipulate the webpage dynamically.
- **Structure**: HTML is converted into a tree of nodes.
  ```html
  <html>
    <body>
      <h1>Hello, World!</h1>
    </body>
  </html>

Visualized as:

    Document
    └── html
        └── body
            └── h1
                └── "Hello, World!"

## 2. Accessing DOM Elements

-   **Common Methods**:
    -   `document.getElementById()`
    -   `document.querySelector()`
    -   `document.querySelectorAll()`
    -   `document.getElementsByClassName()`
    -   `document.getElementsByTagName()`

```html
<div id="container" class="box">Hello</div>
```

    const byId = document.getElementById("container");
    const byClass = document.querySelector(".box");
    const byTag = document.querySelectorAll("div");
    
    console.log(byId, byClass, byTag);

## 3. Modifying DOM Content

### Changing Text and HTML
```html
<p id="text">Old Text</p>
<script>
  document.getElementById("text").innerText = "New Text";
  document.getElementById("text").innerHTML = "<b>Bold Text</b>";
</script>
```

### Changing Attributes


```html
<img id="image" src="old.jpg">
<script> document.getElementById("image").setAttribute("src", "new.jpg"); </script>`
```

Changing Styles

    const box = document.getElementById("container");
    box.style.color = "blue";
    box.style.fontSize = "20px";

## 4. Creating and Inserting Elements

### Creating Elements

    const newElement = document.createElement("p");
    newElement.innerText = "This is a new paragraph!";
    document.body.appendChild(newElement);

**Inserting Before or After**

    const container = document.getElementById("container");
    const newElement = document.createElement("div");
    newElement.innerText = "Inserted Element";
    document.body.insertBefore(newElement, container);


## 5. Event Handling

### Adding Events

    const button = document.getElementById("btn");
    button.addEventListener("click", function () {
      alert("Button clicked!");
    });

### Removing Events

    const handleClick = () => console.log("Button clicked!");
    button.removeEventListener("click", handleClick);

Here’s the lecture content formatted in Markdown so you can copy it directly into an `.md` file:

markdown

Copy code

`# Mastering DOM Manipulation

## 1. Introduction to the DOM
- **Definition**: The DOM (Document Object Model) is a tree-like structure representing the content of a webpage. It allows JavaScript to interact with and manipulate the webpage dynamically.
- **Structure**: HTML is converted into a tree of nodes.
  ```html
  <html>
    <body>
      <h1>Hello, World!</h1>
    </body>
  </html>` 

Visualized as:

css

Copy code

`Document
└── html
    └── body
        └── h1
            └── "Hello, World!"` 

----------

## 2. Accessing DOM Elements

-   **Common Methods**:
    -   `document.getElementById()`
    -   `document.querySelector()`
    -   `document.querySelectorAll()`
    -   `document.getElementsByClassName()`
    -   `document.getElementsByTagName()`

### Example

html

Copy code

`<div id="container" class="box">Hello</div>` 

javascript

Copy code

`const byId = document.getElementById("container");
const byClass = document.querySelector(".box");
const byTag = document.querySelectorAll("div");

console.log(byId, byClass, byTag);` 

----------

## 3. Modifying DOM Content

### Changing Text and HTML

html

Copy code

`<p id="text">Old Text</p>
<script> document.getElementById("text").innerText = "New Text";
  document.getElementById("text").innerHTML = "<b>Bold Text</b>"; </script>` 

### Changing Attributes

html

Copy code

`<img id="image" src="old.jpg">
<script> document.getElementById("image").setAttribute("src", "new.jpg"); </script>` 

### Changing Styles

javascript

Copy code

`const box = document.getElementById("container");
box.style.color = "blue";
box.style.fontSize = "20px";` 

----------

## 4. Creating and Inserting Elements

### Creating Elements

javascript

Copy code

`const newElement = document.createElement("p");
newElement.innerText = "This is a new paragraph!";
document.body.appendChild(newElement);` 

### Inserting Before or After

javascript

Copy code

`const container = document.getElementById("container");
const newElement = document.createElement("div");
newElement.innerText = "Inserted Element";
document.body.insertBefore(newElement, container);` 

----------

## 5. Event Handling

### Adding Events

javascript

Copy code

`const button = document.getElementById("btn");
button.addEventListener("click", function () {
  alert("Button clicked!");
});` 

### Removing Events

    const handleClick = () => console.log("Button clicked!");
    button.removeEventListener("click", handleClick);


## 6. Traversing the DOM

### Parent, Child, and Sibling Navigation

    const parent = document.getElementById("child").parentNode;
    const children = document.getElementById("parent").children;
    const nextSibling = document.getElementById("child").nextSibling;
    
    console.log(parent, children, nextSibling);

## 7. Deleting Elements

### Remove an Element

    const element = document.getElementById("toRemove");
    element.remove();

### Clear All Children

    const container = document.getElementById("container");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }


## 8. Advanced Topics

### Working with Classes

    const element = document.getElementById("example");
    element.classList.add("new-class");
    element.classList.remove("old-class");
    element.classList.toggle("toggle-class");


## Practical Application: To-Do List App


Build a **To-Do List App** where users can:

1.  Add tasks.
2.  View the tasks dynamically.
3.  Delete tasks.

### HTML
```html
<input id="todo-input" type="text" placeholder="Enter task">
<button id="add-btn">Add Task</button>
<ul id="todo-list"></ul>
```

### Javascript

    document.getElementById("add-btn").addEventListener("click", function () {
      const taskInput = document.getElementById("todo-input");
      const task = taskInput.value;
    
      if (task) {
        const listItem = document.createElement("li");
        listItem.innerText = task;
    
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => listItem.remove());
    
        listItem.appendChild(deleteBtn);
        document.getElementById("todo-list").appendChild(listItem);
    
        taskInput.value = ""; // Clear input
      }
    });


