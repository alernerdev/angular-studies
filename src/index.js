import './index.css';
//require('ng-cache!./partials/HelloWorld2.html');

/* eslint-disable no-unused-vars */

import angular from 'angular';
import ngRoute from 'angular-route';

/* eslint-disable no-console */
console.log("welcome from index.js");

var app = angular.module('myStudyApp', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		redirectTo:'/start'
	});
	$routeProvider.when('/start', {
		template: "<h6> my start partial is working ? </h6>"
		//templateUrl:'partials/HelloWorld2.html'
	});
	$routeProvider.when('/finish', {
		//template: "<h6> my finish partial is working ? </h6>"
		template: require('./partials/HelloWorld2.html'),
		controller: 'myController'
	});
	$routeProvider.otherwise({
		template: "<h6> routing otherwise </h6>"
	});

	//$locationProvider.html5Mode(true);
}]);

app.controller('myController', ['$scope', function($scope) {

}]);



