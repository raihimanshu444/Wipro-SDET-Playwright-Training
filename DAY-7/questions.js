// *************Strings + Template Literals************
//Question 1: Create a program that:
//Converts the string to uppercase
//Finds total length
//Extracts first 4 characters
//Checks if "Script" exists
//Replaces "Java" with "Type"
//Prints everything using template literals

let course="javascript";
let upper=course.toUpperCase();
let len=course.length;
let first4=course.substring(0,4);//course.slice(0,4) //last excluded
let script=course.includes("script");
let replace=course.replace("java","type");

console.log(`
    Course Name:${course}
    UpperCase:${upper}
    Lenght:${len}
    First 4 Characters:${first4}
    Contains Script?:${script}
    Replaced String:${replace}
`)


// *************Operators + Conditionals*************

// Question 2: Create a program that:
// Checks if a student passed or failed
// Calculates percentage
// Checks if marks are equal using == and ===
// Finds remainder using %
// Uses switch for grade output

let marks=90;
let total=100;
let bonus="90";

let percentage=(marks/total)*100;  //type casting automatically done here "90" became 90
console.log(`Percentage: ${percentage}`);

console.log(marks == bonus); //true
console.log(marks === bonus);//false

if(marks>=60){
    console.log("Pass");  //pass
}
else{
    console.log("Fail");
}

let grade;
if (marks >= 90) {
    grade = "A";
} else if (marks >= 70) {
    grade = "B";
} else if (marks >= 50) {
    grade = "C";
} else {
    grade = "D";
}

switch(grade){
    case "A":
        console.log("Excellent");  //excellent
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Need Improvement");
        break;
    default:
        console.log("Invalid Grade");
        break;
}


// *************Functions + Scope + Arrow Functions************
// Question 3: Create a program that:
// Uses a normal function to add two numbers
// Uses an arrow function to multiply numbers
// Demonstrates block scope using let
// Demonstrates function scope using var
// Returns values from functions

let a=10;
let b=20;
function add(a,b){
    return a+b;
}

let multiply=(a,b)=>a*b;

console.log("Addition",add(a,b));  //30
console.log("Multiplication",multiply(a,b));  //200

//var-->Accessible inside and outside the block
//let-->Accessible inside the block only

{
    let message = "Inside Block";
    var data = "Accessible Outside";

    console.log(message); //Inside Block
}

console.log(data); //Accessible Outside 

//console.log(message); //Error message is not defined

// *************Loops + Array Basics************
// Question 4: Create a program that:
// Loops through an array
// Adds a new element using push()
// Removes first element using shift()
// Removes one element using splice()
// Checks if an item exists using includes()
// Counts total numeric values

let items=["Himanshu","pen",20,30,"SDET"];

items.push("Laptop"); //["Himanshu", "pen", 20, 30, "SDET", "Laptop"] add to last
items.shift(); //["pen", 20, 30, "SDET", "Laptop"]  removes first element 
items.unshift("Book"); //["Book", "pen", 20, 30, "SDET", "Laptop"] add to first 
items.splice(1,2); //["Book", 30, "SDET", "Laptop"]  removes 2 elements from index 1
console.log(items); //[ 'Book', 30, 'SDET', 'Laptop' ]

console.log(items.includes("pen")); //false

let count=0;
for(i=0;i<items.length;i++){
    if(typeof items[i] ==='number'){
        count++;
    }
    console.log(items[i]); //Book,30,SDET,Laptop
}
console.log("Total Numeric Values:",count); //1

// *************filter() + map() + Chaining*************
// Question 5: Create a program that:
// Filters only products with price greater than 500
// Applies 10% discount using map()
// Uses method chaining
// Extracts only product names
// Calculates final discounted prices

let products = [
    { name: "Mouse", price: 400 },
    { name: "Keyboard", price: 800 },
    { name: "Monitor", price: 1200 },
    { name: "Pen", price: 50 }
];
//method chaining
let result=products
.filter((items)=>items.price>500)  //Filter out products with price less than 500
.map(items=>{ //Applies 10% discount using map()
    return{
        name:items.name,
        finalPrice:items.price-(items.price*0.10)
    };
});
//Extracts only product names and calculated final discounted prices
console.log(result); //[ { name: 'Keyboard', price: 720 }, { name: 'Monitor', price: 1080 } ]

let names=result.map((items)=>items.name);
console.log("Names:",names);  //Names: [ 'Keyboard', 'Monitor' ]