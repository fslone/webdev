
/* Module Patterns */

// Self-contained in the global scope
var testModule = (function(){
	var counter = 0;
	return {
		incrementCounter: function() {
			return counter++;
		},
		resetCounter: function() {
			console.log('counter value prior to reset:' + counter);
			counter = 0;
		}
	}
})();

testModule.incrementCounter();
testModule.resetCounter();

// Can use to create namespaces of public and private variables
var myNamespace = (function(){
	var myPrivateVar = 0;
	var myPrivateMethod = function(someText){
		console.log(someText);
	}

	return {
		myPublicVar: "foo",
		myPublicFunction: function(bar){
			myPrivateVar++;
			myPrivateMethod(bar);
		}
	}
})();

// A public method that accesses both public and private attributes
var someModule = (function(){

	// private attributes
	var privateVar = 5;

	// private methods
	var privateMethod = function(){
		return 'Private Test';
	};

	return {
		// public attributes
		publicVar : 10,
		//public methods
		publicMethod : function(){
			return ' Followed By Public Test ';
		},
		//let's access the private members
		getData : function(){
			return privateMethod() + this.publicMethod() + privateVar;
		}
	}
})();
someModule.getData();