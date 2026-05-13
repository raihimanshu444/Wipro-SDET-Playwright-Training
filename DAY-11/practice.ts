// 1. The Generic API Wrapper
// Scenario: You need a reusable function to fetch data that automatically types the response.
// Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, check if the response is okay, and return the JSON parsed as type T. Test it by creating an Album interface and fetching data from a mock URL.

interface Album {
    id: number;
    title: string;
}

async function fetchData<T>(url: string): Promise<T> {

    const response = await fetch(url);

    const data = await response.json();

    return data;
}

async function getAlbum() {

    const album = await fetchData<Album>(
        "https://jsonplaceholder.typicode.com/albums/1"
    );

    console.log(album.title);
}

getAlbum();


// 2. Record Mapping for Configuration
// Scenario: You are managing feature flags or permissions for specific user roles.
// Task: Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create a variable PermissionMap where every Role must be mapped to a boolean value. If a role is missing from the object, TypeScript should throw an error.

// Enum -> used to create fixed constant values (roles)
enum Role {
    Admin = "Admin",
    Editor = "Editor",
    Guest = "Guest"
}

/*
Record<Key, Value>

Key   -> what will be the object keys
Value -> what datatype each value should store

Record<Role, boolean> means:
- Every Role must exist in object
- Every value must be boolean (true/false)
*/

const PermissionMap: Record<Role, boolean> = {

    // Admin role -> permission true
    [Role.Admin]: true,

    // Editor role -> permission true
    [Role.Editor]: true,

    // Guest role -> permission false
    [Role.Guest]: false
};

// Print full object
console.log(PermissionMap);

/*
OUTPUT:

{
  Admin: true,
  Editor: true,
  Guest: false
}
*/

// Access specific role permission
console.log(PermissionMap.Admin); // true
console.log(PermissionMap.Guest); // false


// const PermissionMap: Record<Role, boolean> = {
//     [Role.Admin]: true,
//     [Role.Editor]: true
// }                              //Property 'Guest' is missing



// 3. Exhaustiveness Checking (The never Type)
// Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
// Task:
// Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// Write a function handleTask(status: TaskStatus) using a switch statement.
// In the default case, assign the status to a variable of type never.
// The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.

// Union Type -> task can only have these values
type TaskStatus = 'Open' | 'InProgress' | 'Closed';

// Function to handle task status
function handleTask(status: TaskStatus): void {

    switch (status) {

        // If task is Open
        case 'Open':
            console.log("Task is Open");
            break;

        // If task is InProgress
        case 'InProgress':
            console.log("Task is In Progress");
            break;

        // If task is Closed
        case 'Closed':
            console.log("Task is Closed");
            break;

        default:
            const check: never = status;  //never means: No value should remain unhandled here
            console.log(check);
    }
}

// Function calls
handleTask('Open');
handleTask('InProgress');
handleTask('Closed');


// 4. Recursive Navigation Type
// Scenario: You are building a tree structure for a file system or a sidebar menu.
// Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.

interface FolderNode {
    name: string;
    files?: string[];
    subFolders?: FolderNode[];
}

const fileTree: FolderNode = {
    name: "root",
    subFolders: [
        {
            name: "docs",
            files: ["readme.md", "guide.pdf"]
        },
        {
            name: "src",
            subFolders: [
                {
                    name: "components",
                    files: ["Button.tsx"]
                }
            ]
        }
    ]
};

console.log(JSON.stringify(fileTree, null, 2));




// 5. Template Literal Types for CSS
// Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
// Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.

// Template Literal Types -> allow us to create string types with patterns
type MarginValue = `${number}px` | `${number}rem` | `${number}vh`;


// Valid types (will not give error)
const margin1: MarginValue = "10px";
const margin2: MarginValue = "2.5rem";
const margin3: MarginValue = "15vh";

// Invalid types (will give error)
// const margin6: MarginValue = "px10";         //❌ Wrong order
// const margin7: MarginValue = "ten px";       //❌ Not a number

console.log(margin1);  //10px
console.log(margin2);  //2.5rem
console.log(margin3);  //15vh


// 6. Conditional Types & the infer Keyword
// Scenario: You are working with a library that returns data wrapped in a Promise, and you need to extract the underlying type.
// Task: Create a utility type UnwrapPromise<T>. It should check if T is a Promise. If it is, use the infer keyword to return the type the promise resolves to; otherwise, return T itself.

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>; //it
type B = UnwrapPromise<Promise<number>>;
type C = UnwrapPromise<boolean>;

let value1: A = "Hello";
let value2: B = 100;
let value3: C = true;

console.log(value1);
console.log(value2);
console.log(value3);


// 7. The Union Manipulation Puzzle
// Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
// Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
// Use Extract to create MouseEvents (only click and dbclick).
// Use Exclude to create NonFormEvents (everything)

type AllEvents =
    | 'click'
    | 'dbclick'
    | 'submit'
    | 'reset'
    | 'keypress';

type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;

type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;

let mouseEvent1: MouseEvents = 'click';
let mouseEvent2: MouseEvents = 'dbclick';

let event1: NonFormEvents = 'click';
let event2: NonFormEvents = 'dbclick';
let event3: NonFormEvents = 'keypress';

console.log(mouseEvent1);
console.log(mouseEvent2);

console.log(event1);
console.log(event2);
console.log(event3);

// 8. Async Higher-Order Function (HOF)
// Scenario: You want to wrap any asynchronous function with a standard error logger.
// Task: Write a generic function safeExecute<T> that takes an async function as an argument. It should return a new function that, when called, executes the original function inside a try/catch block and returns null if it fails.

async function getUser(id: number): Promise<string> {
    if (id === 0) {
        throw new Error("User not found");
    }
    return `User ${id}`;
}

function safeExecute<T>(
    fn: (...args: any[]) => Promise<T>
) {
    return async (...args: any[]): Promise<T | null> => {
        try {
            return await fn(...args);
        } catch (error) {
            console.log("Error:", error);
            return null;
        }
    };
}

const safeGetUser = safeExecute(getUser);
safeGetUser(1).then(console.log);
safeGetUser(0).then(console.log);

// 9. Index Signatures for Dynamic Metadata
// Scenario: You are receiving a "Metadata" object from a server where the keys are dynamic strings, but the values must be either a string, number, or boolean.
// Task: Create an interface UserMetadata that has a required createdAt: Date but allows any other dynamic string keys as long as their values match the union type mentioned.

interface UserMetadata {
    createdAt: Date;
    [key: string]: string | number | boolean | Date;
}

const user1: UserMetadata = {
    createdAt: new Date(),
    username: "Himanshu",
    age: 22,
    isAdmin: true
};

console.log(user1);

// 10. Mapped Types with Key Remapping
// Scenario: You have a data model and need to generate a type for an API response that "prefixes" all the keys.
// Task:
// Define an interface Car { make: string; model: string; }.
// Create a mapped type ApiResponse<T> that iterates through keys of T and renames them to be uppercase and prefixed with DATA_ (e.g., make becomes DATA_MAKE).

interface Car {
    make: string;
    model: string;
}

type ApiResponse<T> = {
    [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};

type CarApiResponse = ApiResponse<Car>;

const carData: CarApiResponse = {
    DATA_MAKE: "Toyota",
    DATA_MODEL: "Fortuner"
};

console.log(carData);