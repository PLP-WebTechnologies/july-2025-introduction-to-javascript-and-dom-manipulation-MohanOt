//  Part 1: JavaScript Basics

// Variables + Conditionals
let age = 20;
let message;

if (age >= 18) {
  message = "You are an adult.";
} else {
  message = "You are a minor.";
}

console.log("Age check:", message);
document.getElementById("conditionalResult").textContent = message;

//  Part 2: Functions

// Function 1: Greeting
function greetUser(name) {
  let greeting = `Hello, ${name}! Welcome to JavaScript.`;
  console.log(greeting);
  document.getElementById("greetOutput").textContent = greeting;
}

// Function 2: Calculate Total
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total (5 items x $10):", calculateTotal(10, 5));

//  Part 3: Loops

function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear before adding

  // Loop example 1: For loop
  for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  // Loop example 2: While loop
  let count = 3;
  while (count > 0) {
    console.log("Countdown:", count);
    count--;
  }
}

//  Part 4: DOM Manipulation

// DOM Interaction 1: Toggle background color
document.getElementById("colorToggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("highlight");
});

// DOM Interaction 2: Add list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.querySelectorAll("#dynamicList li").length + 1);
  document.getElementById("dynamicList").appendChild(newItem);
});

// DOM Interaction 3: Modify content directly
document.getElementById("dynamicList").textContent = "Click 'Add List Item' to start adding...";
