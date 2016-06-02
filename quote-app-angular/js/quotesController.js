(function(){

var quotesController = function($scope){

	$scope.quotesList = [];

$scope.quotes = [
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


	var getRandomIndex = function(){
		return Math.floor(Math.random()* $scope.quotes.length);
	}

	$scope.sayQuote = function(){

		console.log('\n');
		// var randomIndex = Math.floor(Math.random()* $scope.quotes.length);



		//Function that creates the quote with the random index and pushes it
		var createQuote = function(index){
			console.log("createQuote index: ", index);
			var randomSliceIndex = index + 1;
			var randomQuote = $scope.quotes.slice(index, randomSliceIndex)[0];
			return $scope.quotesList.push(randomQuote);
		}

		// console.log("init index: ", randomIndex);
		



var deDupe = function(){
			
			var randomIndex = Math.floor(Math.random()* $scope.quotes.length);
			
			if($scope.quotesList.length === 0)
			{
				createQuote(randomIndex);
			}

			else
			{
				var clearToCreate = true;
				for(var i = 0; i < $scope.quotesList.length; i++){
					if($scope.quotesList[i].saying === $scope.quotes[randomIndex].saying)
					{
						clearToCreate = false;
					}
				}

				if(clearToCreate) 
				{
					createQuote(randomIndex);
					return true;
				}
				else
				{
					deDupe();
				}

			}

}


























		if ($scope.quotes.length === $scope.quotesList.length){
			alert("No more quotes! Add one!");
			console.log("No more quotes!");
		} else {
			console.log("quotes length: ", $scope.quotes.length);
			console.log("quotesList length: ", $scope.quotesList.length);
			deDupe();
		}

		// var randomIndex = Math.floor(Math.random()* $scope.quotes.length);
		// var randomSliceIndex = randomIndex + 1;
		// var randomQuote = $scope.quotes.slice(randomIndex, randomSliceIndex)[0];
		// $scope.quotesList.push(randomQuote);


	}

$scope.showForm = false;

$scope.quoteModel = {};
$scope.quoteModel.saying = "A saying";
$scope.quoteModel.firstName = "first name";
$scope.quoteModel.lastName = "last name";
$scope.quoteModel.fullName = "";

$scope.submitQuote = function(){
	// $scope.quoteModel.push($scope.quoteModel.saying).push($scope.quoteModel.firstName).push($scope.quoteModel.lastName);
	console.log($scope.quoteModel);
	$scope.quoteModel.fullName = $scope.quoteModel.firstName;
	$scope.quotes.push($scope.quoteModel);
	console.log($scope.quotes);

}


}





angular.module('quoteApp')
	.controller('quotesController', quotesController);

}());


/*
Add a quote to the quotes list

*/