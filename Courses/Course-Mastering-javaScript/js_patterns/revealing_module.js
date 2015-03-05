
/* Revealing Module Pattern */

/*

	The idea here is that you have private methods
	which you want to expose as public methods.

*/

var myRevealingModule = (function(){

	var name = 'John Smith';
	var age = 40;

	function updatePerson(){
		name = 'John Smith Updated';
	}

	function setPerson () {
		name = 'John Smith Set';
	}

	function getPerson () {
		return name;
	}

	return {
		set: setPerson,
		get: getPerson
	}

}());

// Sample usage:
myRevealingModule.get();