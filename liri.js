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
var userResponse = process.argv.slice(3).join(" "); // slice allows for space
console.log(process.argv.slice(3).join(" "));

// If statements for commands
//===============================================//
// concert-this
if (command === 'concert-this') {
  concertThis(userResponse);
} else {
  concertThis("Beck");
}

// spotify-this-song
if (command === 'spotify-this-song') {
  spotifyThis(userResponse);
} else {
  spotifyThis("The Sign");
}

// All functions
//===============================================//
// Concert this
//===============================================//
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

// Spotify this song
//===============================================//
function spotifyThis(userResponse) {
 
  spotify.search({ type: 'track', query: userResponse}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }else {
      for (var i = 0; i < data.tracks.items.length; i++){

      // Setting artist index to 0 returns all results, still need to find a way to get preview link
      console.log("Artist: " + data.tracks.items[i].artists[0].name + "\nSong Name: "
      + data.tracks.items[i].name + "\nPreview Link: " + data.tracks.items[i].link + "\nAlbum Name: " + data.tracks.items[i].album.name + "\n");
      
      };
    }
   
  });

};
