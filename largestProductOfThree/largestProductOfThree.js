/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

 var largestProductOfThree=function(array){
	array.sort(function(a, b) {
 	 return a - b;
	});
	var max=array[array.length-1];
	 max*=array[array.length-2];
	  max*=array[array.length-3];
	return max
}

// Extra credit:
var largestProductOfThree2=function(array){
	array.sort(function(a, b) {
 	 return a - b;
	});
	var max=array[array.length-1];
	 max*=array[array.length-2];
	  max*=array[array.length-3];
	var y=array[0];
	y*=array[1];
	if(y>max){
		return y*array[array.length-1]
	}
	return max
}




