// // const container = document.getElementById("container-1");
// // const container2 = document.querySelector(".container");

// // // document.getElementById("image").setAttribute("src", "new.jpg");

// // // container.style.backgroundColor = "red";

// // const newElement = document.createElement("div");
// // newElement.innerText = "This is a new paragraph!";
// // document.body.appendChild(newElement);

// // console.log(container);
// // container2.innerHTML = "<h1>Hello my name is shubham</h1>";

// const container = document.getElementById("container");
// const newElement = document.createElement("div");
// newElement.innerText = "Inserted Element";
// document.body.insertBefore(newElement, container);

// function insertElement() {
//   const container = document.getElementById("container");
//   const newElement = document.createElement("div");
//   newElement.innerText = "Inserted Element";
//   document.body.insertBefore(newElement, container);
// }

const parent = document.getElementById("todo-input");

const btn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

btn.addEventListener("click", () => {
  const taskInput = document.getElementById("todo-input");
  const task = taskInput.value;

  const newTask = document.createElement("li");
  newTask.id = task;
  newTask.innerText = task;
  newTask.addEventListener("click", () => {
    newTask.remove();
  });
  list.appendChild(newTask);

  console.log(task);
});

// element.remove();

console.log(nextSibling);
