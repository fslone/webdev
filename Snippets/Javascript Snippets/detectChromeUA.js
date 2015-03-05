/**
*
* A User Agent sniffer to try and detect
* Google Chrome browser based on the provided 
* window information.
*
* @author Fleming Slone [nazMaRauDerr]
* @version 0.1.1 Bumping revision number after refactoring
* @since 5/3/2013
*
*/

;(function() {

	"use strict";

    var isChrome = window.chrome;

    return isChrome ? true : false;

}());