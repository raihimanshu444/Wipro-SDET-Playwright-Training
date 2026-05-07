function person(name) {          //constructor function
    this.name = name;
}
 
person.prototype.sayHi = function() { //prototype is used to add methods to constructor functions sayHi function is created only once in memory and shared by all of them 
    console.log('Hello ' + this.name); // 
}
const me = new person("Himanshu");
const you = new person("You");
me.sayHi();  // Hello Himanshu
you.sayHi(); // Hello You
console.log(Object.getPrototypeOf(me) === person.prototype) // true
console.log(me.sayHi === you.sayHi) // true   it proves that both me and you are using the exact same function in memory.

//Callbacks

function greetUser(name, callback) {
    console.log('Hello ' + name);
    callback();
}
 
function sayGoodbye() {
    console.log('GoodBye!');  //Hello Himanshu GoodBye!
}
 
greetUser('Himanshu', sayGoodbye);
 
function doforeach(e) {
    console.log(e);
}
 
const doeach = e => console.log(e);
[1, 2, 3].forEach(doeach); // callback | forEach is a higher order function (HOF)
[1, 2, 3].forEach(e => console.log(e)); // anonymous callback it is used when we want to use the function only once 
 
// Stack --> box | | --> 1 | 2 | 3 --> 3 | 2 | 1 (LIFO)  | Stack keeps track of function calls and primitive values
// Heap --> box | | --> doeach | sayGoodbye | greetUser  | Heap stores objects references and functions references
 
 
let age = 25; // number --> Stack
let name = "Himanshu"; // string --> Stack
 
let user = { // object --> Heap
    name: "Himanshu",
    age: 25
}
 
// Primitve copy (Stack)
let x = 5; // primitive
let y = x; // copy of value of x is stored in y
 y=10; 
 console.log(x); // 5

// Refrence copy (Heap)
let obj1 = { name: "Himanshu" }; // heap
let obj2 = obj1; 

obj2.name = "Arush";
console.log(obj1.name); // obj1 and obj2 are referencing the same object in heap, so change in obj2 reflects in obj1   --> Arush

//Spread operator
const a = [1, 2, 3];
const b = [3, 4, 5];
 
let c = [...a, ...b, 10];
let d = ["Himanshu", ...a, ...b, 10];

console.log(c); // [1, 2, 3, 3, 4, 5, 10]
console.log(d); // ["Himanshu", 1, 2, 3, 3, 4, 5, 10]
 
const obj = {
    name: "Himanshu"
}
const obj3 = {
    age: 25
}
 
const obj4 = {...obj, ...obj3};
console.log(obj4)  // {"name": "Himanshu", "age": 25}

let arr=[5,6,7]
let result=[];
for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
}
for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
}
console.log(result) // [5, 6, 7, 5, 6, 7]

arr.push(8);
console.log(arr); // [5, 6, 7, 8]
arr.pop();
console.log(arr); // [5, 6, 7]
