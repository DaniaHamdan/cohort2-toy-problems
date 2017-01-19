/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
	this.head=null
  	this.tail=null
  
};
LinkedList.prototype.addToTail=function(value){
	var node=Node(value)
    if(!this.head){
      this.head=node
      this.tail=node
    }else{
     this.tail.next=node
      this.tail=node
    }
    
    return this.tail.value
  };
LinkedList.prototype.removeHead=function(){
	var temp=this.head
	this.head=this.head.next
	return temp.value

};

LinkedList.prototype.contains=function(num){
	var curent=this.head
	while(curent){
		if(curent.value===num){
			return true
		}
		curent=curent.next
	}
	return false ;

};
function Node (value){
return{
	value:value,
	next:null
}
}

//write methods here!