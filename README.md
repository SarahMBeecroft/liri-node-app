# LIRI Bot

## Overview

I was assigned to make a LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## How to use

1. For the **spotify-this-song** command, just type in "node liri.js spotify-this-song "your song choice" and you'll get the top 20 results from the spotify API showing: Artist, Song Name, and Album Name.

2. For the **concert-this** command, just type in "node liri.js concert-this "your artist choice" and you'll get a result from the Bands in Town API showing: Venue Name, Venue Location, and Date of Event. 

3. For the **movie-this** command, just type in "node liri.js movie-this "your movie choice" and you'll get a result from the OMDB API showing: Movie Title, Release Year, IMDB Rating, Rotten Tomatoes Rating, Country, Language, and Plot. 

4. For the **do-what-it-says** command, just type in "node liri.js do-what-it-says and using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
   
## Screenshots

### Process Arguments and Switch Statements
![switch statements screenshot](/images/switch.PNG)

### spotify-this-song
![spotify function screenshot](/images/spotify.PNG)

### concert-this
![concert function screenshot](/images/concert.PNG)

### movie-this
![movie function screenshot](/images/movie.PNG)

### do-what-it-says
![read random.txt function screenshot](/images/dowhatitsays.PNG)


## Video Walkthrough
(Apologies for the mic interference!)
Link: https://drive.google.com/open?id=12s58T2GuDE2Ve3sWzcFLG6uTzhDsQTHp


