const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log("test");
      callback(error, null);
    } else if (body.length === 2) {
      callback(null, 'Breed is not found');
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = fetchBreedDescription;
