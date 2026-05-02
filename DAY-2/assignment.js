// Question 1: The Guest List Formatter Goal: 
// Practice Template Literals and Array Methods. Write a function called formatGuests that takes an array of names. The function should: Remove the first name from the list (it’s the host, not a guest). Add "Guest: " before each remaining name using .map(). Return a single string where each guest is on a new line.

function formatGuests(names) {
    names.shift(); // remove first person

    let result = names.map(name => "Guest: " + name);

    return result.join("\n"); // join with new line
}
console.log(formatGuests(["Himanshu", "Anurag", "Ayushi"]));

// Output:-
// Guest: Anurag
// Guest: Ayushi


// Question 2: The Logic Gate (Filter & Math) Goal: Practice Arrow Functions, filter, and Math methods. Create an arrow function called getHighNumbers. It should take an array of mixed types (strings and numbers) and: Filter the array to keep only the numbers. Filter those numbers again to only keep ones greater than a random threshold between 1 and 50. Return the final array. 

const getHighNumbers = (arr) => {
    let random = Math.floor(Math.random() * 50) + 1;

    return arr
        .filter(x => typeof x === "number")
        .filter(x => x > random);
};
console.log(getHighNumbers([10, "apple", 20, 30, "banana", 40, 50]));

// Output:-
//[20,30,40,50] (random number can be anything between 1 to 50,so it will filter the array based on that) //[50]

// Question 3: The Price Calculator Goal: Practice Type Conversion and splice. You have an array of prices, but they are currently strings. Write a script that: Removes the last item in the array using an array method (because it's a "handling fee" you want to calculate separately). Converts the remaining string prices into actual numbers. Calculates the sum of those numbers using an arrow function. Prints: "Total Price: $[sum]" using a template literal.

let prices = ["100", "200", "300", "50"];

prices.pop(); // remove last

let nums = prices.map(x => Number(x)); // convert

let sum = nums.reduce((a, b) => a + b, 0); // add

console.log(`Total Price: $${sum}`);

// Output:-
// Total Price: $600    