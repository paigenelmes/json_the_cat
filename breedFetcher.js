//Requirement
const request = require('request');


//Fetch breed function
const fetchBreedDescription = function(breedName, callback) {
  //URL variable
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=";
  //Adding the command line input to the end of the URL
  const search = URL.concat(breedName);
  //Request function with search input
  request(search, (error, response, body) => {
    //Print the error if the request failed
    if (error) {
      callback(`Request failed. Details: ${error}`, null);
    }
    //Convert body from string to object
    const data = JSON.parse(body);
    //Variable for breed
    const breed = data[0];
    //If breed is found, print description to console
    if (breed) {
      callback(null, breed.description);
    //If breed is not found, print "not found"
    } else {
      callback(`Sorry, the requested breed ${breedName} was not found. Try again.`, null);
    }
  });
};

module.exports = { fetchBreedDescription };