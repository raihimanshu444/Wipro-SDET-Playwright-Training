//Getter and Setter with validation
class Student {
    constructor(name, age) {
        this.name = name;
        this._age = age; // use underscore for controlled property private-like-don't access it directly
    }

    getAge() {
        return this._age;
    }

    setAge(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Invalid age");
        }
    }
}

const student1 = new Student("Himanshu", 21);

console.log(student1.getAge()); // 21

student1.setAge(-5); // Invalid age
student1.setAge(25);

console.log(student1.getAge()); // 25

//use of Static

class MathUtils {
  static add(a, b) { // Static methods belongs to the class not the object, so we can call them directly on the class
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // 5 no need to create object to access static method

// Method-chaining
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this;  // return 'this' to allow chaining
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  getValue() {
    return this.value;
  }
}

const calc = new Calculator();

const result = calc.add(5).subtract(2).multiply(3).getValue();
console.log(result); // 9


//Object.freeze() makes an object read-only (cannot change)

const user = {
  name: "Himanshu"
};

Object.freeze(user);

user.name = "Aryan"; // ❌ ignored

console.log(user.name); // Himanshu


// Prototype =Shared memory for all objects of a class

const dog = new Animal("Jhonny");
const cat = new Animal("Whiskers");

console.log(dog.speak === cat.speak); // true - both share same method like speak() in this case  Instead of copying method every time, JS stores it in prototype

//Method Overrinding

class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark"); // override
  }
}

const myDog = new Dog();
myDog.speak(); // Bark

//Destructing

//without destructing
const user = { name: "Himanshu", age: 21 };

const name = user.name;
const age = user.age;


//With destructuring
const user1 = { name: "Himanshu", age: 21 };

const { name1, age1 } = user1;

console.log(name1, age1); // Himanshu 21



