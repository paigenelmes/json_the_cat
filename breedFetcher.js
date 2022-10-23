//Requirement
const request = require('request');

//Variables for command line inputs
const args = process.argv;
const input = args[2];
//URL variable
const URL = "https://api.thecatapi.com/v1/breeds/search?q=";
//Adding the command line input to the end of the URL
const search = URL.concat(input);

//Request function with search input
request(search, (error, response, body) => {
  //Print the error if the request failed
  if (error) {
    console.log("Request failed.", error);
  }
  //Convert body from string to object
  const data = JSON.parse(body);
  //Variable for breed
  const breed = data[0];
  //If breed is found, print description to console
  if (breed) {
    console.log(breed.description);
    //If breed is not found, print "not found"
  } else {
    console.log(`Sorry, the requested breed was not found. Try again.`);
  }
});