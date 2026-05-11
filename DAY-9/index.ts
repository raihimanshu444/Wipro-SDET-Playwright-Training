let name: string = "Himanshu";
let result: number | string;  //result is a variable that can hold either a number or a string
result = 45;
result = "success";
console.log(name, result); // Himanshu success 

function add(a: number, b: number): string {  //returns string
    return "Sum: " + (a + b);   
}

console.log(add(5, 10));  // "Sum: 15"

//interface is a blueprint for creating objects. It defines the structure of the object.

interface Person {
    id: number;
    name: string;
    age: number;
    role: Role; // using enum for role
    isAdmin?: boolean; // optional property ?
}

interface Person {
    email: string; // merge both interfaces automatically to add email property
}

enum Role {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
} // USER, user, User, ADMIN, Admin, admin, SUPER_ADMIN, SuperAdmin, superAdmin

const user: Person = {
    id: 1,
    name: "Himanshu",
    age: 25,
    role: Role.User,
    email: "hims@gmail.com"
};

const admin: Person = {
    id: 2,
    name: "Arush",
    age: 30,
    email: "arush@gmail.com",
    role: Role.Admin,
    isAdmin: true
};

console.log(user, admin); // { id: 1, name: 'Himanshu', age: 25, role: Role.User, email: [EMAIL_ADDRESS]' } { id: 2, name: 'Arush', age: 30, email: [EMAIL_ADDRESS]', role: Role.Admin, isAdmin: true }

//Tuple = fixed-size array with fixed types.
let coordinates: [number, string] = [40.7128, "-74.0060"]; // Tuple for latitude and longitude
console.log("Coordinates:", coordinates); // Coordinates: [ 40.7128, '-74.0060' ]

let arr: number[] = [1, 2, 3]; // array of numbers
console.log("Array:", arr); // Array: [ 1, 2, 3 ]

//generics are used to create reusable components that can work with any type.
// function identity<T>(arg: T): T {
//     return arg;
// }

// let output = identity<number>(10);
// let outpu1 = identity<string>("Himanshu");
// let outpu2 = identity<boolean>(true);

// console.log(output, outpu1, outpu2);

// Generic interface for a bag that can hold any type of content
// interface Bag<T> {
//     content: T;
// }

// const stringBag: Bag<string> = {content: "Apple"};
// const numberBag: Bag<number> = {content: 5};

// console.log(stringBag, numberBag);

class Storage<T> {
    private items: T[] = [];

    addItems(item: T): void { // no return type
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index]!; // non-null assertion operator to indicate that the item will exist at the given index
    }
}

const names = new Storage<string>();
names.addItems("Himanshu");
names.addItems("Arush");
names.addItems("Rohan");

console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3  Himanshu Arush Rohan undefined


//Any value using HasLength must have a length property.
interface HasLength { // contraints | extends keyword
    length: number;
}

// generics with contraints | extends keyword
function logLength<T extends HasLength>(arg: T): void { // T -> property .length --> string, arrays   T can be any datatype BUT it must have a .length property.
    console.log(arg.length);  // property accessor  
}

logLength("Himanshu"); // string --> length 8
logLength([1, 2, 3]); // array --> length 3
// logLength(10); // number --> X  Property 'length' does not exist on type 'number'