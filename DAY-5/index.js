//1
async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    const result = users.map(u => ({
      name: u.name,
      city: u.address.city
    }));

    console.log("Users:", result);
  } catch (err) {
    console.error(err);
  }
}

fetchUsers();
// Users: [
//   { name: 'Leanne Graham', city: 'Gwenborough' },
//   { name: 'Ervin Howell', city: 'Wisokyburgh' },
//   { name: 'Clementine Bauch', city: 'McKenziehaven' },
//   { name: 'Patricia Lebsack', city: 'South Elvis' },
//   { name: 'Chelsey Dietrich', city: 'Roscoeview' },
//   { name: 'Mrs. Dennis Schulist', city: 'South Christy' },
//   { name: 'Kurtis Weissnat', city: 'Howemouth' },
//   { name: 'Nicholas Runolfsdottir V', city: 'Aliyaview' },
//   { name: 'Glenna Reichert', city: 'Bartholomebury' },
//   { name: 'Clementina DuBuque', city: 'Lebsackbury' }
// ]


//2
async function fetchTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();

    const result = todos
      .filter(t => t.completed)
      .map(t => ({ id: t.id, title: t.title }));

    console.log("Todos:", result);
  } catch (err) {
    console.error(err);
  }
}

// fetchTodos();


//3
async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    const result = products
      .filter(p => p.price > 100)
      .map(p => ({ title: p.title, price: p.price }));

    const totalPrice = result.reduce((sum, p) => sum + p.price, 0);

    console.log("Products:", result);
    console.log("Total Price:", totalPrice);
  } catch (err) {
    console.error(err);
  }
}

// fetchProducts();


//4
async function fetchRandomUsers() {
  try {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();

    const result = data.results.map(u => ({
      name: u.name.first,
      country: u.location.country
    }));

    console.log("Random Users:", result);
  } catch (err) {
    console.error(err);
  }
}

// fetchRandomUsers();

//5
async function fetchDogs() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/3");
    const data = await res.json();

    const result = data.message.map(img => ({
      image: img
    }));

    console.log("Dog Images:", result);
  } catch (err) {
    console.error(err);
  }
}

// fetchDogs();

//6
async function fetchCountries() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();

    const result = countries
      .filter(c => c.population > 100000000)
      .map(c => ({
        name: c.name.common,
        population: c.population
      }));

    console.log("Countries:", result);
  } catch (err) {
    console.error(err);
  }
}

// fetchCountries();

//7
async function fetchActivity() {
  try {
    const res = await fetch("https://www.boredapi.com/api/activity");
    const data = await res.json();

    const result = {
      activity: data.activity,
      type: data.type
    };

    console.log("Activity:", result);
  } catch (err) {
    console.error(err);
  }
}

// fetchActivity();

//8
async function fetchSpaceX() {
  try {
    const res = await fetch("https://api.spacexdata.com/v4/launches");
    const launches = await res.json();

    const result = launches
      .filter(l => l.success === true)
      .map(l => ({
        name: l.name,
        date: l.date_utc
      }));

    console.log("SpaceX:", result);
  } catch (err) {
    console.error(err);
  }
}

// fetchSpaceX();

//9
async function fetchCatFact() {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();

    const result = {
      fact: data.fact,
      length: data.length
    };

    console.log("Cat Fact:", result);
  } catch (err) {
    console.error(err);
  }
}

// fetchCatFact();

//10
async function fetchCrypto() {
  try {
    const res = await fetch("https://api.coindcx.com/exchange/ticker");
    const data = await res.json();

    const btc = data.find(c => c.market === "BTC/USDT");
    const eth = data.find(c => c.market === "ETH/USDT");

    console.log("BTC Price:", btc?.lastPrice);
    console.log("ETH Price:", eth?.lastPrice);
  } catch (err) {
    console.error(err);
  }
}

// fetchCrypto();


