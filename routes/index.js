var express = require('express');
var router = express.Router();

var moviesJSON = require("../movies.json");

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: "Star Wars Movies",
  	movies: moviesJSON.movies
  });
});

/* GET single star_wars_episode page (with parameter) */
router.get("/star_wars_episode/:episode_number", function(req, res, next){
	var episode_number = req.params.episode_number;
	var movies = moviesJSON.movies;
	var movie = movies[episode_number - 1]; 
	// var movie = movies.find((movie) => movie.episode_number === episode_number);
	if(movie) {
		res.render("movie_single", {
			movies: movies,
			movie: movie,
		});
	}
	else {
		res.render("error", { title: "This is not the page you are looking for", movies: movies });
	}
});

// /* GET error/notFound page */
// router.get("*", function(req, res, next) {
// 	res.render("error", { title: "This is not the page you are looking for", movies: moviesJSON.movies });
// });

module.exports = router;