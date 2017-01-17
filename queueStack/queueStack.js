/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];
}
   // add an item to the top of the stack
   Stack.prototype.push = function(value){
   	 this.stack.push(value)
   };

   // remove an item from the top of the stack
   Stack.prototype.pop = function(){

   	return this.stack.pop()
   };

   // return the number of items in the stack
   Stack.prototype.sizeS = function(){
   	return this.stack.length
   };
 

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var.inbox = new Stack();
   var.outbox = new Stack();
   this.count=0
}
   // called to add an item to the `queue`
   	Queue.prototype.enqueue = function(value){
   		this.inbox.push(value)
   		this.count++
  
   };

   // called to remove an item from the `queue`
   	Queue.prototype.dequeue = function(){
   	    if (this.outbox.sizeS()===0) {
            while (!this.inbox.sizeS()===0) {
             this.outbox.push(this.inbox.pop());
            }
        }
        this.count--
        return this.outbox.pop();
   };

   // should return the number of items in the queue
   	Queue.prototype.size = function(){
   		return this.count
   };
