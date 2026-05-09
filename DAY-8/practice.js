//     ******************Variables & Data Types******************

// 1. Swap Two Numbers Without Third Variable

let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a); // a becomes 20
console.log("b =", b); // b becomes 10

// 2. Check Data Type

let value = true;

if (value === null) {
    console.log("null");
} else {
    console.log(typeof value);
}

// 3. Celsius to Fahrenheit

// Formula: (C × 9/5) + 32 = F

let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

// 4. Simple Calculator

let x = 20;
let y = 5;

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);

//5.Calculate Age based on Birth Year

let birthYear = 2004;
let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Age =", age);

// ******Strings******

//1. Reverse a String without using reverse() method

let str="Hello";
let revStr="";
for(let i=str.length-1;i>=0;i--){
    revStr+=str[i];
}
console.log(revStr);

//2. Count Vowels in a String

let str1="Himanshu";
let count=0;
for(let i=0;i<str1.length;i++){
    if(str1[i]=="a"||str1[i]=="e"||str1[i]=="i"||str1[i]=="o"||str1[i]=="u"){
        count++;
    }
}
console.log(count);

//3. Check Palindrome

let str2="Himanshu";
let revStr2="";
for(let i=str2.length;i>=0;i--){
    revStr2+=str2[i];
}
if(str2==revStr2){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}

//4. Capitalize First Letter of Every Word

let sentence ="Himanshu is a good boy";
let words=sentence.split(" "); // ["Himanshu","is","a","good","boy"]
let result="";

for(let i=0;i<words.length;i++){
    result+=words[i][0].toUpperCase()+words[i].slice(1)+" ";  // Himanshu + is + a + good + boy
}
console.log(result.trim()); //Himanshu Is A Good Boy

//5. Find Longest Word in Sentence

let s1 ="Himanshu is a good boy";
let brokenWords=s1.split(" "); // ["Himanshu","is","a","good","boy"]
let longestWord=brokenWords[0];

for(let i=1;i<brokenWords.length;i++){ 
    if(brokenWords[i].length>longestWord.length){
        longestWord=brokenWords[i];
    }
}
console.log(longestWord); //Himanshu


// *********** Numbers & Math ***********
// 1. Generate a random number between 1 and 100.

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

// 2. Check whether a number is prime.

let num=12;
let isPrime=true;

for(let i=2;i<num/2;i++){
    if(num%i==0){
        isPrime=false;
        break;
    }
}
if(isPrime){
    console.log("Prime");
}else{
    console.log("Not a Prime");
}

// 3. Find factorial of a number using loops.

let number=9;
let factorial=1;

for(let i=1;i<=number;i++){
    factorial*=i;
}
console.log(factorial);

// 4. Find Fibonacci series up to n numbers.
let n = 7;

let a1 = 0;
let b1 = 1;

console.log(a1); //0
console.log(b1); //1

for (let i = 2; i < n; i++) {
    let next1 = a1 + b1;
    console.log(next1); 
    a1 = b1;
    b1 = next1;
}

// 5. Check whether a number is Armstrong number.

let num1 = 153;
let temp = num1;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong");
}

