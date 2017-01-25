/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
    */

    var spiralTraversal = function(matrix){
    	var arr=[];
    	for (var i = 0; i < matrix[0].length; i++) {
    			arr.push(matrix[0][i])		
    	}
    	for (var i =1; i < matrix.length; i++) {
    		arr.push(matrix[i][matrix[i].length-1])
  		}
  	 	for (var i =matrix.length-1; i >=0; i--) {
  	 		arr.push([matrix.length-1][i])
  	 	}
  	 	for (var i = matrix.length-2; i>0; i--) {
  	 		arr.push(matrix[0][i]
  	 	}
  	 	arr.push(matrix[Math.floor(matrix.length/2)][matrix[Math.floor(matrix.length/2]);
  	 		return arr
  	   }
