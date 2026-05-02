let a = "Himanshu";
let b = "Anurag";
let c = "Ayushi"; // 3rd variable

let d = "Hello " + a + ", " + b + " and " + c + "!"; // Concatenation
console.log(d);  //Hello Himanshu, Anurag and Ayushi!

let e = `Hello ${a}, ${b} and ${c}!`; // Template literals
let f = `The length of a is ${a.length * 2}`; // Using template literals to get length
console.log(e); //Hello Himanshu, Anurag and Ayushi!
console.log(f); //The length of a is 16

function table(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        //console.log(num + " x " + i + " = " + (num * i)); // Using string concatenation
        result += `${num} x ${i} = ${num * i}\n`;
    }
    return result;
}
//console.log(table(6)); // Displays the multiplication table for 6


// function sum(a, b) {
//     return a + b;
// }

// let sum1 = sum(5, 10);
let sum = (x, y) => x + y; // Arrow function for addition
console.log("Sum of 15 and 20:", sum(15, 20)); // 35

let arr = [1, 2, 3, 4, 5, "Himanshu"];

// arr.filter(function(x) {
//     return typeof x === "number";
// }).map(function(y) {
//     return y * 2;
// }).forEach(function(abc) {
//     console.log("Element after * 2:", abc * 2);
// });

arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2)); // Filter out non-numbers, multiply by 2, and print
console.log(arr.find(x => x === "Himanshu")); //returns the first element which satisfies the condition(Himanshu is present)
console.log(arr.find(x => x === "Himanshu1")); //returns undefined if no element satisfies the condition(Himanshu1 is not present)
// Arrow function is represented by =>

//reduce()

const prices = [10, 20, 30, 40]; // tasks: find the total of all elements
// let s = 0;
// for (let i = 0; i < prices.length; i++) {
//     s += prices[i]; // s = s + prices[i]
// }

const total = prices.reduce((acc, curr) => { return acc + curr }, 0);
// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60
// 60 + 40 = 100
console.log(total); //100
// console.log("Sum:", s);

const fruitBasket = ['apple', 'banana', 'cherry', 'apple', 'apple', 'banana', 'pineapple']; // apple: 3, banana: 3, cherry: 1, pineapple: 1
const tally = fruitBasket.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {}); // intial value of acc is an empty object
console.log(tally); // {apple: 3, banana: 2, cherry: 1, pineapple: 1}

// function b(a, c) {
//     return a * c * 2;
// }
// function a(b, c) {
//     return b(a(1, 2), c);
// }