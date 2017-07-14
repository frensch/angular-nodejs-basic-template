(function(){

var app = angular.module('feed', []);

function updateList($http, feedItemsCtrl, $timeout) {
	$http.get('/items').then(function (response) {
		console.log(response.data);
		feedItemsCtrl.items = response.data;

		$timeout(updateList.bind(null, $http, feedItemsCtrl, $timeout), 1000);

	});
};

app.directive('feedItems', function () {
	return {
		restrict: "E",
		templateUrl: "feed-items.html",
		controllerAs: "feedItemsCtrl",
		controller: function ($http, $scope, $timeout) {
			this.items = [];

			updateList($http, this, $timeout);
		}
	};
});


app.directive('itemPosition', function () {
	return {
		restrict: "E",
		templateUrl: "item-position.html",
		scope: {itemPositionData: '='},
		controllerAs: "itemPositionCtrl",
		controller: function ($http, $scope, $timeout) {
			this.teste='teste';
		},
		link: function (scope) {
			this.itemPositionData = scope.itemPositionData;
		}
	};
});

}) ();