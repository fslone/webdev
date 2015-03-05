/**
* A User Agent sniffer to try and detect
* FireFox based on the provided header information.
* Header can easily be spoofed to appear as a different
* browser but combining User Agent sniffing with some feature
* detection can expose spoofing in most cases. Proceed with caution
* and know what you're doing here, but if done right a MASSIVE amount
* of browser, operating system, and computer information can be gathered
* from the navigator object if needed.
*
* jslint browser: true, devel: true, white: true
* 
* @author Fleming Slone [nazMaRauDerr]
* @version 0.1.1 bumping minor version number to 1 now that boolean is tested
* @returns {boolean} true if Firefox detected in UA string
*
*/

;(function(uA){

  "use strict";

  var isFirefox = !(uA.toLowerCase().indexOf('firefox') === -1);

  return isFirefox ? true : false;

}(navigator.userAgent));
