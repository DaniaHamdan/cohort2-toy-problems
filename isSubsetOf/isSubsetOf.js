/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
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
 */


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

 Array.prototype.isSubsetOf = function (arr) {
 	var array=[];
 	var count=0;
 	for (var i = 0; i < this.length; i++) {
 		if(!array.includes(this[i])){
 			array.push(this[i])
 		}
 	}
 	for (var i = 0; i < array.length; i++) {
 		if(arr.includes(array[i])){
 			count++
 		}
 	}
 	if(count===array.length){
 		return true;
 	}
 	return false 
 }


// Extra credit
Array.prototype.isSubsetOf = function (arr) {
	var array=[];
 	var count=0;
 	for (var i = 0; i < this.length; i++) {
 		if(!array.includes(this[i])){
 			array.push(this[i])
 		}
 	}
	var str=JSON.stringify(array);
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
