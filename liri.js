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
// if (command === 'concert-this') {
//   concertThis(userResponse);

// } else if (command === 'spotify-this-song') {
//   spotifyThis(userResponse);

// } else (command === 'movie-this'); {
//   movieThis(userResponse);
// }


begin(command, userResponse);

function begin(command, userResponse){
	switch(command){
	case 'concert-this':
		concertThis(userResponse);
	break;

	case "spotify-this-song":
		spotifyThis(userResponse);
	break;

	case "movie-this":
		movieThis(userResponse);
	break;

	default:
	break;
	}
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
      console.log("Artist: " + data.tracks.items[i].artists[0].name);
      console.log("Song Name: " + data.tracks.items[i].name);
      console.log("Preview Link: " +  data.tracks.items[i].link);
      console.log("Album Name: " + data.tracks.items[i].album.name + "\n");
      };
    }
   
  });

};


// Movie this
//===============================================//}
function movieThis(userResponse) {

  // Axios call
  axios.get("http://www.omdbapi.com/?t=" + userResponse + "&y=&plot=short&apikey=trilogy").then(function (response) {

  // Variable for concert results
  var movieResults = response.data;
  // console.log(movieResults);
  console.log("Movie Title: " + movieResults.Title);
  console.log("Release Year: " + movieResults.Year);
  console.log("IMDB Rating: " + movieResults.imdbRating);
  console.log("Rotten Tomatoes Rating: " + movieResults.Ratings[1].Value);
  console.log("Country: " + movieResults.Country);
  console.log("Language: " + movieResults.Language);
  console.log("Plot: " + movieResults.Plot);
  console.log("Actors: " + movieResults.Actors + "\n");

  });
};

