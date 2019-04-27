// Uses .env to hide sensitive data
require("dotenv").config();

// Project variables
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require ("moment");

// Process arguments
var command = process.argv[2];
console.log(process.argv[2]);
var userResponse = process.argv[3];
console.log(process.argv[3]);


// If statements for commands
if (command === 'concert-this') {
  concertThis(userResponse);
} else {
  concertThis("Radiohead");
}



// All functions

// Concert this
function concertThis(userResponse) {

// Axios call
  axios.get("https://rest.bandsintown.com/artists/" + userResponse + "/events?app_id=codingbootcamp")
  .then( function(response) {
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {

        console.log("Venue: " + response[i].venue.name);

        // Saves date and time response in a variable
        var dateTime = response[i].dateTime;

        // Splits the date and time
        var dateTimeArr = dateTime.split('T'); 

        // Variable for concert results 
        var concertResults = 

        "\nVenue Name: " + response[i].venue.name +
        "\nVenue Location: " + response[i].venue.city +
        "\nDate of Event: " + moment(dateTimeArr[0], "YYYY-DD-MM").format("DD/MM/YYYY");

        console.log(concertResults);
      };

  })

}

