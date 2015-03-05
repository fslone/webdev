/**
*
* A User Agent sniffer to try and detect
* the Opera browser based on the provided 
* window information. Searches the userAgent
* string for 'Presto' to indicate that the Presto
* rendering engine is being used, which is exclusive 
* to Opera, though it transitioning to WebKit. Somewhat 
* unreliable in always detecting Opera because the
* browser is notorious for spoofing its userAgent
* in later releases.
*
* @author Fleming Slone [nazMarauder]
* @version 0.0.1 (untested)
* @date 5/3/2013
*
*/

;(function(uA) {

    "use strict";

    var isOpera,
        
        uALowerCase = uA.toLowerCase();

    isOpera = uALowerCase.indexOf('presto');

    isOpera = (isOpera >= 0) ? true : false;

    return isOpera;

}(window.navigator.userAgent));