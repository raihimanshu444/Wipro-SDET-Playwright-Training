//1-->The Swapper: Create two variables, a and b, and assign them numbers. Write a few lines of code to swap their values so that a gets b's value and vice-versa.

let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log("a:", a); // 10
console.log("b:", b); // 5

//2--> Type Checker: Write a function that takes one input and console.log's a message saying "This is a number" or "This is a string" based on the data type provided.

function checkType(value) {
    if (typeof value === "number") {
        console.log("This is a number");
    } else if (typeof value === "string") {
        console.log("This is a string");
    } else {
        console.log("Other type");
    }
}

// Test cases
checkType(10);        // This is a number
checkType("Hello");   // This is a string
checkType(true);      // Other type

//3--> Initials Creator: Given a variable let fullName = "John Doe", write code to extract the first letter of the first name and the first letter of the last name to create the string "JD".

let fullName = "John Doe";
let initials = fullName[0] + fullName[fullName.indexOf(" ") + 1];

console.log(initials); // JD

//4--> The Cleaner: Given the string let messy = " Javascript is fun ", write a single line of code that removes the extra spaces at the start/end and changes all the letters to lowercase.

let messy = " Javascript is fun ";
let cleanText = messy.trim().toLowerCase();
console.log(cleanText); // javascript is fun

//5--> The Grocery List: Create an array called cart with three items. Write code to add "Milk" to the end, "Eggs" to the beginning, and then remove the very last item you just added.

let cart = ["Bread", "Butter", "Cheese"];

cart.push("Milk");  //add to last

// Add "Eggs" at beginning 
cart = ["Eggs", ...cart];

// Remove last item
cart.pop();

console.log(cart);  //[ 'Eggs', 'Bread', 'Butter', 'Cheese' ]

//6-->  Value Finder: Given let numbers = [10, 20, 30, 40, 50], write a line of code that checks if the number 30 exists in the array (returning true or false) and another line to find the index of the number 50.

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30)); // true
console.log(numbers.indexOf(50));  // 4