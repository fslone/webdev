/**
*
* A User Agent sniffer to try and detect
* Safari Webkit browser based on the provided 
* window information.
*
* @author Fleming Slone [nazMarauder]
* @version 0.0.1 - not yet reliable
* @date 5/3/2013
*
*/

;(function(uA) {

    var isSafari,
        isChromeAgent = 'chrome',
        isSafariAgent = 'safari',
    	isChromeWinObj = window.chrome,
        uALowerCase = uA.toLowerCase();

    isChromeAgent = uALowerCase.indexOf(isChromeAgent);

    isSafariAgent = uALowerCase.indexOf(isSafariAgent);

    isSafari (!isChromeWinObj && isChromeAgent <= -1 && isSafariAgent >= 0) ? true : false;

    return isSafari;

}(window.navigator.userAgent));