
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
 	for (var i =0; i < romanNumeral.length; i++) {
 		for(var kye in DIGIT_VALUES){
 			if(kye===romanNumeral[i]){
 				num+= DIGIT_VALUES[kye]
 			}
 		}
 	}
 	if(romanNumeral[0]==="I"&&romanNumeral[1]!=="I"&&romanNumeral[2]!=="I"){
 		num=num-2;
 	}
 	return num;
 }