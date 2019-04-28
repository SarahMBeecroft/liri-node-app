// Uses .env to hide sensitive data
require("dotenv").config();

// Project variables
//===============================================//
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require("moment");


// Process arguments
//===============================================//
var command = process.argv[2];
console.log(process.argv[2]);
var userResponse = process.argv[3];
console.log(process.argv[3]);

// If statements for commands
//===============================================//
if (command === 'concert-this') {
  concertThis(userResponse);
} else {
  concertThis("Beck");
}



// All functions
//===============================================//
// Concert this
function concertThis(userResponse) {

  // Axios call
  axios.get("https://rest.bandsintown.com/artists/" + userResponse + "/events?app_id=codingbootcamp").then(function (response) {

    // Variable for concert results
    var concertResults = response.data[0];
    // console.log(concertResults);

    // Variable for moment
    var time = moment(concertResults.datetime).format('MM/DD/YYYY')

    console.log("\nVenue Name: " + concertResults.venue.name + "\nVenue Location: " + concertResults.venue.city + "\nDate of Event: " + time);

  });

};
