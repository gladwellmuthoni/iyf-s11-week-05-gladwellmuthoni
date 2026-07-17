//LESSON 9
// DOM Selection practice
// 1. The h1 element
const h1 = document.querySelector("h1");
console.log("h1:", h1);

// 2. All elements with class "content"
const allContent = document.querySelectorAll(".content");
console.log("All content elements:", allContent);

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("Contact form:", contactForm);

// 4. The email input
const emailInput = document.querySelector("#email");
console.log("Email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav li");
console.log("All nav list items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First nav link:", firstNavLink);

// 7. The last paragraph
const paragraphs = document.querySelectorAll("p");
const lastParagraph = paragraphs[paragraphs.length - 1];
console.log("Last paragraph:", lastParagraph);

//DOM navigation practice
// 1. Select the header, then navigate to the nav inside it
const header = document.querySelector("header");
const navInsideHeader = header.querySelector("nav");
// Alternatively, using navigation properties:
// const navInsideHeader = header.firstElementChild.nextElementSibling;
console.log("Nav inside header:", navInsideHeader);

// 2. Select the first nav-link, then get its parent li
const FirstNavLink = document.querySelector(".nav-link");
const parentLi = FirstNavLink.parentElement;
console.log("Parent li of first link:", parentLi);

// 3. Select the article, then get its next sibling (section)
const article = document.querySelector("article");
const nextSection = article.nextElementSibling;
console.log("Next sibling of article:", nextSection);

// 4. Select the ul, then get all its child li elements
const ul = document.querySelector(".nav-list");
const listItems = ul.children;
console.log("Child li elements of ul:", listItems);

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const body = footer.parentElement;
console.log("Body reached from footer:", body);

//Modifying text and HTML practice
// Change the main header text
const h2 = document.querySelector("h2");
h2.textContent = "Welcome to My DOM Workshop";

// Update the article content using innerHTML
const article = document.querySelector("article");
article.innerHTML = `
    <h2>Dynamic Title</h2>
    <p>This paragraph was injected using <strong>innerHTML</strong>.</p>
`;

//working with attributes practice
// Update all nav links to go to a new URL
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.setAttribute("href", "https://google.com");
    link.setAttribute("target", "_blank");
});

// Accessing and setting custom data attributes
const firstLink = document.querySelector(".nav-link");
console.log("Current ID:", firstLink.dataset.id);
firstLink.dataset.status = "active"; // Adds data-status="active" to the element

//Styling elements practice
// Changing styles directly
const formSection = document.querySelector("section");
formSection.style.border = "2px solid blue";
formSection.style.marginTop = "20px";

// Using Object.assign for multiple styles
const body = document.querySelector("body");
Object.assign(body.style, {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "blue"
});

// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
const article = document.querySelector("article");
article.appendChild(newParagraph);  // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);  // Add before first p

// Modern insertion methods
article.prepend(newParagraph);         // First child
article.append(newParagraph);          // Last child
firstParagraph.before(newParagraph);   // Before sibling
firstParagraph.after(newParagraph);    // After sibling

// Remove an element
const footer = document.querySelector("footer");
footer.remove();

// Remove child
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

// Clear all children
article.innerHTML = "";  // Simple but rebuilds DOM
// OR
while (article.firstChild) {
    article.removeChild(article.firstChild);
}
//cloning elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);


/**
 * Adds a new navigation item to the .nav-list
 * @param {string} text - The display text of the link
 * @param {string} href - The URL for the link
 */
function addNavItem(text, href) {
    // 1. Select the container
    const navList = document.querySelector(".nav-list");

    // 2. Create the list item (li)
    const newLi = document.createElement("li");

    // 3. Create the link (a)
    const newLink = document.createElement("a");
    newLink.textContent = text;
    newLink.href = href;
    newLink.className = "nav-link";

    // 4. Combine them
    newLi.appendChild(newLink);

    // 5. Add to the list
    navList.append(newLi);
}

// Testing the function
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

//LESSON 10
//Task 10.1
//Exercise 1:basic events
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);

