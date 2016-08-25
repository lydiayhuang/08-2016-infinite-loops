(function() {
  'use strict';

var loop = function(collection, callback){
    // ultimate side-effects function
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    };
};

// 1. countVowels
var countVowels = function(string){
	var holdsNumbers = 0;
	var newString = string.toUpperCase().split("");
	loop(newString,function(letter){
	if (letter=== "A" || letter === "E" || letter === "I" 
		|| letter  === "O" || letter === "U") {
		holdsNumbers++;
	};
}); 
	return holdsNumbers;
}	

var brandNew = "Lilwayne Brand New"
var newString;

console.log(countVowels(brandNew));




// 2. stringReversal
var stringReversal = function(string) {

	//return string.split('').reverse().join('');
	var reverse = [];
	loop(string, function(letter) {
		reverse.unshift(letter);

	});
	return reverse.join('');
};

var answer = stringReversal('Lydia');
console.log(answer);


// 3. isPalindrome
var isPalindrome = function(string) {
	var reverse = [];
	var state = true; 
	loop(string, function(word) {
		if (stringReversal(string) === string) {
			return state;
			
		} else {
			
		};
			return state = false;
	});
			return state;
	};
		
console.log(isPalindrome('racecar'));

// 4. largestNumber
var largestNumber = function 

// 5. multBy

// 6. powerOf 

// 7. capitalizeFirstLetters 

// 8. collectValues 

// 9. containsValue 

// 10. copyObj

// 11. extendObj 

// 12. swapShuffle 


//var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 100);
//console.dir(sampleCarList);


// 13. findBlueCars

// 14. findCarsByColor

// 15. findCarsByYear

// 16. findCarsBetweenYears

// 17. findCarsByMake

// 18. findCarsByMakeAndModel

// 19. Random Price Generator

// 20. VerySpecificSearch



}());


