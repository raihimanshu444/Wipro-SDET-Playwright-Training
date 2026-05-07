//  **************** Question 1: The Flight Data Parser *****************

// Problem Statement: You are given a list of raw flight strings from a travel agency's database. The data is unformatted and needs to be standardized into objects for a front-end display. 
// Requirements:
// 1.Parsing: Iterate through an array of strings formatted as: "CITY_A-CITY_B:PRICE". 
// 2.Object Creation: Convert each string into an object with three properties: from, to, and price. 
// 3.Validation & Coercion: The price must be explicitly converted to a Number. If the price is not a valid number or is missing, set the price to 0. 
// 4.Filtering: Create a new array containing only flights where the price is between $100 and $500 (inclusive). 
// 5.Sorting: Sort the final array of objects by price in ascending order (cheapest first). 
// 6.Return: Return the final array as a JSON string. 
 
const rawFlights = [     //given array of strings 
 "London-Paris:150",
 "New York-Tokyo:invalid",
 "Dubai-Mumbai:450",
 "Berlin-Rome:95"
];

const result=rawFlights.map(flight=>{   //map-->convert strings to objects
    const[route,priceStr]=flight.split(":"); //split price:route="London-Paris" priceStr="150"
    const[from,to]=route.split("-"); // split cities: from="London" to="Paris"

    let price=Number(priceStr); // convert price to number "150"->150 "invalid"->NaN
    if(isNaN(price)){ // check if price is not a number: "invalid" 
        price=0; // set price to 0 if it is not a number
    }
    return{from,to,price}; // return object
})
.filter(f=> f.price>=100 && f.price<=500) // filter flights where price is between 100 and 500
.sort((a,b) => a.price-b.price); // sort flights by price in ascending order

const finalResult=JSON.stringify(result); // convert array to json string
console.log(finalResult);

// output: 
// "[{"from":"London","to":"Paris","price":150},{"from":"Dubai","to":"Mumbai","price":450}]"



// **************** Question 2: The E-Commerce Discount Applicator *****************
// Problem Statement: You are building a promo-code system for a shopping cart. You need to write a function applyPromo(cart, promoCallback) that calculates which items qualify for a specific discount. 
// Requirements: 
// 1. The Pipeline: The applyPromo function should accept an array of product objects and a callback function. 
// 2. The Callback (isEligible): You must define a separate callback function to be passed in. This callback should return true only if a product belongs to the "Electronics" category AND has a price greater than $200. 
// 3. Transformation: Use the callback to identify eligible items. For those items, reduce their price by 10%. Add a new property to all items in the array called isDiscounted (set to true for eligible items and false for others). 
// 4. Final Summary: Once the processing is complete, use a Template Literal to log to the console: "Promotion applied! [X] items were discounted for a total saving of $[Y]." 
// 5. Delayed Return: Wrap the final return statement in a setTimeout of 1000ms to simulate a server calculation, returning the updated cart array.

function isEligible(product) {
  return product.category === "Electronics" && product.price > 200; //eligible products
}

function applyPromo(cart, promoCallback) {
    // return promise to handle delay
  return new Promise((resolve) => {
    let discountedCount = 0;
    let totalSaving = 0;

    const updatedCart = cart.map(product => {
      if (promoCallback(product)) {             //check if product is eligible
        const saving = product.price * 0.1; //calculate discount 
        discountedCount++;
        totalSaving += saving;
        return { ...product, isDiscounted: true, price: product.price - saving }; // break and add discount to product
      }
      return { ...product, isDiscounted: false };     // return without discount
    });

    setTimeout(() => {                                // set delay of 1 second
      console.log(`Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSaving}.`); // log the summary
      resolve(updatedCart);                            // Resolve the promise with the updated cart
    }, 1000);
  });
}

const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

// Use .then() to see the updated cart after the 1-second delay
applyPromo(cart, isEligible).then(updatedCart => {
  console.log("Updated Cart:", updatedCart);
});

// Output:
// Promotion applied! 2 items were discounted for a total saving of $105.
// Updated Cart: [
// {name: 'Smartphone',price:720,category:'Electronics',isDiscounted:true},
// {name: 'Toaster',price:50,category:'Home',isDiscounted:false},
// {name:'Headphones',price:225,category:'Electronics',isDiscounted:true},
// {name:'Monitor',price: 150,category: 'Electronics',isDiscounted: false}
//]


