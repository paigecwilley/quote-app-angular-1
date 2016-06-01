(function(){

var quotesController = function($scope){

	$scope.quotesList = [];

$scope.quotes=[
		{saying:"All the world's a stage, and all the men and women mearly players.", firstName: "William", lastName:"Shakespeare", fullName: "William Shakespeare", type:"literary"},
		{saying: "The greatest pleasure in life is doing what people say you cannot do.", firstName: "Walter", lastName: "Bagehot", fullName:"Walter Bagehot", type:"motivational"},
		{saying: "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence.", firstName: "Franz", lastName:"Kafka", fullName: "Franz Kafka", type:"motivational"},
		{saying:"A creative man is motivated by the desire to achieve, not by the desire to beat others.", firstName:"Ayn", lastName:"Rand", fullName:"Ayn Rand", type:"motivational"},
		{saying:"You can't cross the sea merely by standing and staring at the water.", firstName:"Rabindranath", lastName:"Tagore", fullName: "Rabindranath Tagore", type:"motivational"},
		{saying:"Don't watch the clock. Do what it does. Keep going.", firstName:"Sam", lastName:"Levenson", fullName: "Sam Levenson", type:"motivational"},
		{saying:"He is no fool who gives what he cannot keep to gain what he cannot lose.", firstName: "Jim", lastName: "Elliot", fullName: "Jim Elliot", type:"inspirational"},
		{saying:"The more you like yourself, the less you are like anyone else, which makes you unique", firstName:"Walt", lastName:"Disney", fullName: "Walt Disney", type:"inspirational"},
		{saying:"In every walk with nature one receives far more than he seeks", firstName:"John", lastName:"Muir", fullName: "John Muir", type:"inspirational"},
		{saying:"We are here on earth to help others; what on earth the others are here for I don't know", firstName:"W.H.", lastName:"Auden", fullName: "W.H. Auden", type:"funny"},
		{saying:"People who think they know everything are a great annoyance to those of us who do", firstName:"Isaac", lastName:"Asimov", fullName: "Isaac Asimov", type:"funny"},
		{saying:"Procrastination is the art of keeping up with yesterday.", firstName:"Don", lastName:"Marquis", fullName: "Don Marquis", type:"funny"},
		{saying:"The best thing to hold onto in life is each other.", firstName:"Audrey", lastName:"Hepburn", fullName: "Audrey Hepburn", type:"love"},
		{saying:"Poetry is when an emotion has found its thought adn the thought has found words.", firstName:"Robert", lastName:"Frost", fullName: "Robert Frost", type:"poetry"},
		{saying: "If music be the food of love, play on.", firstName:"William", lastName: "Shakespeare", fullName: "William Shakespeare", genre: "love"}

	];


	$scope.sayQuote = function(){
		var randomIndex = Math.floor(Math.random()* $scope.quotes.length);
		var randomSliceIndex = randomIndex + 1;
		var randomQuote = $scope.quotes.slice(randomIndex, randomSliceIndex)[0];
		console.log($scope.quotes[randomIndex]);
		$scope.quotesList.push(randomQuote);

	

		// return {
		// 	saying: randomQuote.saying,
		// 	firstName: randomQuote.firstName,
		// 	lastName: randomQuote.lastName
		// }

	}

$scope.showForm = false;

for(var i = 0; i < $scope.quotes.length; i++){
	if($scope.quotes[i].fullName && $scope.quotes[i].firstName && $scope.quotes[i].lastName){
		 var author = {
		 	firstName: $scope.quotes[i].firstName,
		 	lastName: $scope.quotes[i].lastName,
		 	fullName: $scope.quotes[i].fullName
		 }
	}
}



};

angular.module('quoteApp')
	.controller('quotesController', quotesController);

}());


/*
Sort the authors by last name on the author column
Create a "add quote button"
When hit "add quote" button, a form expands
The form will add a new item to the quotes
Make the search portion scrollable and have the
option to search by type/genre, which will expand 
to show some genres.
*/