//Excersise 2:Event types
// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

// Keyboard events
input.addEventListener("keydown", handler);
input.addEventListener("keyup", handler);
input.addEventListener("keypress", handler);  // Deprecated

// Form events
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("input", handler);     // Real-time changes
input.addEventListener("change", handler);    // On blur after change

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);
//Task 10.1:Event listeners and handlers 
// 1. Setup the UI
const main = document.querySelector("main");

// Create display
const countDisplay = document.createElement("h2");
countDisplay.textContent = "Count: 0";
main.prepend(countDisplay);

// Create container for buttons
const btnContainer = document.createElement("div");
main.insertBefore(btnContainer, countDisplay.nextSibling);

// Create buttons
const addButton = document.createElement("button");
addButton.textContent = "+";

const subButton = document.createElement("button");
subButton.textContent = "-";

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

btnContainer.append(subButton, resetButton, addButton);

// 2. Logic
let count = 0;

function updateDisplay() {
    countDisplay.textContent = `Count: ${count}`;
}

// Event Listeners
addButton.addEventListener("click", () => {
    count++;
    updateDisplay();
});

subButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});
//Task 10.2
//Exersice:Using event properties.
document.addEventListener("click", function(event) {
    // The element that was clicked
    console.log("Target:", event.target);
    
    // The element the listener is attached to
    console.log("Current Target:", event.currentTarget);
    
    // Event type
    console.log("Type:", event.type);
    
    // Mouse position
    console.log("Position:", event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop propagation (bubbling)
    event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);       // "a", "Enter", "Escape"
    console.log("Code:", event.code);     // "KeyA", "Enter", "Escape"
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});


//keyboard shortcuts.
document.addEventListener("keydown", (event) => {
    // 1. Ctrl + S: Prevent save dialog and alert "Saved!"
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        alert("Saved!");
    }

    // 2. Escape: Clear all form inputs
    if (event.key === 'Escape') {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
        console.log("Form cleared.");
    }

    // 3. Ctrl + Enter: Submit the contact form
    if (event.ctrlKey && event.key === 'Enter') {
        const form = document.querySelector('#contact-form');
        if (form) {
            form.submit();
            console.log("Form submitted!");
        }
    }
});

//task 10.3
//exersice 1:understanding bubbling.
<div id="grandparent">
    Grandparent
    <div id="parent">
        Parent
        <div id="child">
            Child
        </div>
    </div>
</div>

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Click on Child - what order do the logs appear?
// Answer: Child → Parent → Grandparent (bubbling up)

//exersice 2:event delegation.
// BAD: Adding listeners to each item
const items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
// Problem: New items won't have the listener!

// GOOD: Delegate to parent
document.querySelector("ul").addEventListener("click", function(event) {
    // Check if clicked element is an li
    if (event.target.matches("li")) {
        handleClick(event);
    }
    
    // Or check for a class
    if (event.target.classList.contains("item")) {
        handleClick(event);
    }
});

//Delegated task list.
const taskList = document.querySelector(".nav-list"); // Reusing your nav-list for this demo

// The single Event Listener (Delegation)
taskList.addEventListener("click", (event) => {
    // 1. Handle Toggling Completed Class
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("highlight"); // Uses your existing .highlight class
    }

    // 2. Handle Deleting (assuming we have a delete button inside the li)
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});

// Helper to add new tasks dynamically
function addTask(text) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);
}

// Test it
addTask("Learn Event Delegation");
addTask("Master the DOM");

//task 10.4: form handling.
//excersice:complete form validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Real-time validation
nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop form from submitting
    
    // Get all form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log("Form data:", data);
    
    // Validate all fields
    if (isValid(data)) {
        // Submit via fetch or show success
        showSuccess("Form submitted successfully!");
        form.reset();
    }
});

function showError(input, message) {
    // Add error styling and message
    input.classList.add("error");
    // Create or update error message element
}

function clearError(input) {
    input.classList.remove("error");
    // Remove error message
}