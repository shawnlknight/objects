console.log('\'Allo \'Allo!');

$(document).ready(function() {


// object template 1
var albums = [
	{
		title: "'The Question'",
		artist: "Emery",
		year: "2005"
	},
	{
		title: "'Come Now Sleep'",
		artist: "As Cities Burn",
		year: "2007"
	},
	{
		title: "'Beggars'",
		artist: "Thrice",
		year: "2009"
	},
	{
		title: "'How to Start a Fire'",
		artist: "Further Seems Forever",
		year: "2003"
	}
];

	var markup = "";

	$.each(albums, function(key, value) {
	
		markup += "<h4>" + albums[key].title + "</h4><h5>" + albums[key].artist + "</h5><p>" + albums[key].year + "</p>";

	});

$(".albums").append(markup);




// object template 2
var records = [
	{
		movement: "Squat",
		pr: "225 lbs"
	},
	{
		movement: "Deadlift",
		pr: "300 lbs"
	},
	{
		movement: "Clean & Jerk",
		pr: "185 lbs"
	},
	{
		movement: "Muscle Ups",
		pr: "5 in a row"
	},
	{
		movement: "100 Burpees",
		pr: "6:00 min"
	}
];

	var markup = "";

	$.each(records, function(key, value) {

		markup += "<h3>" + records[key].movement + "</h3><p>" + records[key].pr + "</p>";

	}); 

$(".records").append(markup);

});




// object template 3
var bass = {
	type: "jazz",
	brand: "fender",
	stings: 4,
	color: "black",

	changeColor: function(newColor) {
		this.color = newColor;
		return this.color;
	}
};






// Constructor 1
function Car(name) {
	this.name = name;
	this.needGas = false;
	this.trip = function() {
		this.needGas = true;
	};
	this.drive = function(friend) {
		friend.hasVehicle = true;
	};
}

var car1 = new Car("bubba");
var car2 = new Car("luther");


// Constructor 2
function Friend(location, age, gender, hasVehicle) {
	this.location = location;
	this.age = age;
	this.gender = gender;
	this.hasVehicle = hasVehicle;
	this.drive = function(car) {
		car.needGas = true;
	};
}

var jonny = new Friend("colorado", 27, "male", true);
var kevin = new Friend("california", 26, "male", true);
var david = new Friend("south carolina", 28, "male", true);







// Constructor 3 (for fun)
function Coffee(roast, origin, brewMethod) {
	this.roast = roast;
	this.origin = origin;
	this.brewMethod = brewMethod;
	this.french = function() {
		this.brewMethod = "french press";
	};
	this.spoon = function() {
		this.brewMethod = "eat strait with a spoon!";
	}
}

var house = new Coffee("medium", "south america", "pour over");
var sumatra = new Coffee("dark", "asia", "drip");
var special = new Coffee("extra-dark", "ethiopia", "pour over");




