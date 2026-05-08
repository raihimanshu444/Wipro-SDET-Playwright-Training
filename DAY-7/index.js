//Hoisting

//Variable Hoisting
//for var --> declaration moves up ,value does NOT move up
console.log(greet);  //undefined
var greet = "Hello, World!";   
console.log(greet);  //Hello, World!

//for let and const --> declaration and initialization stays at same line
// console.log(a);   //Temporal Dead Zone (TDZ) Refernce Error
// let a=10;
// console.log(a);     //10

//Function Hoisting

//Declaration moves up and initialization moves up
sayHi();  // Hello, World!
function sayHi() {
    console.log('Hello, World!');
}


sayHi(); //Type Error
var sayHi = function() { // 
   console.log("Hi");
}
 
 
// Every object --> Object 
const car = {
    brand: "Tesla",
    start: () => console.log("VroomVroom") 
}
 
 
function start() {
    console.log("VroomVroom")
}
 
const c1 = new start();  // VroomVroom --> c1
const c2 = new start();  // VroomVroom --> c2
 
start.prototype.stop = function() {
    console.log("Stop");
}
c1.stop();  //Stop
c2.stop();  //Stop
 
 
const animal = { eats: true };
const rabbit = Object.create(animal); // creates a new object rabbit with prototype animal
rabbit.carrot = () => console.log("He is eating carrot");
console.log(rabbit.eats); // inherted from animal --> true
console.log(rabbit.hasOwnProperty('eats')) //false
console.log(rabbit.hasOwnProperty('carrot')) //true
console.log(rabbit.toString()) //toString is inherited from Object.prototype --> [object Object]
 
const arr = [1, 2, 3, -1];
(arr.reverse()); // [-1, 3, 2, 1]
(arr.sort());  // [-1, 1, 2, 3]
for(let e of arr) { 
    console.log(e);
}
 