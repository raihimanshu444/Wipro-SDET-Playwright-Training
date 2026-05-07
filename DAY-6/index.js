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