// ****************Question 3: The Movie Stream Analytics *****************
//  Problem Statement: You are given an array of raw strings representing movie data from a streaming platform. 
//  You need to convert this raw data into a structured format to identify top-performing content. 
// Requirements: 
// 1. Parse strings formatted as: "MOVIE_NAME|GENRE|VIEW_COUNT". 2. Convert each string into an object with properties for name, genre, and views. 
// 3. Ensure the views property is an actual Number. If the views data is corrupted or not a number, default it to 0. 
// 4. Create a new list containing only movies from the "Action" or "Sci-Fi" genres with more than 5,000 views. 
// 5. Sort the final list by views in descending order (highest views first). 
// 6. Return the final array as a JSON string.

function processMovies(rawMovies) {
  const result = rawMovies
    .map(movie => {
      const [name, genre, views] = movie.split("|");  //split the strings name="Inception" genre="Sci-Fi" views="12000"

      return {
        name: name,
        genre: genre,
        views: isNaN(Number(views)) ? 0 : Number(views)  //convert views to number and check if it is not a number
      };
    })
    .filter(movie =>
      (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
      movie.views > 5000  //filter movies from action or sci-fi genre with more than 5000 views
    )
    .sort((a, b) => b.views - a.views);  //sort movies by views in descending order

  return JSON.stringify(result);  //convert array to json string
}


const rawMovies = [
 "Inception|Sci-Fi|12000",
 "The Lion King|Animation|8000",
 "Mad Max|Action|invalid",
 "The Matrix|Sci-Fi|15000",
 "Gladiator|Action|4500"
];
console.log(processMovies(rawMovies));

// output:
// "[
//   {"name":"The Matrix","genre":"Sci-Fi","views":15000},
//   {"name":"Inception","genre":"Sci-Fi","views":12000}
// ]"



// **************** Question 4: The Automated Payroll Processor *****************
// Problem Statement: You are developing a payroll system. You need to write a function calculatePayroll(employees, taxCallback) that applies tax deductions and calculates final payouts. 
// Requirements: 
// 1. Create a callback function (taxLogic) that determines the tax rate: If a salary is > 5000, the tax is 20%. Otherwise, the tax is 10%. 
// 2. The calculatePayroll function should use this callback to process each employee. 
// 3. Calculate the netSalary (Salary minus Tax). Add a property status to each employee: If the net salary is > 4000, set status to "Premium", otherwise set it to "Standard". 
// 4. Use a Template Literal to log: "Payroll Processed: Total Net Payout is $[Z] for [X] employees." 
// 5. The function must use setTimeout to wait 2000ms before returning the final array of processed employee objects.

function taxLogic(salary) {            //tax function
  return salary > 5000 ? 0.2 : 0.1;    //return 0.2 tax if salary > 5000 else return 0.1
}

function calculatePayroll(employees, taxCallback) {        //calculate payroll function
  return new Promise((resolve) => {
    setTimeout(() => {                        //set timeout of 2000ms
      let totalNet = 0;

      const result = employees.map(emp => {
        const taxRate = taxCallback(emp.salary);    //get tax rate from callback
        const taxAmount = emp.salary * taxRate;     //calculate tax amount
        const netSalary = emp.salary - taxAmount;     //calculate net salary

        totalNet += netSalary;                       //add net salary to total net

        return {
          ...emp,
          taxAmount: taxAmount,
          netSalary: netSalary,
          status: netSalary > 4000 ? "Premium" : "Standard"  
        };
      });

      console.log(`Payroll Processed: Total Net Payout is $${totalNet} for ${employees.length} employees.`);

      resolve(result);
    }, 2000);
  });
}


const employees = [
  { id: 1, name: "Alice", salary: 6000 },
  { id: 2, name: "Bob", salary: 3000 },
  { id: 3, name: "Charlie", salary: 8000 }
];

calculatePayroll(employees, taxLogic).then(result => {
  console.log("Processed Employees:", result);
});

//output:-
// Payroll Processed: Total Net Payout is $13900 for 3 employees.
// Processed Employees: [
//   {
//     id: 1,
//     name: 'Alice',
//     salary: 6000,
//     taxAmount: 1200,
//     netSalary: 4800,
//     status: 'Premium'
//   },
//   {
//     id: 2,
//     name: 'Bob',
//     salary: 3000,
//     taxAmount: 300,
//     netSalary: 2700,
//     status: 'Standard'
//   },
//   {
//     id: 3,
//     name: 'Charlie',
//     salary: 8000,
//     taxAmount: 1600,
//     netSalary: 6400,
//     status: 'Premium'
//   }
// ]
