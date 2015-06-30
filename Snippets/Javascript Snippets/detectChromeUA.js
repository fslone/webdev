/**
*
* A User Agent sniffer to try and detect
* Google Chrome browser based on the provided 
* window information.
*
* @author Fleming Slone
* @since 5/29/2015
*
*/

;(function() {

	"use strict";

    var isChrome = window.chrome;

    return isChrome ? true : false;

}());