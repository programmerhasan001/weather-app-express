const express = require('express');
const https = require('https');
const app = express();
const PORT = 3001;
const apiKey = "41b37461eeeaf480d61dae2accff05f0";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

app.get('/', (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=41b37461eeeaf480d61dae2accff05f0&q=dhaka&units=metric";
    https.get(url, (response) => {
        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            console.log(icon)
            const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write(`<p>and weather is ${description}</p>`);
            res.write("<h2>Temperature of Dhaka is " + temp + "degree celcius</h2>");
            res.write("<img src='https://openweathermap.org/img/wn/" + icon + "@2x.png'>");
            res.send();
        })
    })
})











app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}/`)
})