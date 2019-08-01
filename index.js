const breedName =  process.argv.slice(2);
const fetchBreedDescription = require('./breedFetcher.js');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(`Error fetch details: ${error}`);
  } else {
    console.log(desc);
  }
});
