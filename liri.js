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
// var userResponse = process.argv[3];

// If statements for commands
if (command === 'concert-this') {
  concertThis(artist);
}

var artist = process.argv[3];

// All functions

// Concert this
function concertThis(artist) {



// Axios call
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then( function(response) {
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {

        // Saves date and time response in a variable
        var dateTime = response.data[i].dateTime;

        // Splits the date and time
        var dateTimeArr = dataTime.split('T'); 

        // Variable for concert results 
        var concertResults = 

        "\nVenue Name: " + response.data[i].venue.name +
        "\nVenue Location: " + response.data[i].venue.city +
        "\nDate of Event: " + moment(dateTimeArr[0], "YYYY-DD-MM").format("DD/MM/YYYY");

        console.log(concertResults);
      }

  })

}

