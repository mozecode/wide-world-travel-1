'use strict';

const travelApp = angular.module('app', []);

travelApp.factory('BookFactory', function($q, $http){

	function getBooks(){
		return $q((resolve, reject)=>{
			$http.get('../../data/guides.json')//.get.post.put.patch etc
			.then((books)=>{//instead of .done
				resolve(books);
				console.log ("books", books);
			})
			.catch((err)=>{
				reject(err);
			});
		});
	}
	return {getBooks}; //returns an object
});//end of book factory



