// Import Express.js
import express from 'express';
import fetch from 'node-fetch';


const PORT = 3000

const app = express()

// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The Books API is running on: http://localhost:${PORT}.`)
)

generate();

function generate(){

  const GET_CHUCK_URL="https://api.openweathermap.org/data/2.5/weather?lat=44.56463&lon=-123.261958&appid=ce44d323f021c0a3340a9106ee25e514"; 
  let context =   {
                      method: 'GET'
                  };
      
  fetch(GET_CHUCK_URL,context)
  .catch(error => err_callback(error))
      .then(response => response.json())
      .then(response => callback(response));
}

function err_callback(error){
  console.log(error);
}

function callback(response){
  app.get('/', (request, res) => {
    // The string we want to display on http://localhost:3000
    res.send(response)
  })

}




























