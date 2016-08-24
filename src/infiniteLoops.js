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



	//loop() 	
console.log(countVowels("Amoraodfhsldfhjdlf"));
// 2. stringReversal

// 3. isPalindrome

// 4. largestNumber

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


