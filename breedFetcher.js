const catName =  process.argv.slice(2);
const request = require('request');
let url = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("Failed to request details ", error);
  }
  console.log(body.length);
  console.log(response.statusCode);
  if (body.length === 2) {
    console.log("Breed is not found");
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});