const API_KEY = "YOUR_API_KEY";

fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=Delhi`)
  .then(res => res.json()) // Step 1: convert to JSON
  .then(data => {
    console.log(data); // always check structure first

    // Step 2: extract useful data
    const weather = data.current;

    // Step 3: create custom object (like map)
    const result = {
      location: data.location.name,
      temperatureC: weather.temperature,
      temperatureF: (weather.temperature * 1.8) + 32, 
      description: weather.weather_descriptions[0],
      isHot: weather.temperature > 30 ? "Yes" : "No"
    };

    return result;
  })
  .then(finalData => console.log(finalData))
  .catch(error => console.error("Error:", error));