
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

<<<<<<< HEAD
 var translateRomanNumeral = function(romanNumeral){
 	romanNumeral=romanNumeral.toUpperCase()
 	var num=0
 	var DIGIT_VALUES = {
 		I: 1,
 		V: 5,
 		X: 10,
 		L: 50,
 		C: 100,
 		D: 500,
 		M: 1000
 	};
 	num+=DIGIT_VALUES[romanNumeral[0]]
 	for (var i =1; i < romanNumeral.length; i++) {
 		if(!DIGIT_VALUES[romanNumeral[i]]){
 			return null
 		}
 		for(var kye in DIGIT_VALUES){
 			if(romanNumeral[i]>romanNumeral[i-1]){
 				num-=romanNumeral[i]-romanNumeral[i-1]
 			}
 			if(kye===romanNumeral[i]){
 				num+= DIGIT_VALUES[kye]
 			}
 		}
 	}
 	return num;
 }
=======
var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
