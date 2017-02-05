/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1

or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/

var buildTriangle = function(numOfRows){
	var arr0=[1];
	var arr1=[1,1];
	var result=[arr0,arr1]
	for(var i=0;i<numOfRows-2;i++){
		var arr=[];
		for (var j = 0; j<(i+1); j++) {
			arr[0]=1
			arr[j+1]=(result[j+1][j]+result[j+1][j+1]);
		}
		arr.push(1);
		result.push(arr)
	}
	return result;
}
		