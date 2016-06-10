app.controller('quotesController', function($scope){

//Adding a quote model
$scope.quoteModel = {};
$scope.quoteModel.saying = "";
$scope.quoteModel.firstName = "first name";
$scope.quoteModel.lastName = "last name";
$scope.quoteModel.fullName = "";

	
	

	$scope.authorsList = [];
	$scope.genresList = [];

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




	//Create de-duped author and genre lists for the search

	var searchLists = function(authorFirstName, authorLastName, authorFullName, genre){
		function onlyUnique(value, index, arr, prop){
			for(var i = 0; i < arr.length; i++) {
				if(value[prop] === arr[i][prop]) {
					if(i !== index)
					{
						return false;
					}
					else
					{
						return true;
					}
				}
			}
			// console.log(value.fullName);
			// 	return arr.indexOf(value.fullName) === index;
			// for(var i = 0; i < arr.length; i++){
			// 	// if(value.fullName === arr[index].fullName){
			// 	// 	return i === index;	
			// 	// }
			// 	console.log(value.fullName, " : ", arr[index].fullName);
			// }
		}

		for(var i = 0; i < $scope.quotes.length; i++){
			var tempAuthor = {};
			var tempGenre = {};
			tempAuthor.firstName = $scope.quotes[i][authorFirstName];
			tempAuthor.lastName = $scope.quotes[i][authorLastName];
			tempAuthor.fullName = $scope.quotes[i][authorFullName];
			tempGenre.genre = $scope.quotes[i][genre];

						
			$scope.authorsList.push(tempAuthor);
			$scope.genresList.push(tempGenre);
		}


		// $scope.authorsList = $scope.authorsList.filter(onlyUnique);
		$scope.authorsList = $scope.authorsList.filter(function(v, i, a){
			return onlyUnique(v, i, a, 'fullName');
		});
		

		$scope.genresList = $scope.genresList.filter(function(v, i, a){
			return onlyUnique(v, i, a, 'genre')
		})
		console.log($scope.genresList);
	}

searchLists('firstName', 'lastName', 'fullName', 'type');



	






	var getRandomIndex = function(){
		return Math.floor(Math.random()* $scope.quotes.length);
	}









});
