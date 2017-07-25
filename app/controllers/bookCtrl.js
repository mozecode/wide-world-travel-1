'use strict';

travelApp.controller('BookController', function($scope, BookFactory){
	//output some data to the DOM
	//we fetched data with factory, controller needs data to bind to the view
	BookFactory.getBooks()//returns a promise
	.then((bookData) => {
		console.log ("bookData", bookData);
		$scope.bookList = bookData.data.guides;
		//be careful to look in data property on object to find what you need
		//bookData.data.guides gives you  song objects
	});//go back to html & use bookList property to loop through book objects

});