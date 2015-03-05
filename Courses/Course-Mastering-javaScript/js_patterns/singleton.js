
/* Singleton Patterns */


// Basic Singleton
var mySingleton = {
	property1:"something",
	property2:"something else", 
	method1:function(){
		console.log('hello world');
	}
}


// Singleton with privacy via a closure
var mySingleton = function(){

	/* here are the private variables and methods */
	var privateVariable = 'something private';

	function showPrivate(){
		console.log(privateVariable);
	}

	/* public variables and methods (which can access private variables
	   and methods ) */
	
	return {
		publicMethod: function(){
			showPrivate();
		},
		publicVar:'the public can see this!'
	}

}

var single = mySingleton();
single.publicMethod(); // logs 'something private'
console.log(single.publicVar); // logs 'the public can see this!'

// Create the singleton instance only when needed
var Singleton =(function(){
	var instantiated;
	function init (){
		/*singleton code here*/
		return {
			publicMethod:function(){
				console.log('hello world')
			},
			publicProperty:'test'
		}
	}

	return {
		getInstance :function(){
			if (!instantiated){
				instantiated = init();
			}
			return instantiated;
		}
	}
})();

/*calling public methods is then as easy as:*/
Singleton.getInstance().publicMethod();