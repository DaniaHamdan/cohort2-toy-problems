/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
var primeTester = function(n) {
<<<<<<< HEAD
	if(n%2!==0 && n%3!==0 && n%5!==0){
		return true
	}
	return false 
=======

>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
}

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

<<<<<<< HEAD
  var rangePrime=function(start,end){
  	var arr=[]
  	for(var i=0;i<=(end-start)+1;i++){
  		if(primeTester(i)){
  			arr.push(i)
  		}
  	}
  	return arr
  }
=======
  
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
