app.controller('authorController', function($scope, $routeParams, $timeout){

var authorName = $routeParams.authorName;
$scope.authorQuotes = [];




function init(){
	for(var i = 0; i < $scope.quotes.length; i++){
	 if($scope.quotes[i].fullName === authorName){
	 		console.log($scope.quotes[i].saying);
	 		$scope.authorQuotes.push($scope.quotes[i].saying);
	 		 
	 		 console.log($scope.authorQuotes);
	 }
	}

}

init();













});