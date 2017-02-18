/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
<<<<<<< HEAD
=======
 *
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
<<<<<<< HEAD
 */
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */
 Array.prototype.isSubsetOf = function (arr) {
 	var count=0
 	for (var i = 0; i < this.length; i++) {
 		if(arr.includes(this[i])){
 			count++
 		}
 	}
 	if(count===this.length){
 		return true;
 	}
 	return false 
 }
// Extra credit
Array.prototype.isSubsetOf = function (arr) {
 	var count=0;
	var str=JSON.stringify(this);
	var str1=JSON.stringify(arr);
	for (var i = 0; i < str.length; i++) {
 		if(str1.includes(str[i])){
 			count++
 		}
 	}
 	if(count===str.length){
 		return true;
 	}
 	return false 

}
=======
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {

}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
