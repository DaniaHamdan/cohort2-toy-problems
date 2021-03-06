/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
	var first=0;
	var end=array.length-1;
	var mid=(first+end)/2;
	while(array[mid]!==target && first<=end){
		if(array[mid]<target){
			first=mid+1
		}else if(array[mid]>target){
			end=mid-1
		}
	 mid=(first+end)/2;
	}
	return mid;
}