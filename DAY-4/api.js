// 1. Weather API

// const API_KEY = "YOUR_API_KEY";

// fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=Delhi`)
//   .then(res => res.json()) // Step 1: convert to JSON
//   .then(data => {
//     console.log(data); // always check structure first

//     // Step 2: extract useful data
//     const weather = data.current;

//     // Step 3: create custom object (like map)
//     const result = {
//       location: data.location.name,
//       temperatureC: weather.temperature,
//       temperatureF: (weather.temperature * 1.8) + 32, 
//       description: weather.weather_descriptions[0],
//       isHot: weather.temperature > 30 ? "Yes" : "No"
//     };

//     return result;
//   })
//   .then(finalData => console.log(finalData))
//   .catch(error => console.error("Error:", error));

  // 2. JSONPlaceholder - Todos
/*
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(todos => {
    const completedTodos = todos
      .filter(t => t.completed)
      .map(t => ({ id: t.id, title: t.title }));
    console.log("Todos:", completedTodos);
  })
  .catch(err => console.error(err));
*/

// 3. JSONPlaceholder - Users

console.log("--- Starting Fetch for Users ---"); // Add this to see if script starts

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    const userData = users.map(u => ({
      name: u.name,
      city: u.address.city
    }));
    console.log("Users:", userData);
  })
  .catch(err => console.error(err));


// 4. Fake Store API
/*
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    const expensiveProducts = products
      .filter(p => p.price > 100)
      .map(p => ({ title: p.title, price: p.price }));
    console.log("Products:", expensiveProducts);

    // BONUS: Total Price of Expensive Products
    const totalPrice = expensiveProducts.reduce((sum, p) => sum + p.price, 0);
    console.log("Total Price of Expensive Products:", totalPrice);
  })
  .catch(err => console.error(err));
*/

// 5. Random User API

fetch("https://randomuser.me/api/?results=5")
  .then(res => res.json())
  .then(randomData => {
    const randomUsers = randomData.results.map(u => ({
      name: u.name.first,
      country: u.location.country
    }));
    console.log("Random Users:", randomUsers);
  })
  .catch(err => console.error(err));


// 6. Dog API

fetch("https://dog.ceo/api/breeds/image/random/3")
  .then(res => res.json())
  .then(dogData => {
    const dogImages = dogData.message.map(img => ({ image: img }));
    console.log("Dog Images:", dogImages);
  })
  .catch(err => console.error(err));


// 7. REST Countries API
/*
fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(countries => {
    const bigCountries = countries
      .filter(c => c.population > 100000000)
      .map(c => ({
        name: c.name.common,
        population: c.population
      }));
    console.log("Countries:", bigCountries);
  })
  .catch(err => console.error(err));
*/

// 8. Bored API
/*
fetch("https://www.boredapi.com/api/activity")
  .then(res => res.json())
  .then(bored => {
    const activity = {
      activity: bored.activity,
      type: bored.type
    };
    console.log("Activity:", activity);
  })
  .catch(err => console.error(err));
*/

// 9. SpaceX API

// fetch("https://api.spacexdata.com/v4/launches")
//   .then(res => res.json())
//   .then(launches => {
//     const successfulLaunches = launches
//       .filter(l => l.success === true)
//       .map(l => ({
//         name: l.name,
//         date: l.date_utc
//       }));
//     console.log("SpaceX:", successfulLaunches);
//   })
//   .catch(err => console.error(err));

// 10. Cat Facts API
fetch("https://catfact.ninja/fact")
  .then(res => res.json())
  .then(factData => {
    const catFact = {
      fact: factData.fact,
      length: factData.length
    };
    console.log("Cat Fact:", catFact);
  })
  .catch(err => console.error(err));

