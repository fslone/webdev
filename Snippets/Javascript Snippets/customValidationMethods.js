/**
 * Custom validation methods for use with jQuery validator - http://jqueryvalidation.org/
 *
 * @author Fleming Slone [https://github.com/fslone]
*/

/**************************************
*********    Military Time    *********
**************************************/
$.validator.addMethod("militaryTime", function(value, element, params) {
    var pattern = /([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/g,
        hour = parseInt(value.split(":")[0]);
    if(hour > 23 || hour < 0 ) return false;
    else if(!pattern.test(value) || value.length !== 8) return false;
    else return true;
}, "24 hour time format required");

/**************************************
*********    Military Time    *********
*********   (w/ no seconds)   *********
**************************************/
$.validator.addMethod("militaryTimeNoSeconds", function(value, element, params) {
	var pattern = /([01]?[0-9]|2[0-3]):[0-5][0-9]$/g,
	    hour = parseInt(value.split(":")[0]);
	if(hour > 23 || hour < 0 ) return false;
	else if(!pattern.test(value) || value.length !== 5) return false;
	else return true;
}, "24 hour time format (no seconds) required");

/**************************************
*********   mm/dd/yyyy date   *********
**************************************/
$.validator.addMethod("middleEndianDate", function(value) {
    var date = value.split("/"),
        month = parseInt(date[0]),
        day = parseInt(date[1]),
        yearLength = date[2].length,
        maxDays;
    
    switch(month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        maxDays = 31;
        break;
      case 2:
        maxDays = 29;
        break;
      case 4:
      case 6: 
      case 9:
      case 11:
        maxDays = 30;
        break;
    }
    
    if (month <= 12 
      && month >= 1 
      && day <= maxDays 
      && day >=1
      && yearLength === 4) return true;
    else return false;
}, "Please enter a valid date in mm/dd/yyyy format.");

/**************************************
*********      Valid IP       *********
**************************************/
$.validator.addMethod("ip", function(value, element) {
	return this.optional(element) || /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/.test(value);
}, "Please use proper IP address formatting (#.#.#.#)");

/**************************************
*********     Valid E-mail    *********
**************************************/
$.validator.addMethod("validEmail", function(value, element, params) {
	var pattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g;
	if (!pattern.test(value)) return false;
	else return true;
}, "Please enter a valid e-mail address.");